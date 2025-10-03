import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="Preview Invoice"
      breadCrumbPath="/preview-invoice"
    >
      <div>Preview Invoice</div>
    </MainLayout>
  )
}
