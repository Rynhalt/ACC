import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts';

// Define the type for your data
interface DataItem {
  name: string;
  cost: number;
  info: string;
  color: string; // Color property for the bar
}

// Custom Tooltip for the chart
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black text-white p-2 border rounded shadow-lg">
        <p className="text-lg font-bold">{`$${payload[0].value}`}</p>
        <p>{payload[0].payload.info}</p>
      </div>
    );
  }
  return null;
};

const Sustainability: React.FC = () => {
  // Define your data array with color properties
  const data: DataItem[] = [
    { name: 'ACC', cost: 0.38, info: 'Air Conditioned Clothing', color: 'green' },
    { name: 'Car AC', cost: 6.41, info: 'Car Air Conditioning', color: 'red' },
    { name: 'Central Air Conditioning', cost: 36.86, info: 'Central Air Conditioning', color: 'red' },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

          /* Add animation styles */
          .bar-shadow {
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          }

          .bar-label {
            fill: white; /* Label color */
            font-size: 14px; /* Label font size */
            text-anchor: middle; /* Center the text */
          }

          /* Add animation for the cost */
          .cost-highlight {
            color: #ffffff; /* Initial color */
            text-shadow: 0 0 5px #ff0; /* Glow effect */
            transition: color 0.5s ease; /* Smooth transition */
          }

          .cost-highlight:hover, .cost-highlight:focus {
            color: #ff0; /* Change to yellow on hover */
          }
        `}
      </style>

      <div className="sustainability-section flex flex-col px-4 sm:px-16 pt-12 sm:pt-24 pb-12 mt-0 w-full bg-black relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl julius-sans text-left text-white mb-8">
            Sustainability
          </h2>
          <div className="flex justify-center items-start">
            <div className="chart-container">
              <BarChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" fontFamily="'Open Sans', sans-serif" />
                <YAxis fontFamily="'Open Sans', sans-serif" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="cost" radius={[10, 10, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#gradient-${index})`} 
                      className="bar-shadow" 
                    />
                  ))}
                </Bar>
                <defs>
                  {data.map((entry, index) => (
                    <linearGradient id={`gradient-${index}`} key={index} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: entry.color, stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.5 }} />
                    </linearGradient>
                  ))}
                </defs>
              </BarChart>
            </div>
            <div className="info-container ml-4 julius-sans text-white">
              <p className="text-2xl sm:text-3xl mb-4 text-center">
                The monthly electricity cost of Air Conditioned Clothing is approximately 
                <span className="cost-highlight">$0.38</span>, making it highly economical, even when used every day.
              </p>

              <p className="text-sm text-right mt-4">* Calculated based on 1 hour battery charge time and U.S. electricity rates.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sustainability;
