import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
const data = [
    {
      subject: 'January',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Febuary',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'March',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'April',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'May',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'June',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
function RiskBar() {
    return (
        <ResponsiveContainer className=" bg-darkBlue20 rounded-2xl mt-4 mr-5 xs:w-14 " width="100%" height={403}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="KFC" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="McDonald's" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      );
}

export default RiskBar