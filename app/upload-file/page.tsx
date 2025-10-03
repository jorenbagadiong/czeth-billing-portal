import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="Billing"
      breadCrumbItem="Upload File"
      breadCrumbPath="/upload-file"
    >
      <div>Upload File</div>
    </MainLayout>
  )
}
