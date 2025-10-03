import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="New Invoice"
      breadCrumbPath="/new-invoice"
    >
      <div>New Invoice</div>
    </MainLayout>
  )
}
