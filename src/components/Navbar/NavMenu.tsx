import { type ReactNode } from 'react';

type INavMenuProps = {
  children: ReactNode;
  className?: string;
};

const NavMenu = (props: INavMenuProps) => {
  return (
    <nav
      className={`${
        props.className === undefined ? '' : `${props.className} `
      }mt-3 flex flex-col gap-x-3 gap-y-4 font-medium text-gray-200 md:mt-0 md:flex-row`}
    >
      {props.children}
    </nav>
  );
};

export { NavMenu };
