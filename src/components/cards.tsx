// components/StyledCard.tsx
import React from "react";

interface StyledCardProps {
  children: React.ReactNode;
  className?: string; // Optional className prop
  title?: string; // Optional title prop
}

const StyledCard: React.FC<StyledCardProps> = ({
  children,
  className = "",
  title = "",
}) => {
  // Combine default classes with any additional classes passed via props
  const combinedClassName = `p-4 rounded-lg overflow-hidden shadow-md bg-white
                             hover:border-[#f796b0] hover:border-4 hover:border-opacity-3 duration-1000
                             border-4 border-opacity-10 border-gray-200 ${className}`;
  if (title && title.length > 0) {
    return (
      <div className={combinedClassName}>
        <div className="pb-2">
          <div className="inline-block border-b-2 border-gray-200">
            <h3 className="text-xl font-extrabold">{title}</h3>
          </div>
        </div>
        {children}
      </div>
    );
  }
  return <div className={combinedClassName}>{children}</div>;
};

export default StyledCard;
