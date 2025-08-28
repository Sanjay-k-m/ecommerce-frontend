'use client';

import * as React from 'react';
import {
  IconCamera,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconInnerShadowTop,
 
  IconReport,
  IconSearch,
  IconSettings,

} from '@tabler/icons-react';

// import { NavDocuments } from '@/components/nav-documents';
import { NavMain } from './nav-main';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar';
import { useUserStore } from '~/stores/user.store';
import { useAuthStore } from '~/stores/auth.store';

const data = {
  // user: {
  //   name: 'shadcn',
  //   email: 'm@example.com',
  //   avatar: '/avatars/shadcn.jpg',
  // },
  navMain: [
    {
      title: 'Electronics',
      url: '#',
      items: [
        { title: 'Mobile Phones', url: '#' },
        { title: 'Laptops', url: '#' },
        { title: 'Cameras', url: '#' },
      ],
    },
    {
      title: 'Clothing',
      url: '#',
      items: [
        { title: 'Men', url: '#' },
        { title: 'Women', url: '#' },
        { title: 'Kids', url: '#' },
      ],
    },
    {
      title: 'Accessories',
      url: '#',
      items: [
        { title: 'Watches', url: '#' },
        { title: 'Bags', url: '#' },
        { title: 'Jewelry', url: '#' },
      ],
    },
    {
      title: 'Home & Living',
      url: '#',
      items: [
        { title: 'Furniture', url: '#' },
        { title: 'Kitchen', url: '#' },
        { title: 'Decor', url: '#' },
      ],
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp,
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: 'Data Library',
      url: '#',
      icon: IconDatabase,
    },
    {
      name: 'Reports',
      url: '#',
      icon: IconReport,
    },
    {
      name: 'Word Assistant',
      url: '#',
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, getProfile } = useUserStore();
  const { isAuthenticated } = useAuthStore();

  React.useEffect(() => {
    getProfile();
  }, [isAuthenticated]);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            firstName: user?.firstName || '',
            email: user?.email || '',
            avatar: user?.avatar || '',
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
