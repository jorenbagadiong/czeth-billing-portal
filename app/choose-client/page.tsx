import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="Choose Client"
      breadCrumbPath="/choose-client"
    >
      <div>Choose Client</div>
    </MainLayout>
  )
}
