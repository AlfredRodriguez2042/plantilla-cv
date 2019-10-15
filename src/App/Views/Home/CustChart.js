import { Doughnut } from 'react-chartjs-2'
import React from 'react'

const CustChart = ({uno}) => {
    const data = {
         datasets:[{
             data:[20,40,30],
             backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              //  'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
               // 'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
         }],
         labels:['Angular','React','Node'],  
             
         
    }
    const option = {
        responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text:  `${uno}`,
                fontSize:24
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
    }
    return (
        <Doughnut
        data={data}
        options={option}
        />
            
        
    )
}

export default CustChart



export const CustChart2 = ({percent,color,subtitle,title})=>{ 
    const data = {
        datasets:[{
            data:[`${percent}`],
            backgroundColor:[
                'rgba(100,95,55, 0.8)',`${color}`],
           // borderColor: [`${color}`] 
        }],
        labels:[`${subtitle}`]
    }
    const option = {
        responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text:  `${title}`,
                fontSize:24
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
    }
    
   return (

   <Doughnut
     data={data}
     options={option} 
    />
    
    )
}
