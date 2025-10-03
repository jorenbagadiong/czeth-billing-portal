import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Report"
      breadCrumbItem="Projected Revenue"
      breadCrumbPath="/projected-revenue"
    >
      <div>Projected Revenue</div>
    </MainLayout>
  )
}
