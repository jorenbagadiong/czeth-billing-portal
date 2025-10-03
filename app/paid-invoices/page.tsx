import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Collection"
      breadCrumbItem="Paid Invoices"
      breadCrumbPath="/paid-invoices"
    >
      <div>Paid Invoices</div>
    </MainLayout>
  )
}
