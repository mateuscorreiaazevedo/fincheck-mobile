import type { IconProps } from '@shared/types';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const TravelIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M17.2054 6.28711H6.79557C4.45654 6.28711 3 7.93824 3 10.2753V16.5821C3 18.9192 4.45654 20.5704 6.79654 20.5704H17.2054C19.5444 20.5704 21 18.9192 21 16.5821V10.2753C21 7.93824 19.5376 6.28711 17.2054 6.28711Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M15.36 6.26028V5.64904C15.36 4.42309 14.3666 3.42969 13.1406 3.42969H10.86C9.63403 3.42969 8.64062 4.42309 8.64062 5.64904V6.26028"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        clipRule="evenodd"
        d="M10.3801 16.2524H6.90171C6.51447 16.2524 6.20117 15.9391 6.20117 15.5519V13.8949C6.20117 13.5086 6.51447 13.1943 6.90171 13.1943H10.3801C10.7673 13.1943 11.0806 13.5086 11.0806 13.8949V15.5519C11.0806 15.9391 10.7673 16.2524 10.3801 16.2524Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M16.2881 20.5506V6.32129"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M7.71094 6.32129V13.1965M7.71094 20.5465V16.2537"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
