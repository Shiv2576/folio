import React, { useState } from 'react'

const DynamicSVG = () => {
  const [isHovered, setIsHovered] = useState(false)

  const paths = [
    { d: 'M391.93 0L261.226 232.302H0L130.614 0H391.93', opacity: 0.45 },
    { d: 'M261.226 232.302h261.318L391.93 0H130.614z', opacity: 0.6 },
    {
      d: 'M130.614 464.514l130.612-232.212L130.614 0 0 232.302z',
      opacity: 0.8,
    },
    {
      d: 'M131.879 812.967l130.704-232.303h261.318L393.196 812.967H131.879',
      opacity: 0.45,
    },
    { d: 'M262.582 580.665H1.265l130.613 232.303h261.317z', opacity: 0.6 },
    {
      d: 'M393.196 348.453L262.582 580.665l130.614 232.303L523.9 580.665z',
      opacity: 0.8,
    },
  ]

  const getPathStyle = (opacity) => ({
    transition: 'all 0.3s ease',
    opacity: isHovered ? Math.min(opacity * 1.5, 1) : opacity,
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-78.58515 -203.242 681.0713 1219.452"
      preserveAspectRatio="xMidYMid meet"
      className={`mx-auto text-zinc-900 transition-all duration-300 ease-in-out dark:text-zinc-100 ${
        isHovered
          ? 'scale-105 brightness-110 drop-shadow-lg filter'
          : 'scale-100'
      }`}
      style={{
        width: '240px',
        height: '160px',
        cursor: 'pointer',
        overflow: 'visible',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <title>pic</title>
      {paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          style={getPathStyle(path.opacity)}
          className="fill-current" // Uses currentColor from SVG
        />
      ))}
    </svg>
  )
}

export default DynamicSVG
