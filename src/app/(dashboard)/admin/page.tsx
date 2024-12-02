import UserCard from "@/components/UserCard"
const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
      <div className="w-full lg:w-2/3">
      <div className="flex justify-between gap-4 flex-wrap lg:flex">
        <UserCard type="Student"/>
        <UserCard type="Teacher"/>
        <UserCard type="Parent"/>
        <UserCard type="Staff"/>
      </div>
      </div>
      <div className="w-full lg:w-2/3">r</div>
    </div>
  )
}

export default AdminPage
