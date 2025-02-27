import React from 'react';

function Svg2({ color = "#1692A1", height = "h-32" }) {
  return (
    <div className={height}>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#1692A1" viewBox="0 0 200 200">
        <path
          fill="url(#paint0_linear_105_284)"
          fillRule="evenodd"
          d="M0 0h50v50H0V0Zm100 50H50v50H0v50h50v50h50v-50h50v50h50v-50h-50v-50h50V50h-50V0h-50v50Zm0 50h50V50h-50v50Zm0 0v50H50v-50h50Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient id="paint0_linear_105_284" x1="100" x2="100" y1="0" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1692A1" />
            <stop offset="1" stopColor="#F3ACFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Svg2;
