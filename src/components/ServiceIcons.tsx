import React from 'react';

export interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Golvläggning: Staggered architectural hardwood floorboards & parquet installation with wood grain
 */
export function GolvlaggningIcon({ color = 'currentColor', size = 38, style, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'block', ...style }}
    >
      {/* Herringbone (fiskbensparkett) open craftsmanship layout - no outer square */}
      {/* Upper chevron band */}
      <path d="M7 16 L20 8 L33 16" />
      {/* Middle chevron band */}
      <path d="M7 24 L20 16 L33 24" />
      {/* Lower chevron band */}
      <path d="M7 32 L20 24 L33 32" />

      {/* Center spine division */}
      <line x1="20" y1="8" x2="20" y2="33" strokeWidth="2.1" />

      {/* Interlocking plank joints */}
      <line x1="13.5" y1="12" x2="16" y2="18.5" strokeWidth="1.4" strokeOpacity="0.85" />
      <line x1="13.5" y1="20" x2="16" y2="26.5" strokeWidth="1.4" strokeOpacity="0.85" />
      <line x1="26.5" y1="12" x2="24" y2="18.5" strokeWidth="1.4" strokeOpacity="0.85" />
      <line x1="26.5" y1="20" x2="24" y2="26.5" strokeWidth="1.4" strokeOpacity="0.85" />

      {/* Natural wood grain craftsmanship lines */}
      <path d="M10 19c1.6.5 2.8-.3 4 .3" strokeWidth="1.1" strokeOpacity="0.65" />
      <path d="M26 27c1.6-.3 2.8.5 4-.1" strokeWidth="1.1" strokeOpacity="0.65" />
    </svg>
  );
}

/**
 * 2. Mattläggning: Elegant textile carpet roll unrolling with woven border and fringe edging
 */
export function MattlaggningIcon({ color = 'currentColor', size = 38, style, className }: IconProps) {
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
      className={className}
      style={{ display: 'block', ...style }}
    >
      {/* Rolled carpet cylinder at top */}
      <ellipse cx="20" cy="9.5" rx="9" ry="3.5" />
      <ellipse cx="20" cy="9.5" rx="4" ry="1.6" strokeWidth="1.3" strokeOpacity="0.7" />

      {/* Unfurling carpet body in perspective */}
      <line x1="11" y1="9.5" x2="7" y2="30" />
      <line x1="29" y1="9.5" x2="33" y2="30" />
      <line x1="7" y1="30" x2="33" y2="30" />

      {/* Inset woven decorative border */}
      <polygon
        points="14 13 26 13 30 27 10 27"
        strokeWidth="1.2"
        strokeDasharray="2.5 2"
        strokeOpacity="0.75"
      />

      {/* Center diamond woven motif */}
      <polygon points="20 17 23 20 20 23 17 20" strokeWidth="1.4" />

      {/* Subtle carpet fringe lines (fransar) */}
      <line x1="9" y1="30" x2="9" y2="33" strokeWidth="1.4" />
      <line x1="13" y1="30" x2="13" y2="33" strokeWidth="1.4" />
      <line x1="17" y1="30" x2="17" y2="33" strokeWidth="1.4" />
      <line x1="20" y1="30" x2="20" y2="33" strokeWidth="1.4" />
      <line x1="23" y1="30" x2="23" y2="33" strokeWidth="1.4" />
      <line x1="27" y1="30" x2="27" y2="33" strokeWidth="1.4" />
      <line x1="31" y1="30" x2="31" y2="33" strokeWidth="1.4" />
    </svg>
  );
}

/**
 * 3. Golvslipning: Professional floor sanding machine gliding over planks with restoration shine
 */
