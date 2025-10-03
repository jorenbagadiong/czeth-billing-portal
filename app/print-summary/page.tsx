import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="Print Summary"
      breadCrumbPath="/print-summary"
    >
      <div>Print Summary</div>
    </MainLayout>
  )
}
