// components/InfiniteScrollText.tsx

import React from 'react';

const InfiniteScrollText: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap  bg-purple-950 font-serif z-0 py-2">

      <div className="animate-scroll inline-block text-2xl px-7 text-white">
        <span className="mr-10 urdu z-1" style={{ fontFamily: 'Noto Nastaliq Urdu' }}>Love Marriage Expert, Love Problem Solution, One Side Love, Family Problem Solution, Divorce Problem Call: +92-300 0051248</span>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
