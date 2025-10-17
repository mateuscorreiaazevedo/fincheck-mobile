import type { IconProps } from '@shared/types/Icon';
import { colors } from '@src/assets/styles/colors';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const ClothesIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M14.0549 12.0479L19.5853 14.3373C20.4415 14.6914 21 15.5272 21 16.4535C21 17.7193 19.9745 18.7448 18.7096 18.7448H5.29038C4.02551 18.7448 3 17.7193 3 16.4535V16.3669C3 15.4474 3.5507 14.6165 4.39816 14.2575C4.39816 14.2575 12.3843 9.83726 12.8241 9.57261C13.764 9.00732 14.4519 8.09661 14.0812 6.80159C13.8769 6.08742 13.3408 5.52115 12.6227 5.33045C11.1535 4.94126 9.8293 6.12342 9.8293 7.53034"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
