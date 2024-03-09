import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const studentScores = [
        { id: 1, name: 'Alice', phy: 55, chem: 90, math: 44 },
        { id: 2, name: 'Bob', phy: 75, chem: 88, math: 92 },
        { id: 3, name: 'Charlie', phy: 92, chem: 78, math: 85 },
        { id: 4, name: 'David', phy: 48, chem: 94, math: 80 },
        { id: 5, name: 'Eva', phy: 89, chem: 82, math: 88 },
        { id: 6, name: 'Frank', phy: 77, chem: 85, math: 76 },
        { id: 7, name: 'Grace', phy: 94, chem: 91, math: 89 },
        { id: 8, name: 'Hank', phy: 82, chem: 79, math: 95 },
        { id: 9, name: 'Ivy', phy: 30, chem: 87, math: 83 },
        { id: 10, name: 'Jack', phy: 73, chem: 96, math: 78 },
        { id: 11, name: 'Katherine', phy: 88, chem: 93, math: 87 },
        { id: 12, name: 'Leo', phy: 79, chem: 34, math: 91 }
    ];


    return (
        <div className='mt-20 mb-20'>
            <h3 className='ml-10 mb-5 text-orange-500 font-bold underline text-2xl'>Students Marks:</h3>
            <LineChart
                width={1000}
                height={300}
                data={studentScores}
            >
                <Line dataKey="phy" ></Line>
                <Line stroke="#8884d8" dataKey="chem" ></Line>
                <Line stroke="#82ca9d" dataKey="math" ></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid></CartesianGrid>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default Dashboard;