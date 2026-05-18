'use client';

import { useMemo } from 'react';
import type { NavItem, NavGroup } from '@/types';

/**
 * Hook to filter navigation items based on workspace access (fully client-side)
 *
 * @param items - Array of navigation items to filter
 * @returns Filtered items
 */
export function useFilteredNavItems(items: NavItem[]) {
  const accessContext = useMemo(() => {
    return {
      permissions: ['workspace:read'],
      role: 'admin',
      hasWorkspace: true
    };
  }, []);

  // Filter items synchronously (all client-side)
  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        // No access restrictions
        if (!item.access) {
          return true;
        }

        if (item.access.requireWorkspace && !accessContext.hasWorkspace) {
          return false;
        }

        if (item.access.permission) {
          if (!accessContext.hasWorkspace) {
            return false;
          }
          if (!accessContext.permissions.includes(item.access.permission)) {
            return false;
          }
        }

        if (item.access.role) {
          if (!accessContext.hasWorkspace) {
            return false;
          }
          if (accessContext.role !== item.access.role) {
            return false;
          }
        }

        if (item.access.plan || item.access.feature) {
          console.warn(
            `Plan/feature checks for "${item.title}" should be enforced by Supabase policies or server checks.`
          );
        }

        return true;
      })
      .map((item) => {
        // Recursively filter child items
        if (item.items && item.items.length > 0) {
          const filteredChildren = item.items.filter((childItem) => {
            // No access restrictions
            if (!childItem.access) {
              return true;
            }

            if (childItem.access.requireWorkspace && !accessContext.hasWorkspace) {
              return false;
            }

            if (childItem.access.permission) {
              if (!accessContext.hasWorkspace) {
                return false;
              }
              if (!accessContext.permissions.includes(childItem.access.permission)) {
                return false;
              }
            }

            if (childItem.access.role) {
              if (!accessContext.hasWorkspace) {
                return false;
              }
              if (accessContext.role !== childItem.access.role) {
                return false;
              }
            }

            // Plan/feature checks (same warning as above)
            if (childItem.access.plan || childItem.access.feature) {
              console.warn(
                `Plan/feature checks for "${childItem.title}" should be enforced by Supabase policies or server checks.`
              );
            }

            return true;
          });

          return {
            ...item,
            items: filteredChildren
          };
        }

        return item;
      });
  }, [items, accessContext]);

  return filteredItems;
}

/**
 * Hook to filter navigation groups based on workspace access (fully client-side)
 *
 * @param groups - Array of navigation groups to filter
 * @returns Filtered groups (empty groups are removed)
 */
export function useFilteredNavGroups(groups: NavGroup[]) {
  const allItems = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const filteredItems = useFilteredNavItems(allItems);

  return useMemo(() => {
    const filteredSet = new Set(filteredItems.map((item) => item.title));
    return groups
      .map((group) => ({
        ...group,
        items: filteredItems.filter((item) =>
          group.items.some((gi) => gi.title === item.title && filteredSet.has(gi.title))
        )
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, filteredItems]);
}
