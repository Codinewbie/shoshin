import React from 'react';

const CountStats = ({ color, text1, text2, text3 }) => {
  return (
    <div className={`flex p-4 flex-col gap-2 rounded-lg ${color && `bg-${color}-50`}`}>
      <div className="text-left font-semibold text-indigo-950">{text1}</div>
      <div className="text-left text-3xl font-semibold text-indigo-950">{text2}</div>
      <div className={`text-left text-sm ${color && `text-${color}-500`}`}>{text3}</div>
    </div>
  );
};

export default CountStats;
