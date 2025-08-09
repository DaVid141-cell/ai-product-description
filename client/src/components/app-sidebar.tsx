import { Brain, LayoutDashboard} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "./ui/sidebar"
import { NavUser } from "./nav-user"
import { NavMain } from "./nav-main"
import { Link } from "react-router-dom"

// Menu items.
const data = {
  user: {
    name: "David Justin",
    email: "example@gmail.com",
    avatar: "https://github.com/shadcn.png"
  },
  items: [
    {
      title: "Home",
      url: "/dashboard",
    },
    {
      title: "Inbox",
      url: "/inbox",
    },
    {
      title: "Calendar",
      url: "/calendar",
    },
    {
      title: "Search",
      url: "/search",
    },
    {
      title: "Settings",
      url: "/settings",
    },
  ],
  navMain: [
    
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-foreground">
      
      <SidebarHeader>
        <Link to="/">
        <SidebarMenuButton className="cursor-pointer">
            <Brain />
              <h1 className="text-lg font-bold">JumpStart Ai</h1>
        </SidebarMenuButton>
        </Link> 
      </SidebarHeader>
        
        <SidebarContent>
          <NavMain items={data.navMain}/>
        </SidebarContent>
        
        <SidebarFooter>
                <NavUser user={data.user}/>
        </SidebarFooter>

    </Sidebar>
  )
}
export default AppSidebar