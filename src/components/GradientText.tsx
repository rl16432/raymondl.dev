import type { ReactNode } from 'react';

import { GRADIENT_MAIN } from '@/constants';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span
    className={`bg-gradient-to-br ${GRADIENT_MAIN} bg-clip-text text-transparent`}
  >
    {props.children}
  </span>
);

export { GradientText };
