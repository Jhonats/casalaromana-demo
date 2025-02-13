import Sidenav from "../components/dashboard/Sidenav";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex">
        <Sidenav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-6">{children}</div>
    </div>
  );
}
