import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import Link from 'next/link'
import {  examsData, lessonsData, role, } from '@/lib/data'
import FormModal from '@/components/FormModal'

type Exam = {
    id: number;
    subject: string;
    class: number;
    teacher: number;
    date:string
}

const columns = [
    {
        header: "Subject Name",
        accessor: "subject"
    },
    {
        header: "class",
        accessor: "class",
        className: "hidden md:table-cell"

    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell"
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
        className: "hidden md:table-cell"
    }
]
const ExamListPage = () => {
    const renderRow = (item: Exam) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                {item.subject}
            </td>
            <td className='hidden md:table-cell'>
                {item.class}
            </td>
            <td className='hidden md:table-cell'>
                {item.teacher}
            </td>
            <td className='hidden md:table-cell'>
                {item.date}
            </td>
            <td>
                <div className="flex items-center gap-2">
                {role ==="admin"&&(
          <>
        <FormModal table="exam" type='update' data={item}/>
        <FormModal table="exam" type='delete' id={item.id}/>
          </>

          )}
                </div>
            </td>
        </tr>
    )
    return (
        <div className='bg-white rounded-md p-4 flex-1 m-4 mt-0'>
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block font:semi-bold text-lg'>All Exams</h1>
                <div className='flex flex-col md:flex-row items-center gap-4  w-full md:w-auto'>
                    <TableSearch />
                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src="/filter.png" alt='' width={14} height={14} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src="/sort.png" alt='' width={14} height={14} />
                        </button>
                        {role === "admin" && (
                            // <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            //     <Image src="/plus.png" alt='' width={14} height={14} />
                            // </button>
                            <FormModal table="exam" type='create'/>
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={examsData} />
            <Pagination />
        </div>
    )

}

export default ExamListPage
