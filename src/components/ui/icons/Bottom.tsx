import { colors } from '@assets/styles/colors';
import type { IconProps } from '@types';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const BottomIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M18 9L12 15L6 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
