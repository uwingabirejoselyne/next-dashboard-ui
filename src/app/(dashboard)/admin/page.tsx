import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      <div className="flex justify-between gap-4 flex-wrap lg:flex">
        <UserCard type="Student"/>
        <UserCard type="Teacher"/>
        <UserCard type="Parent"/>
        <UserCard type="Staff"/>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>
        </div>
        <div className="w-full lg:w-2/3 h-[450px]">
        </div>
      </div>
      <div></div>
      </div>
      <div className="w-full lg:w-2/3">r</div>
    </div>
  )
}

export default AdminPage
