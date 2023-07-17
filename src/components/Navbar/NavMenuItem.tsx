import type { ReactNode } from 'react';

type INavMenuItemProps = {
  openNewTab: boolean;
  href: string;
  children: ReactNode;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <div className="hover:text-white">
    <a
      target={props.openNewTab === true ? '_blank' : '_self'}
      href={props.href}
    >
      {props.children}
    </a>
  </div>
);

export { NavMenuItem };
