import { colors } from '@assets/styles/colors';
import type { IconProps } from '@shared/types/Icon';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const MixerIcon = memo(
  ({ height, width, color = colors.black }: IconProps) => (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width}>
      <Path
        d="M5.51999 20.274V18.354"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        clipRule="evenodd"
        d="M6.25458 18.354H4.78439C3.99793 18.354 3.35999 17.7183 3.35999 16.934V12.0929C3.35999 11.3085 3.99793 10.674 4.78439 10.674H6.25458C7.04198 10.674 7.67993 11.3085 7.67993 12.0929V16.934C7.67993 17.7183 7.04198 18.354 6.25458 18.354Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M5.51999 10.674V8.75391"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M12 16.434V14.034"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        clipRule="evenodd"
        d="M12.7346 14.034H11.2644C10.4779 14.034 9.84 13.3983 9.84 12.614V11.6129C9.84 10.8285 10.4779 10.194 11.2644 10.194H12.7346C13.522 10.194 14.1599 10.8285 14.1599 11.6129V12.614C14.1599 13.3983 13.522 14.034 12.7346 14.034Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M12 10.194V4.91391"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M18.48 13.5539V11.1539"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        clipRule="evenodd"
        d="M19.2146 11.154H17.7445C16.9579 11.154 16.32 10.5183 16.32 9.73402V6.8129C16.32 6.0285 16.9579 5.39391 17.7445 5.39391H19.2146C20.002 5.39391 20.6399 6.0285 20.6399 6.8129V9.73402C20.6399 10.5183 20.002 11.154 19.2146 11.154Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M18.48 5.3939V2.9939"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
);
