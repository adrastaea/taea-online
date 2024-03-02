// components/StyledCard.tsx
import React from "react";

interface StyledCardProps {
  children: React.ReactNode;
  className?: string; // Optional className prop
}

const StyledCard: React.FC<StyledCardProps> = ({
  children,
  className = "",
}) => {
  // Combine default classes with any additional classes passed via props
  const combinedClassName = `p-4 rounded-lg overflow-hidden shadow-md bg-white
                             hover:border-[#f796b0] hover:border-4 hover:border-opacity-3 duration-1000
                             border-4 border-opacity-10 border-gray-200 ${className}`;

  return <div className={combinedClassName}>{children}</div>;
};

export default StyledCard;
