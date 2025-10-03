import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Collection"
      breadCrumbItem="All Invoices"
      breadCrumbPath="/all-invoices"
    >
      <div>All Invoices</div>
    </MainLayout>
  )
}
