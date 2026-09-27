import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Nybyggnation: House with pitched roof, apex antenna line, door and window
 */
export function NybyggnationIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Apex vertical line */}
      <line x1="20" y1="4" x2="20" y2="10" />
      {/* Roof */}
      <polyline points="8 20 20 10 32 20" />
      {/* House body */}
      <rect x="11" y="20" width="18" height="15" />
      {/* Center/left door */}
      <rect x="14" y="27" width="5" height="8" />
      {/* Window */}
      <rect x="22" y="24" width="4" height="4" />
    </svg>
  );
}

/**
 * 2. Renovering: Blueprint / floorplan with drafting ruler
 */
export function RenoveringIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Floorplan walls / blueprint outline */}
      <path d="M10 35V20L19 13L28 20V35H10Z" />
      {/* Blueprint grid lines */}
      <line x1="10" y1="27" x2="28" y2="27" />
      <line x1="19" y1="20" x2="19" y2="35" />
      {/* Drafting triangle ruler */}
      <path d="M23 7L35 19H29" />
      <path d="M26 10L31 15" />
      {/* Measurement ticks */}
      <line x1="26" y1="8" x2="28" y2="10" />
      <line x1="29" y1="11" x2="31" y2="13" />
      <line x1="32" y1="14" x2="34" y2="16" />
    </svg>
  );
}

/**
 * 3. Tillbyggnad: House with extension addition and expansion arrow
 */
export function TillbyggnadIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Main house pitched left roof and body */}
      <path d="M8 34V18L18 10V34H8Z" />
      {/* Extension building on the right */}
      <rect x="18" y="19" width="14" height="15" />
      {/* Large sliding glass door / window lines */}
      <line x1="23" y1="24" x2="23" y2="34" />
      <line x1="27" y1="24" x2="27" y2="34" />
      {/* Expansion Arrow on top */}
      <line x1="18" y1="7" x2="28" y2="7" />
      <polyline points="25 4 28 7 25 10" />
    </svg>
  );
}

/**
 * 4. Totalentreprenad: Clipboard with checklist and circular checkmark badge
 */
export function TotalentreprenadIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Clipboard top clip */}
      <path d="M16 6H24V10H16V6Z" />
      {/* Clipboard board */}
      <path d="M13 8H11C9.89543 8 9 8.89543 9 10V33C9 34.1046 9.89543 35 11 35H24" />
      <path d="M29 8H27" />
      <path d="M31 10V20" />
      {/* Checklist items */}
      <line x1="14" y1="15" x2="23" y2="15" />
      <line x1="14" y1="20" x2="21" y2="20" />
      <line x1="14" y1="25" x2="19" y2="25" />
      {/* Checkmark circle badge */}
      <circle cx="27" cy="28" r="6" />
      <polyline points="24.5 28 26.5 30 29.5 26" />
    </svg>
  );
}

export function ServiceIcon({ type, color, size = 38 }: { type: string; color?: string; size?: number }) {
  switch (type) {
    case 'nybyggnation':
      return <NybyggnationIcon color={color} size={size} />;
    case 'renovering':
      return <RenoveringIcon color={color} size={size} />;
    case 'tillbyggnad':
    case 'ombyggnation':
      return <TillbyggnadIcon color={color} size={size} />;
    case 'totalentreprenad':
      return <TotalentreprenadIcon color={color} size={size} />;
    default:
      return <NybyggnationIcon color={color} size={size} />;
  }
}

export default ServiceIcon;
