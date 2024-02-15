import React from "react";
import Chart from 'react-apexcharts';
import './Donutchart.css'; // Import the CSS file

function Donutchart() {
  return (
    <React.Fragment>
      <div className='container-fluid mt-3 mb-3 chart-container'>
        <Chart
          type="donut"
          width={400}
          height={300}
          series={[78, 11, 9, 2]}
          options={{
            labels: ['Asia', 'Africa', 'Europe', 'Americas'],
            title: {
              text: "Esstee : Global Trade",
              style: {
                fontSize: '9px', // Example styling
                color: 'black',    // Make text color red
                fontWeight: 'bold', // Example styling
                paddingBottom: '20px' // Add padding bottom of 20px
              }
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                  }
                }
              }
            }
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default Donutchart;
