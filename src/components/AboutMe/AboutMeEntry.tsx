import type { ReactNode } from 'react';

import { GradientText } from '../GradientText';

interface IAboutMeEntryProps {
  title: string;
  children: ReactNode;
}

const AboutMeEntry = ({ title, children }: IAboutMeEntryProps) => (
  <div className="flex flex-row items-start gap-10">
    <p className="w-20 flex-none text-xl font-semibold">
      <GradientText>{title}</GradientText>
    </p>
    {children}
  </div>
);

export { AboutMeEntry };
