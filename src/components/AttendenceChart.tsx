"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        Present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        Present: 70,
        absent: 60,
    },
    {
        name: 'Wen',
        Present: 90,
        absent: 75,
    },
    {
        name: 'Thus',
        Present: 90,
        absent: 75,
    },
    {
        name: 'Fri',
        Present: 65,
        absent: 55,
    },
];

const AttendenceChart = () => {
    return (
        <div className='bg-white h-full rounded-lg p-4'>
            <div>
                <h1 className='text-lg font-semibold'>Attendence</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tickLine={false}  tick={{fill:"#d1d5db"}}/>
                    <YAxis axisLine={false}  tickLine={false}  tick={{fill:"#d1d5db"}}/>
                    <Tooltip />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
                    <Bar dataKey="Present" fill="#fae27c" legendType='circle' radius={[10, 10, 0 ,0]} />
                    <Bar dataKey="absent" fill="#c3ebfa"  legendType='circle' radius={[10, 10, 0 ,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendenceChart
