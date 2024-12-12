import Announcements from "@/components/Announcements"
import AttendenceChart from "@/components/AttendenceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"
const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex justify-between gap-4 flex-wrap lg:flex">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 lg:w-1/3">
      <EventCalendar/>
      <Announcements/>
      </div>
    </div>
    
  )
}

export default AdminPage
