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
              text: "ESSTEE : Global Trade"
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
