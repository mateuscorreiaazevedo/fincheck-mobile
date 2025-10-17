import type { IconProps } from '@shared/types/Icon';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const HealthIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M16.8457 21.0016H7.15401C4.923 21.0016 3.11426 19.1929 3.11426 16.9619V9.90303C3.11426 7.67202 4.923 5.86328 7.15401 5.86328H16.8457C19.0767 5.86328 20.8855 7.67202 20.8855 9.90303V16.9619C20.8855 19.1929 19.0767 21.0016 16.8457 21.0016Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M13.9689 15.3984H10.0352"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M12 13.4297V17.3634"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M15.3832 5.86149V4.93717C15.3832 3.86691 14.5163 3 13.446 3H10.5563C9.48605 3 8.61914 3.86691 8.61914 4.93717V5.86149"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M20.838 10.3828H3.16211"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
