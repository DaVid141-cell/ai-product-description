import DashboardLayout from "../components/layouts/dashboard-layout";
import AppSidebar from '../components/app-sidebar'

import DashboardHeader from "../components/dashboard-header";
import DashboardProduct from "../components/dashboard-product";

export default function Dashboard() {
    return (
        <DashboardLayout className="bg-[#EFEEEA]">
            <AppSidebar/>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <DashboardHeader/>
                    <div className="flex flex-row gap-4 rounded-xl p-4">
                        <DashboardProduct/>
                    </div>
                </div>
        </DashboardLayout>
    )
}