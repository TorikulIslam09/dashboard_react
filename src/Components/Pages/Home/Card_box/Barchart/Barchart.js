import React from 'react';
import './Barchart.scss';
import SyncIcon from '@mui/icons-material/Sync';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Pie, PieChart, Tooltip, XAxis } from 'recharts';




const Barchart = () => {
    const data = [
        {
          "name": "Januaer",
          "students": 5000,
          "succes": 600,
          "amt": 2400
        },
        {
          "name": "February",
          "students": 25,
          "succes": 44,
          "amt": 2210
        },
        {
          "name": "March",
          "students": 2000,
          "succes": 9800,
          "amt": 2290
        },
        {
          "name": "May",
          "students": 2780,
          "succes": 3908,
          "amt": 2000
        },
        {
          "name": "June",
          "students": 1890,
          "succes": 4800,
          "amt": 2181
        },
        {
          "name": "July",
          "students": 2390,
          "succes": 3800,
          "amt": 2500
        },
        {
          "name": "Augost",
          "students": 3490,
          "succes": 4300,
          "amt": 2100
        },
        {
          "name": "September",
          "students": 300,
          "succes": 44,
          "amt": 2100
        },
        {
          "name": "October",
          "students": 6522,
          "succes": 2000,
          "amt": 2100
        },
        {
          "name": "November",
          "students": 6522,
          "succes": 2000,
          "amt": 2100
        },
        {
          "name": "December",
          "students": 6522,
          "succes": 2000,
          "amt": 2100
        },
      ];
      const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
    
    return (
        <div className='d-flex chart-items'>
        
      
        <div className="barchart">
            <div className="sells-chart d-flex justify-content-between mb-4 px-2">
            <span className='fw-bold'>Sales</span>
            <button type="button" class="btn btn-light"> <span> <SyncIcon/> </span>Sync </button>
            </div>
            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey="name"></XAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <CartesianGrid stroke="#f5f5f5"/>
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" > </Area>
                
                <Bar dataKey="succes" barSize={15} fill="#413ea0"> </Bar>
                <Bar dataKey="students" barSize={12} fill="#82ca9d" />
            </ComposedChart>
        </div>

        <div className="piechart">
            <PieChart width={730} height={250}>
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" ></Pie>
            </PieChart>
        </div>





           
        </div>
    );
};

export default Barchart;