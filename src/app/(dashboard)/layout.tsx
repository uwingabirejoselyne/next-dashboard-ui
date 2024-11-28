export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200"></div>
        <div className="w-5/6 md:w-[92%] lg:w-[84%] md:w-[86%] bg-blue-200"></div>
      </div>
    )
  }
  