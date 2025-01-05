import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import Link from 'next/link'
import {  assignmentsData, examsData, lessonsData, role, } from '@/lib/data'
import FormModal from '@/components/FormModal'

type  Assignment = {
    id: number;
    subject: string;
    class: number;
    teacher: number;
    dueDate:string
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
        header: "Due Date",
        accessor: "dueDate",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "action",
        className: "hidden md:table-cell"
    }
]
const AssignmentListPage = () => {
    const renderRow = (item: Assignment) => (
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
                {item.dueDate}
            </td>
            <td>
            <div className="flex items-center gap-2">
                {role ==="admin"&&(
          <>
        <FormModal table="assignment" type='update' data={item}/>
        <FormModal table="assignment" type='delete' id={item.id}/>
          </>

          )}
                </div>
            </td>
        </tr>
    )
    return (
        <div className='bg-white rounded-md p-4 flex-1 m-4 mt-0'>
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block font:semi-bold text-lg'>All Assignments</h1>
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
                            <FormModal table="assignment" type='create'/>
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
            <Pagination />
        </div>
    )

}

export default AssignmentListPage
