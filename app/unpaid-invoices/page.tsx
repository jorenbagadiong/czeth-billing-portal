import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Collection"
      breadCrumbItem="Unpaid Invoices"
      breadCrumbPath="/unpaid-invoices"
    >
      <div>Unpaid Invoices</div>
    </MainLayout>
  )
}
