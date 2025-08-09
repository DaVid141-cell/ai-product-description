import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import {AppSidebar}  from "../app-sidebar"
import { Separator } from "../ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Link } from "react-router-dom";

export default function DashboardLayout({ children, className}: { children: React.ReactNode; className?: string }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        
        <div className={className}>
          <header className="sticky top-0 z-50 bg-white/30 backdrop-blur flex rounded-r-full w-80 h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink asChild>
                      <Link to="/dashboard">
                      <BreadcrumbPage>Home</BreadcrumbPage>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <BreadcrumbPage></BreadcrumbPage>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
              {children}
          </div>
      </SidebarInset>
    </SidebarProvider>
  )
}