import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { getDonationId } from "../../utils/localStorage";

const Statistics = () => {
  const totalDonatedCards = getDonationId();
  const totalNumberDonations = totalDonatedCards.length;

  const percentageOfDonations = parseFloat(
    ((totalNumberDonations / 12) * 100).toFixed(1)
  );
  const percentageOfAvailable = 100 - percentageOfDonations;

  const data01 = [
    {
      name: "Total Donation",
      value: percentageOfAvailable,
    },
    {
      name: "Your Donation",
      value: percentageOfDonations,
    },
  ];
  const COLORS = ["#0088FE", "#00C49F"];

  

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};





  const yourDonationColor = {
    backgroundColor: "#00C49F",
  };
  const totalDonationColor = {
    backgroundColor: "#0088FE",
  };
  
  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-2">
     
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              labelLine = {false}
              label={renderCustomizedLabel}
              
            >
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-10 mt-8">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <p className="font-semibold">Your Donation</p>
            <span className="px-10 py-2" style={yourDonationColor}></span>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <p className="font-semibold">Total Donation</p>
            <span className="px-10 py-2" style={totalDonationColor}></span>
          </div>
        </div>
     
    </div>
  );
};

export default Statistics;
