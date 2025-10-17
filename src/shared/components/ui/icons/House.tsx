import type { IconProps } from '@shared/types/Icon';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const HouseIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M4.49707 8.77539V17.4504C4.49707 19.1424 5.86896 20.5143 7.56096 20.5143H16.4403C18.1323 20.5143 19.5042 19.1424 19.5042 17.4504V8.77539"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M21 9.95611L13.4741 3.9986C12.6101 3.31557 11.3899 3.31557 10.5259 3.9986L3 9.95611"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M17.668 4.94336V7.29688"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M9.64355 20.5142V16.7956C9.64355 15.995 9.64356 15.5947 9.79245 15.286C9.93981 14.9804 10.1864 14.7337 10.492 14.5864C10.8008 14.4375 11.2011 14.4375 12.0017 14.4375C12.8023 14.4375 13.2026 14.4375 13.5113 14.5864C13.8169 14.7337 14.0636 14.9804 14.2109 15.286C14.3598 15.5947 14.3598 15.995 14.3598 16.7956V20.5142"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
