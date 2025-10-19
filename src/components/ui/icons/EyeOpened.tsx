import type { IconProps } from '@shared/types/Icon';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const EyeOpenedIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M4 12.7474C7.2 5.81337 16.8 5.81337 20 12.7474M12.0034 16.4776C10.7314 16.4776 9.69141 15.4426 9.69141 14.1646C9.69141 12.8876 10.7314 11.8516 12.0034 11.8516C13.2764 11.8516 14.3164 12.8876 14.3164 14.1646C14.3164 15.4426 13.2764 16.4776 12.0034 16.4776Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
