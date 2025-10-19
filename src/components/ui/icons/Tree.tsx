import { colors } from '@assets/styles/colors';
import type { IconProps } from '@shared/types/Icon';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const TreeIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M6.85685 8.24609L6.8695 9.37859C5.36922 10.0061 4.34277 11.4967 4.34277 13.2227C4.34277 15.5266 6.21471 17.3898 8.5196 17.3898H15.4907C17.7849 17.3898 19.6578 15.5266 19.6578 13.2227C19.6578 11.4967 18.6187 10.011 17.1184 9.37373L17.1515 8.28404C17.1515 6.73025 16.5454 5.19203 15.3477 4.20255C14.437 3.45144 13.2705 3 11.9998 3C10.5482 3 9.23374 3.5896 8.28318 4.54406C7.31802 5.5131 6.85685 6.87814 6.85685 8.24609Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M9.89062 12.38L12.0009 14.4903"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M12 12.9698L14.1103 10.8595"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M12 21V9.61267"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
