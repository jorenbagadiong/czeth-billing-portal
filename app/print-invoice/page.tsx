import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="Print Invoice"
      breadCrumbPath="/print-invoice"
    >
      <div>Print Invoice</div>
    </MainLayout>
  )
}
