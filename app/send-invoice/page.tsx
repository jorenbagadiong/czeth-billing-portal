import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="Send Invoice"
      breadCrumbPath="/send-invoice"
    >
      <div>Send Invoice</div>
    </MainLayout>
  )
}
