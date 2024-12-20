import Image from "next/image"
const SingleTeacherPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-lamaSky py-6 px-4 rounded-md flex flex-1 gap-4">
            <div className="w-1/3">
              <Image src="/my-profile.jpg" alt="" width={44} height={44} className="w-20 h-20 rounded-full object-cover" />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Joselyne Uwingabire</h1>
              <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetu.</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full  flex items-center gap-2">
                  <Image src='/blood.png' alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 2xl:w-1/3  lg:w-full  flex items-center gap-2">
                  <Image src='/date.png' alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3   flex items-center gap-2">
                  <Image src='/mail.png' alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image src='/phone.png' alt="" width={14} height={14} />
                  <span>+250 785991</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="bg-white w-full rounded-md p-4 flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
              <div className="">
                <h1 className="text-xl font-bold">90%</h1>
                <span className="text-sm text-gray-400">Attendence</span>
              </div>
            </div>
            <div className="bg-white w-full rounded-md p-4 flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
              <div className="">
                <h1 className="text-xl font-bold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            <div className="bg-white w-full rounded-md p-4 flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
              <div className="">
                <h1 className="text-xl font-bold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className="bg-white w-full rounded-md p-4 flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
              <div className="">
                <h1 className="text-xl font-bold">2</h1>
                <span className="text-sm text-gray-400">classes</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full xl:w-1/3">R</div>
    </div>
  )
}

export default SingleTeacherPage
