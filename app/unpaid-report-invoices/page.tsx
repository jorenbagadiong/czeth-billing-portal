import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Report"
      breadCrumbItem="Unpaid Invoices"
      breadCrumbPath="/unpaid-report-invoices"
    >
      <div>Unpaid Invoices</div>
    </MainLayout>
  )
}
