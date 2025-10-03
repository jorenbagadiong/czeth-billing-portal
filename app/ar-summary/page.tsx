import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Report"
      breadCrumbItem="AR Summary"
      breadCrumbPath="/ar-summary"
    >
      <div>AR Summary</div>
    </MainLayout>
  )
}
