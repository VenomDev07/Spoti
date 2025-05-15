import React, { useState, useRef } from 'react';

function Tooltip({title, className, style}) {
  return (
    <div style={style} className={`flex p-1 rounded-md absolute w-fit bg-[#252525] font-medium text-sm text-white ${className}`}>
        {title}
    </div>
  )
}





function TooltipWrapper({ children, title, className }) {
  const [visible, setVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef();

  const handleMouseEnter = () => {
    const rect = wrapperRef.current.getBoundingClientRect();

    setTooltipPos({
      top: rect.top - 30,  // Above the element
      left: rect.left + rect.width / 2, // Centered horizontally
    });
    
    setTimeout(() => {
      setVisible(true);
    },500)
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block relative"
      >
        {children}
      </div>
      {visible && (
        <Tooltip
          title={title}
          style={{
            position: 'fixed',
            top: tooltipPos.top,
            left: tooltipPos.left,
            transform: 'translateX(-50%)',
            zIndex: 50,
          }}
        />
      )}
    </>
  );
}

export default TooltipWrapper;
