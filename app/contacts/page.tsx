import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Business"
      breadCrumbItem="Contacts"
      breadCrumbPath="/contacts"
    >
      <div>Client Settings</div>
    </MainLayout>
  )
}
