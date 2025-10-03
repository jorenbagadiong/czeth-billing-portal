import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Business"
      breadCrumbItem="Company"
      breadCrumbPath="/company"
    >
      <div>Company</div>
    </MainLayout>
  )
}
