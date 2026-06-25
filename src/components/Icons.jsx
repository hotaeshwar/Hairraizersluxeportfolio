import React from "react";

export const ScissorsIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="6" cy="18" r="3" />
    <path d="M8.5 16.5L18 6.5" />
    <circle cx="18" cy="18" r="3" />
    <path d="M15.5 16.5L6 6.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const BeardIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4 11c1.5-1.5 3-2 5-1s3 2 3 2 1-1 3-2 3.5-.5 5 1c-1 2-2.5 2.5-4 2.5s-3-1.5-4-1.5-2.5 1.5-4 1.5-3-.5-4-2.5z" />
    <path d="M5.5 12c0 4.5 2.5 8.5 6.5 8.5s6.5-4 6.5-8.5" />
    <path d="M10 15v3.5M12 15.5V20M14 15v3.5" opacity="0.6" />
  </svg>
);

export const SkinCareIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2C7.5 8.5 5 11 5 15a7 7 0 0 0 14 0c0-4-2.5-6.5-7-13z" />
    <path d="M12 7v5M10 9.5h4" opacity="0.5" />
    <path d="M18.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="currentColor" opacity="0.8" />
    <path d="M8.5 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="currentColor" opacity="0.8" />
  </svg>
);

export const NailsIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 21h18" />
    <path d="M6 21V10a3 3 0 0 1 6 0v11" />
    <path d="M12 21V6a3 3 0 0 1 6 0v15" />
    <path d="M9 10a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" opacity="0.5" />
    <path d="M15 6a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" opacity="0.5" />
  </svg>
);
