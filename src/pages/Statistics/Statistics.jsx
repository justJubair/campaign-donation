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
  const yourDonationColor = {
    backgroundColor: "#00C49F",
  };
  const totalDonationColor = {
    backgroundColor: "#0088FE",
  };
  return (
    <div className=" max-w-screen-xl mx-auto p-4 mt-2">
      <div className="">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart >
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={95}
              fill="#8884d8"
              label
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
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <p className="font-semibold">Your Donation</p>
          <span className="px-10 p-4" style={yourDonationColor}></span>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <p className="font-semibold">Total Donation</p>
          <span className="px-10 p-4" style={totalDonationColor}></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
