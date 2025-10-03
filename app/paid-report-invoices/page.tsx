import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Report"
      breadCrumbItem="Paid Invoices"
      breadCrumbPath="/paid-report-invoices"
    >
      <div>Paid Invoices</div>
    </MainLayout>
  )
}
