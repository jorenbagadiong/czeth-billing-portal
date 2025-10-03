import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="Billing Period"
      breadCrumbPath="/billing-period"
    >
      <div>Billing Period</div>
    </MainLayout>
  )
}
