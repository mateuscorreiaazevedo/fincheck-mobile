import { colors } from '@assets/styles/colors';
import type { IconProps } from '@types';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const TransactionsIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M20.9993 14.24H17.4524C16.1503 14.24 15.0938 13.1842 15.0938 11.8822C15.0938 10.5793 16.1503 9.52342 17.4524 9.52342H20.9993"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M17.2859 11.8287H17.2822"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M4.23047 9.88741V8.85612C4.23047 6.3169 6.28953 4.25783 8.82876 4.25783H16.4017C18.941 4.25783 21 6.3169 21 8.85612V15.1446C21 17.6838 18.941 19.7429 16.4017 19.7429H14.0859"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M9.36301 19.6363V14.082"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M11.097 17.9648L9.36389 19.6366L7.63077 17.9648"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M4.7341 14.082V19.6363"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M3 15.7538L4.73312 14.082L6.46624 15.7538"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
