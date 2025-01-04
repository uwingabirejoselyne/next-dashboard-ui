import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import Link from 'next/link'
import { role, studentsData } from '@/lib/data'
import FormModal from '@/components/FormModal'

type Student = {
  id:number;
  studentId:string;
  name:string;
  email?:string;
  photo:string;
  phone?:string;
  grade:number,
  class:string,
  address:string
}

const columns =[
  {
    header:"info",
    accessor:"info"
  },
  {
    header:"Student Id",
    accessor:"studentId",
    className:"hidden md:table-cell"
  },
  {
    header:"Grade",
    accessor:"grade",
    className:"hidden md:table-cell"
  },
  {
    header:"Phone",
    accessor:"phone",
    className:"hidden lg:table-cell"
  },
  {
    header:"Address",
    accessor:"address",
    className:"hidden md:table-cell"
  },
  {
    header:"Actions",
    accessor:"action",
    className:"hidden md:table-cell"
  }
]
const StudentListPage = () => {
  const renderRow =(item:Student) =>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.photo} alt='' width={40} height={40} className='hidden md:block w-10 h-10 rounded-full object-cover'/>
        <div className='flex flex-col'>
          <h3 className="font-semibold">{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.studentId}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          <button className='h-7 w-7 flex items-center justify-center rounded-full bg-lamaSky '>
            <Image src="/view.png" alt='' width={16} height={16}/>
          </button>
          </Link>
          {role ==="admin"&&(
          //    <button className='h-7 w-7 flex items-center justify-center rounded-full bg-lamaPurple '>
          //    <Image src="/delete.png" alt='' width={16} height={16}/>
          //  </button>
          <FormModal table="student" type='delete' id={item.id}/>
          )}
        </div>
      </td>
    </tr>
 )
  return (
    <div className='bg-white rounded-md p-4 flex-1 m-4 mt-0'>
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block font:semi-bold text-lg'>All Students</h1>
        <div className='flex flex-col md:flex-row items-center gap-4  w-full md:w-auto'>
          <TableSearch/>
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
              <Image src="/filter.png" alt='' width={14} height={14}/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
              <Image src="/sort.png" alt='' width={14} height={14}/>
            </button>
            {role ==="admin"&&(
            // <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
            //   <Image src="/plus.png" alt='' width={14} height={14}/>
            // </button>
            <FormModal table="student" type='create'/>
             )}
          </div>
        </div>
      </div>
      <Table columns ={columns} renderRow={renderRow} data={studentsData}/>
      <Pagination/>
    </div>
  )

}

export default StudentListPage
