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
      <div className="custom-tooltip bg-black text-white p-2 border rounded shadow-lg">
        <p className="text-lg font-bold">{`${payload[0].name}: $${payload[0].value} per month`}</p>
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
    { name: 'Car AC', cost: 6.41, info: 'Car Air Conditioning', color: 'orange' },
    { name: 'Central Air Conditioning', cost: 36.86, info: 'Central Air Conditioning', color: 'red' },
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
        {`
          @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

          /* Add animation styles */
          .zoom-in {
            animation: zoomIn 0.5s ease forwards;
          }

          @keyframes zoomIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          .glow {
            text-shadow: 0 0 5px rgba(255, 255, 0, 0.8), 0 0 10px rgba(255, 255, 0, 0.6);
          }

          .bar-animation {
            transition: all 0.5s ease-in-out;
          }

          .bar-animation-acc {
            transition: all 1s ease-in-out; /* Slower animation for ACC */
          }
        `}
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
                {/* Render Bars with animations */}
                <Bar dataKey="cost" radius={[10, 10, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      className={`bar-animation ${entry.name === 'ACC' ? 'bar-animation-acc' : ''}`} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </div>
            <div className="info-container ml-4 julius-sans text-white">
              <p className="text-2xl sm:text-3xl mb-4">
                The monthly electricity cost of Air Conditioned Clothing is approximately 
                <span className="zoom-in glow">$0.38</span>, making it highly economical, even when used every day.
              </p>

              {data.map(item => (
                <p key={item.name} className="open-sans text-center text-xl font-bold">{`${item.name}: $${item.cost} per month`}</p>
              ))}
                {/* <p className="text-sm text-left mt-4">
                Recommended device by the Public Interest Incorporated Association of the All Japan Electrical Construction Association (2016)
                Received the Minister of the Environment Award for Global Warming Prevention Activities (2017)
              </p> */}
              <p className="text-sm text-right mt-4">* Calculated based on 1 hour battery charge time and U.S. electricity rates.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sustainability;
