import type { IconProps } from '@shared/types';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const LogoutIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M14.4822 4.08H8.06193C5.99514 4.08 4.32001 5.75609 4.32001 7.82193V15.6965C4.32001 17.7633 5.99514 19.4393 8.06193 19.4393H14.4822M15.9729 8.3175L19.6803 11.7599M19.6803 11.7599L15.9729 15.2024M19.6803 11.7599L10.6763 11.7603"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
