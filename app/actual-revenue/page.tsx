import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Report"
      breadCrumbItem="Actual Revenue"
      breadCrumbPath="/actual-revenue"
    >
      <div>Actual Revenue</div>
    </MainLayout>
  )
}
