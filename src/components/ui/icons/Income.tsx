import { colors } from '@assets/styles/colors';
import type { IconProps } from '@shared/types/Icon';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const IncomeIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M13.2591 18.3475H6.42182C4.53409 18.3475 3.35999 17.0156 3.35999 15.1307V8.02816C3.35999 6.14324 4.53409 4.81128 6.42088 4.81128H17.5791C19.4602 4.81128 20.64 6.14324 20.64 8.02816V9.94668"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M16.5377 15.5511L18.5889 13.5L20.6391 15.5511"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M18.5889 13.5L18.5892 18.3477"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M6.44421 8.1731H7.79112"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        clipRule="evenodd"
        d="M9.80273 11.5803C9.80273 10.3671 10.7863 9.38443 11.9987 9.38443C13.212 9.38443 14.1956 10.3671 14.1956 11.5803C14.1956 12.7937 13.212 13.7763 11.9987 13.7763C10.7863 13.7763 9.80273 12.7937 9.80273 11.5803Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
