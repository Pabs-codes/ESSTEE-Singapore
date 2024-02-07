import React from "react";
import Chart from 'react-apexcharts';

function Donutchart() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-3 mb-3 chart-container'>
                <Chart
                    type="donut"
                    width={500} // Adjust width as needed
                    height={400} // Adjust height as needed
                    series={[78, 11, 9, 2]}

                    options={{
                        labels: ['Asia', 'Africa', 'Europe', 'Americas'],
                        title:{
                            text:"Medal Country Name"
                        },

                        plotOptions:{
                            pie:{
                                donut:{
                                    labels:{
                                        show:true,
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
