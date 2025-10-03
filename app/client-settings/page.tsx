import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Business"
      breadCrumbItem="Client Settings"
      breadCrumbPath="/client-settings"
    >
      <div>Client Settings</div>
    </MainLayout>
  )
}
