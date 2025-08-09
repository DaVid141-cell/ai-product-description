import InputForm from '../components/InputForm'
import DashboardLayout from '../components/layouts/dashboard-layout'
import AppSidebar from '../components/app-sidebar'

export default function App() {

  return (
    <DashboardLayout className="bg-white">
        <AppSidebar/>       
          <div className="flex min-h-screen">
            <main className="flex-1 p-8 font-sans bg-white">
              <h1 className="text-2xl font-bold mb-4">AI Product Description Generator</h1>
              <InputForm/>
            </main>
          </div>
    </DashboardLayout>
  )
}
