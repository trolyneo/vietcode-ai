import type { InfobarContent } from '@/components/ui/infobar';

export const workspacesInfoContent: InfobarContent = {
  title: 'Workspaces Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Workspaces page is a Supabase-ready scaffold for tenant and team context. It can later connect to workspace tables, memberships and role assignments protected by Row Level Security.',
      links: [
        {
          title: 'Supabase Auth Documentation',
          url: 'https://supabase.com/docs/guides/auth'
        }
      ]
    },
    {
      title: 'Creating Workspaces',
      description:
        'Create a workspace record, attach members through a membership table and store role metadata for internal delivery teams or client-facing tenants.',
      links: [
        {
          title: 'Supabase Row Level Security',
          url: 'https://supabase.com/docs/guides/database/postgres/row-level-security'
        }
      ]
    },
    {
      title: 'Switching Workspaces',
      description:
        'You can switch between workspaces by clicking on a workspace in the list. The selected workspace becomes the active tenant context for workspace-scoped features.',
      links: []
    },
    {
      title: 'Workspace Features',
      description:
        'Each workspace operates independently with its own team members, roles, permissions, and billing. This allows you to manage multiple projects or teams within a single account while keeping their data and settings separate.',
      links: []
    },
    {
      title: 'Server-Side Permission Checks',
      description:
        'Use Supabase Row Level Security and server-side checks for resources that belong to a workspace. Client-side navigation filtering is only a UX helper.',
      links: [
        {
          title: 'Supabase Server-Side Auth',
          url: 'https://supabase.com/docs/guides/auth/server-side/nextjs'
        }
      ]
    }
  ]
};

export const teamInfoContent: InfobarContent = {
  title: 'Team Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Team Management page is prepared for Supabase-backed member invites, role assignment and workspace access controls.',
      links: [
        {
          title: 'Supabase Auth Documentation',
          url: 'https://supabase.com/docs/guides/auth'
        }
      ]
    },
    {
      title: 'Managing Team Members',
      description:
        'You can add, remove, and manage team members from this page. Invite new members by email, assign roles, and control their access levels. Each member can have different permissions based on their role.',
      links: []
    },
    {
      title: 'Roles and Permissions',
      description:
        'Store roles in a workspace membership table and enforce access with Row Level Security policies. Common roles include admin, member and viewer.',
      links: [
        {
          title: 'Supabase Row Level Security',
          url: 'https://supabase.com/docs/guides/database/postgres/row-level-security'
        }
      ]
    },
    {
      title: 'Security Settings',
      description:
        'Manage security settings for your workspace, including authentication requirements, session management, and access controls. These settings help protect workspace data and resources.',
      links: []
    },
    {
      title: 'Workspace Settings',
      description:
        'Configure general workspace settings such as name, logo, and preferences. These settings apply to the entire workspace and affect all team members.',
      links: []
    },
    {
      title: 'Navigation Access System',
      description:
        'The application includes a fully client-side navigation filtering system using the `useNav` hook. It supports `requireWorkspace`, `permission`, and `role` checks for instant access control. Navigation items are configured in `src/config/nav-config.ts` with `access` properties.',
      links: []
    }
  ]
};

export const billingInfoContent: InfobarContent = {
  title: 'Billing & Plans',
  sections: [
    {
      title: 'Overview',
      description:
        'The Billing page models VIETCODE AI service packages and is ready to connect to Stripe, Paddle or a Supabase-backed subscriptions table.',
      links: [
        {
          title: 'Stripe Billing Documentation',
          url: 'https://docs.stripe.com/billing'
        }
      ]
    },
    {
      title: 'Available Plans',
      description:
        'Show service packages for AI demos, implementation sprints and automation retainers. Persist selected package and billing status in your backend when pricing is finalized.',
      links: [
        {
          title: 'Supabase Database Documentation',
          url: 'https://supabase.com/docs/guides/database/overview'
        }
      ]
    },
    {
      title: 'Plan Features',
      description:
        'Each package can unlock implementation scope, automation capacity or reporting features. Enforce access with server checks and database policies.',
      links: []
    },
    {
      title: 'Access Control',
      description:
        'Plan and feature checks should happen on the server and in Supabase policies. Client-side labels are only display state.',
      links: []
    },
    {
      title: 'Billing Cost Structure',
      description:
        'Billing provider fees depend on the selected payment processor. Keep billing records separate from auth so Supabase Auth can remain the identity layer.',
      links: []
    },
    {
      title: 'Setup Requirements',
      description:
        'Connect a payment processor, create subscription records and mirror the active package into Supabase for authorization and reporting.',
      links: [
        {
          title: 'Supabase Auth Helpers',
          url: 'https://supabase.com/docs/guides/auth/server-side'
        }
      ]
    },
    {
      title: 'Implementation Status',
      description:
        'This is a scaffold. Final billing requires provider webhooks, database persistence and server-side access checks.',
      links: []
    }
  ]
};

export const productInfoContent: InfobarContent = {
  title: 'Product Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Products page allows you to manage your product catalog. You can view all products in a table format with server-side functionality including sorting, filtering, pagination, and search capabilities. Use the "Add New" button to create new products.',
      links: [
        {
          title: 'Product Management Guide',
          url: '#'
        }
      ]
    },
    {
      title: 'Adding Products',
      description:
        'To add a new product, click the "Add New" button in the page header. You will be taken to a form where you can enter product details including name, description, price, category, and upload product images.',
      links: [
        {
          title: 'Adding Products Documentation',
          url: '#'
        }
      ]
    },
    {
      title: 'Editing Products',
      description:
        'You can edit existing products by clicking on a product row in the table. This will open the product edit form where you can modify any product information. Changes are saved automatically when you submit the form.',
      links: [
        {
          title: 'Editing Products Guide',
          url: '#'
        }
      ]
    },
    {
      title: 'Deleting Products',
      description:
        'Products can be deleted from the product listing table. Click the delete action for the product you want to remove. You will be asked to confirm the deletion before the product is permanently removed from your catalog.',
      links: [
        {
          title: 'Product Deletion Policy',
          url: '#'
        }
      ]
    },
    {
      title: 'Table Features',
      description:
        'The product table includes several powerful features to help you manage large product catalogs efficiently. You can sort columns by clicking on column headers, filter products using the filter controls, navigate through pages using pagination, and quickly find products using the search functionality.',
      links: [
        {
          title: 'Table Features Documentation',
          url: '#'
        },
        {
          title: 'Sorting and Filtering Guide',
          url: '#'
        }
      ]
    },
    {
      title: 'Product Fields',
      description:
        'Each product can have the following fields: Name (required), Description (optional text), Price (numeric value), Category (for organizing products), and Image Upload (for product photos). All fields can be edited when creating or updating a product.',
      links: [
        {
          title: 'Product Fields Specification',
          url: '#'
        }
      ]
    }
  ]
};
