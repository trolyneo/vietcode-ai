import { NavGroup } from '@/types';

/**
 * Navigation configuration with workspace-aware access metadata
 *
 * This configuration is used for both the sidebar navigation and Cmd+K bar.
 * Items are grouped for the sidebar and Cmd+K surfaces.
 *
 * Access metadata:
 * Each navigation item can have an `access` property that controls client-side
 * visibility based on permissions, plans, features, roles, and workspace context.
 *
 * Examples:
 *
 * 1. Require workspace:
 *    access: { requireWorkspace: true }
 *
 * 2. Require specific permission:
 *    access: { requireWorkspace: true, permission: 'workspace:teams:manage' }
 *
 * 3. Require specific plan:
 *    access: { plan: 'pro' }
 *
 * 4. Require specific feature:
 *    access: { feature: 'premium_access' }
 *
 * 5. Require specific role:
 *    access: { role: 'admin' }
 *
 * 6. Multiple conditions (all must be true):
 *    access: { requireWorkspace: true, permission: 'workspace:teams:manage', plan: 'pro' }
 *
 * Note: The `visible` function is deprecated but still supported for backward compatibility.
 * Use the `access` property for new items.
 */
export const navGroups: NavGroup[] = [
  {
    label: 'Điều hành',
    items: [
      {
        title: 'Tổng quan',
        url: '/dashboard/overview',
        icon: 'dashboard',
        isActive: false,
        shortcut: ['d', 'd'],
        items: []
      },
      {
        title: 'Lead & tư vấn',
        url: '/dashboard/users',
        icon: 'teams',
        shortcut: ['u', 'u'],
        isActive: false,
        items: []
      },
      {
        title: 'Concept demo',
        url: '/dashboard/product',
        icon: 'product',
        shortcut: ['p', 'p'],
        isActive: false,
        items: []
      },
      {
        title: 'Pipeline triển khai',
        url: '/dashboard/kanban',
        icon: 'kanban',
        shortcut: ['k', 'k'],
        isActive: false,
        items: []
      },
      {
        title: 'Trao đổi nội bộ',
        url: '/dashboard/chat',
        icon: 'chat',
        shortcut: ['c', 'c'],
        isActive: false,
        items: []
      }
    ]
  },
  {
    label: 'Vận hành',
    items: [
      {
        title: 'Workspace',
        url: '/dashboard/workspaces',
        icon: 'workspace',
        isActive: false,
        items: []
      },
      {
        title: 'Biểu mẫu',
        url: '#',
        icon: 'forms',
        isActive: true,
        items: [
          {
            title: 'Form cơ bản',
            url: '/dashboard/forms/basic',
            icon: 'forms',
            shortcut: ['f', 'f']
          },
          {
            title: 'Form nhiều bước',
            url: '/dashboard/forms/multi-step',
            icon: 'forms'
          },
          {
            title: 'Sheet & dialog',
            url: '/dashboard/forms/sheet-form',
            icon: 'forms'
          },
          {
            title: 'Mẫu nâng cao',
            url: '/dashboard/forms/advanced',
            icon: 'forms'
          }
        ]
      },
      {
        title: 'Thông báo',
        url: '/dashboard/notifications',
        icon: 'notification',
        shortcut: ['n', 'n'],
        isActive: false,
        items: []
      }
    ]
  },
  {
    label: 'Tài khoản',
    items: [
      {
        title: 'Hồ sơ',
        url: '/dashboard/profile',
        icon: 'profile',
        shortcut: ['m', 'm'],
        isActive: false,
        items: []
      },
      {
        title: 'Billing',
        url: '/dashboard/billing',
        icon: 'billing',
        shortcut: ['b', 'b'],
        isActive: false,
        items: [],
        access: { requireWorkspace: true }
      },
      {
        title: 'Trang chủ',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  }
];
