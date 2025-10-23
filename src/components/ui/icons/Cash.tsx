import { colors } from '@assets/styles/colors';
import type { IconProps } from '@types';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const CashIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M6.18843 4.94922H17.8116C19.777 4.94922 21 6.33668 21 8.30014V15.6986C21 17.6621 19.777 19.0495 17.8106 19.0495H6.18843C4.22303 19.0495 3 17.6621 3 15.6986V8.30014C3 6.33668 4.22886 4.94922 6.18843 4.94922Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M6.66406 11.2988V12.7019"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M17.3359 12.7019V11.2988"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        clipRule="evenodd"
        d="M14.2868 12.0003C14.2868 10.7365 13.2623 9.71289 11.9994 9.71289C10.7355 9.71289 9.71094 10.7365 9.71094 12.0003C9.71094 13.2642 10.7355 14.2878 11.9994 14.2878C13.2623 14.2878 14.2868 13.2642 14.2868 12.0003Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
