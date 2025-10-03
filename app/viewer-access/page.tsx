import MainLayout from "@/components/MainLayout"

export default function Page() {
  return (
    <MainLayout
      breadCrumbTitle="User Settings"
      breadCrumbItem="Viewer Access"
      breadCrumbPath="/viewer-access"
    >
      <div>Viewer Access</div>
    </MainLayout>
  )
}
