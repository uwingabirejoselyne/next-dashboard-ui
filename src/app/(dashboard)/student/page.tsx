import Announcements from "@/components/Announcements"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white rounde-md p-4">
        <h1 className="text-xl font-semi-bold">Schedule(4A)</h1>
      </div>
      </div>
      <div className="w-full flex flex-col gap-8 xl:w-1/3">
      <EventCalendar/>
      <Announcements/>
      </div>
    </div>
  )
}

export default StudentPage
