import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '@/assets/styles/colors';
import type { IconProps } from '@/core/types';

export const PlusIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M6 12H18M12 6V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
