import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: '2018',
        jan: 4000,
        feb: 2400,
        amt: 2400,
    },
    {
        name: '2019',
        jan: 3000,
        feb: 1398,
        amt: 2210,
    },
    {
        name: '2020',
        jan: 2000,
        feb: 9800,
        amt: 2290,
    },
    {
        name: '2021',
        jan: 2780,
        feb: 3908,
        amt: 2000,
    },
    {
        name: '2022',
        jan: 1890,
        feb: 4800,
        amt: 2181,
    },
    {
        name: '2023',
        jan: 2390,
        feb: 3800,
        amt: 2500,
    },
    {
        name: '2024',
        jan: 3490,
        feb: 4300,
        amt: 2100,
    },
];

function LineCharts() {
    return (
        <ResponsiveContainer className="mt-20 bg-darkBlue20 rounded-2xl m-4 p-8" width="100%" height={403}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="jan" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="feb" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineCharts;