export function GolvslipningIcon({ color = 'currentColor', size = 38, style, className }: IconProps) {
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
      className={className}
      style={{ display: 'block', ...style }}
    >
      {/* Floor surface line */}
      <line x1="6" y1="33" x2="34" y2="33" />
      <line x1="15" y1="33" x2="15" y2="36" strokeWidth="1.3" />
      <line x1="27" y1="33" x2="27" y2="36" strokeWidth="1.3" />

      {/* Sanding machine base chassis */}
      <rect x="8" y="24" width="16" height="7" rx="2.5" />
      <circle cx="12" cy="27.5" r="2" strokeWidth="1.3" />
      <circle cx="20" cy="27.5" r="2" strokeWidth="1.3" />

      {/* Motor dome housing */}
      <path d="M11 24v-6c0-2 1.5-3.5 3.5-3.5h3c2 0 3.5 1.5 3.5 3.5v6" />

      {/* Dust extraction vacuum port */}
      <path d="M13.5 14.5V11c0-1.2-.9-2.2-2.1-2.2H10" strokeWidth="1.3" />

      {/* Ergonomic handle shaft and grip */}
      <line x1="19" y1="16" x2="29" y2="7" />
      <line x1="27" y1="5.5" x2="32.5" y2="10" strokeWidth="2.2" />

      {/* Restoration luster & sparkle accents on polished floor */}
      <path d="M30 16v8m-4-4h8" strokeWidth="1.4" />
      <path d="M33 11v4m-2-2h4" strokeWidth="1.2" />
      <path d="M26 29c2-.6 4 .4 6-.2" strokeWidth="1.2" strokeOpacity="0.75" />
    </svg>
  );
}

/**
 * 4. Fastighetsförvaltning: Multi-story property building with management & maintenance crest
 */
export function FastighetsforvaltningIcon({ color = 'currentColor', size = 38, style, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'block', ...style }}
    >
      {/* Ground baseline */}
      <line x1="5" y1="34" x2="35" y2="34" />

      {/* Main architectural building silhouette with pitched crown */}
      <path d="M8 34V13L20 7L32 13V34" />

      {/* Architectural center spine */}
      <line x1="20" y1="7" x2="20" y2="34" strokeWidth="1.6" />

      {/* Clean horizontal window tiers in perspective - no tiny box rectangles */}
      <line x1="12" y1="16" x2="16" y2="16" strokeWidth="2" />
      <line x1="24" y1="16" x2="28" y2="16" strokeWidth="2" />

      <line x1="12" y1="21.5" x2="16" y2="21.5" strokeWidth="2" />
      <line x1="24" y1="21.5" x2="28" y2="21.5" strokeWidth="2" />

      <line x1="12" y1="27" x2="16" y2="27" strokeWidth="2" />
      <line x1="24" y1="27" x2="28" y2="27" strokeWidth="2" />

      {/* Welcoming arched entrance portal */}
      <path d="M16 34V29.5C16 28 17.5 27 20 27C22.5 27 24 28 24 29.5V34" strokeWidth="1.7" />
    </svg>
  );
}

// Backwards compatibility aliases
export const NybyggnationIcon = GolvlaggningIcon;
export const RenoveringIcon = MattlaggningIcon;
export const TillbyggnadIcon = GolvslipningIcon;
export const TotalentreprenadIcon = FastighetsforvaltningIcon;

export function ServiceIcon({
  type,
  color = 'var(--color-primary)',
  size = 38,
  className,
  style,
}: {
  type: string;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  switch (type) {
    case 'golvlaggning':
    case 'nybyggnation':
      return <GolvlaggningIcon color={color} size={size} className={className} style={style} />;
    case 'mattlaggning':
    case 'renovering':
      return <MattlaggningIcon color={color} size={size} className={className} style={style} />;
    case 'golvslipning':
    case 'tillbyggnad':
    case 'ombyggnation':
      return <GolvslipningIcon color={color} size={size} className={className} style={style} />;
    case 'fastighetsforvaltning':
    case 'totalentreprenad':
      return <FastighetsforvaltningIcon color={color} size={size} className={className} style={style} />;
    default:
      return <GolvlaggningIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;
