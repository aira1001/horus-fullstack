import SidebarComponent from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
        <div className=" bg-gray-700 p-7 w-full fixed top-0 z-20">
          <div className="w-full m-3 ">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          </div>
        </div>

      <div className="flex overflow-hidden bg-base-200 sm:pl-64 gap-24 justify-between">
        <div className="relative">
          <SidebarComponent className="fixed bottom-0 left-14 top-40 h-fit pb-36 rounded-xl flex-col justify-between hidden w-64  overflow-y-auto shadow-xl sm:flex bg-gray-800" />
        </div>

        {children}
      </div>

    </div>
  )
}