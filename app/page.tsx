import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ClientSelection from "@/components/ClientSelection"
import NotificationManagement from "@/components/NotificationManagement"
import AssetViewer from "@/components/AssetViewer"
import QueryManagement from "@/components/QueryManagement"
import TaskManagement from "@/components/TaskManagement"
import { ModeToggle } from "@/components/mode-toggle"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:gap-10 space-y-4 sm:space-y-0 justify-between items-start sm:items-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
          <ClientSelection />
          <ModeToggle />
        </div>
      </div>
      <div className="border-b border-gray-200"></div>
      <Tabs defaultValue="notifications" className="mt-4 sm:mt-6">
        <TabsList className="overflow-x-auto flex w-full sm:w-auto">
          <TabsTrigger value="notifications" className="flex-1 sm:flex-none">Notifications</TabsTrigger>
          <TabsTrigger value="assets" className="flex-1 sm:flex-none">Assets</TabsTrigger>
          <TabsTrigger value="tasks" className="flex-1 sm:flex-none">Tasks</TabsTrigger>
          <TabsTrigger value="queries" className="flex-1 sm:flex-none">Queries</TabsTrigger>
        </TabsList>
        <TabsContent value="notifications" className="mt-2 sm:mt-4">
          <NotificationManagement />
        </TabsContent>
        <TabsContent value="assets" className="mt-2 sm:mt-4">
          <AssetViewer />
        </TabsContent>
        <TabsContent value="tasks" className="mt-2 sm:mt-4">
          <TaskManagement />
        </TabsContent>
        <TabsContent value="queries" className="mt-2 sm:mt-4">
          <QueryManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}

