import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Report"
      breadCrumbItem="Invoice Listing"
      breadCrumbPath="/invoice-listing"
    >
      <div>Invoice Listing</div>
    </MainLayout>
  )
}
