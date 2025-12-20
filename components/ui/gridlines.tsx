// GridLines component

import React from 'react'

export const GridLines = ({
  size = 100,
  divisions = 10,
  showAxes = true,
  gridColor = 'text-zinc-300 dark:text-zinc-700',
  axisColor = 'text-zinc-400 dark:text-zinc-600',
}) => {
  const step = size / divisions

  return (
    <svg
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      preserveAspectRatio="none"
    >
      <rect width={size} height={size} fill="none" />

      {/* Grid lines */}
      {Array.from({ length: divisions + 1 }).map((_, i) => (
        <React.Fragment key={i}>
          <line
            x1="0"
            y1={i * step}
            x2={size}
            y2={i * step}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            className={gridColor}
          />
          <line
            x1={i * step}
            y1="0"
            x2={i * step}
            y2={size}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            className={gridColor}
          />
        </React.Fragment>
      ))}

      {/* Center axes */}
      {showAxes && (
        <>
          <line
            x1={size / 2}
            y1="0"
            x2={size / 2}
            y2={size}
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            className={axisColor}
          />
          <line
            x1="0"
            y1={size / 2}
            x2={size}
            y2={size / 2}
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.4"
            className={axisColor}
          />
        </>
      )}
    </svg>
  )
}

// Usage - simpler version
;<div className="h-full w-full overflow-hidden rounded-xl bg-white dark:bg-black">
  <GridLines />
</div>
