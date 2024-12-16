import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white rounde-md p-4">
        <h1 className="text-xl font-semi-bold">Schedule(4A)</h1>
        <BigCalendar/>
      </div>
      </div>
      <div className="w-full flex flex-col gap-8 xl:w-1/3">
      <Announcements/>
      </div>
    </div>
  )
}

export default ParentPage
