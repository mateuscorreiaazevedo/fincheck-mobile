import type { IconProps } from '@shared/types/Icon';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const EyeClosedIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M3.99902 7.47656C7.19902 14.4096 16.799 14.4096 19.999 7.47656M6.86194 11.0156L4.00293 14.9446M17.1436 11.0156L20.0016 14.9446M11.999 12.6797V16.5457"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
