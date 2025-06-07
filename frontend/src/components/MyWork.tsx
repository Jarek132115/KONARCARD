import React from "react";

const UploadImage = () => {
  return (
    <div className="w-full shadow-md overflow-hidden bg-gray-200 flex items-end justify-end rounded-md h-[100px]">
      <div className="w-full bg-white p-2 flex items-center justify-center">
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_112)">
            <path
              d="M6.06143 1.5C5.7626 1.5 5.48955 1.65937 5.30205 1.94062L4.81455 2.7H2.1333C1.30596 2.7 0.633301 3.37266 0.633301 4.2V11.4C0.633301 12.2273 1.30596 12.9 2.1333 12.9H13.5333C14.3606 12.9 15.0333 12.2273 15.0333 11.4V4.2C15.0333 3.37266 14.3606 2.7 13.5333 2.7H10.8146L10.3364 1.93125C10.1524 1.65586 9.87588 1.5 9.57705 1.5H6.06143ZM3.3333 4.2C3.66377 4.2 3.9333 4.46953 3.9333 4.8C3.9333 5.13047 3.66377 5.4 3.3333 5.4C3.00283 5.4 2.7333 5.13047 2.7333 4.8C2.7333 4.46953 3.00283 4.2 3.3333 4.2ZM7.8333 4.5C9.65322 4.5 11.1333 5.98008 11.1333 7.8C11.1333 9.61992 9.65322 11.1 7.8333 11.1C6.01338 11.1 4.5333 9.61992 4.5333 7.8C4.5333 5.98008 6.01338 4.5 7.8333 4.5ZM7.8333 5.1C6.34502 5.1 5.1333 6.31172 5.1333 7.8C5.1333 9.28945 6.34502 10.5 7.8333 10.5C9.32275 10.5 10.5333 9.28945 10.5333 7.8C10.5333 6.31172 9.32275 5.1 7.8333 5.1Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_112">
              <rect
                width="15"
                height="15"
                fill="white"
                transform="translate(0.333496)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export const MyWork = () => {
  return (
    <>
      <h3 className="editor-subtitle">Hero Section</h3>
      <div className="grid grid-cols-3 gap-2">
        <UploadImage />
        <UploadImage />
        <UploadImage />
        <UploadImage />
        <UploadImage />
        <UploadImage />
      </div>
    </>
  );
};
