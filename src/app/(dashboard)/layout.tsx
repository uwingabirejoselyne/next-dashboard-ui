import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <img src="/logo.png" alt="logo" width={32} height={32} ></img>
        <span className="hidden lg:block ">Ami School</span>
        </Link>
        <Menu/>
        </div>
        <div className="w-5/6 md:w-[92%] lg:w-[84%] md:w-[86%] bg-[#f7f8fa] overflow-scroll">
        <Navbar/>
        </div>
      </div>
    )
  }
  