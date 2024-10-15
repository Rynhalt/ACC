import React, { useEffect, useState } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
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
      <div className="custom-tooltip bg-white p-2 border rounded shadow-lg">
        <p>{`${payload[0].name}: $${payload[0].value} per month`}</p>
        <p>{payload[0].payload.info}</p>
      </div>
    );
  }
  return null;
};

const Sustainability: React.FC = () => {
  // Define your data array with color properties
  const data: DataItem[] = [
    { name: 'ACC', cost: 0.38, info: 'Calculated based on 1 hour battery charge time and U.S. electricity rates.', color: 'green' },
    { name: 'Central Air Conditioning', cost: 36.86, info: 'Calculated based on 1 hour usage and U.S. electricity rates.', color: 'red' },
    { name: 'Car AC', cost: 6.41, info: 'Calculated based on 1 hour usage and U.S. electricity rates.', color: 'red' },
  ];

  // State for animation
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Trigger animation on component mount
    setAnimationClass('animate-charge-cycle');
  }, []);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      </style>

      <div className="sustainability-section flex flex-col px-4 sm:px-16 pt-12 sm:pt-24 pb-12 mt-0 w-full bg-deepblue relative">
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {/* Render a single Bar and assign colors dynamically using Cell */}
                <Bar dataKey="cost" radius={[10, 10, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </div>
            <div className="info-container ml-4 julius-sans text-white">
              <h3 className="text-3xl sm:text-4xl mb-4 text-right open-sans">Monthly Cost Comparison</h3>
              {data.map(item => (
                <p key={item.name} className="open-sans text-right">{`${item.name}: $${item.cost} per month - ${item.info}`}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sustainability;
