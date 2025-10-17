import type { IconProps } from '@shared/types/Icon';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const CrossIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M6 6L18 18M18 6L6 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
