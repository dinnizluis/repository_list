import * as React from "react";

function SvgSearch(props) {
  return (
    <svg width={30} height={30.1} fill="none" {...props}>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M30 10.816c0 5.974-4.843 10.817-10.817 10.817a10.77 10.77 0 01-6.794-2.4l-10.86 10.86L0 28.562l10.85-10.85a10.772 10.772 0 01-2.483-6.897C8.367 4.843 13.209 0 19.183 0c5.974 0 10.816 4.843 10.816 10.816zm-2.164 0a8.653 8.653 0 11-17.306 0 8.653 8.653 0 0117.306 0z"
        clipRule="evenodd"
        filter="url(#Search_svg__a)"
        transform="translate(3.895 3.895) scale(.9737)"
      />
      <defs>
        <filter
          id="Search_svg__a"
          width={37}
          height={37.09}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgSearch;
