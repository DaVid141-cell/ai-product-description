import { BarChart2, ChevronRight } from "lucide-react"
import DashboardItem from "./ui/dashboard-item"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "./ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

const items = [
    {
        title: "Categories",
        url: "#",
        icon: BarChart2,
        isActive: true,
        items: [
            {
                title: "Jackets",
                url: "#",
                id: "Jackets"
            },
            {
                title: "Handbags",
                url: "#",
                id: "Handbags"
            },
        ],
    },
    {
        title: "Brand",
        url: "#",
        icon: BarChart2,
        isActive: true,
        items: [
            {
                title: "Crocs",
                url: "#",
                id: 'Crocs'
            },
            {
                title: "Nike",
                url: "#",
                id: "Nike"
            },
        ],
    },
]


export default function DashboardProduct() {
    return (
        <>
            <div className="bg-[#FE7743] w-64 rounded-xl p-4 h-80">
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span className="font-bold">{item.title}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={subItem.url}>
                                                    <Checkbox id={subItem.id} />
                                                    <Label htmlFor={subItem.id} className="font-normal">{subItem.title}</Label>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </div>
            <div className="flex-1 bg-[#273F4F] rounded-xl p-4 h-full flex flex-col">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <DashboardItem
                            key={index}
                            buttonAdd="Edit"
                            buttonBuy="Delete" 
                        />
                    ))}
                </div>
            </div>
        </>
    )
}