import { Fragment, type ReactNode, useState } from 'react';

import { NavBurgerIcon } from './NavBurgerIcon';
import { NavMenu } from './NavMenu';

type INavbarProps = {
  logo: ReactNode;
  socials: ReactNode;
  children: ReactNode;
};

const NavbarResponsive = (props: INavbarProps) => {
  const [expanded, setExpanded] = useState(false);

  const onMenuClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-y-3">
        {props.logo}
        <NavBurgerIcon clicked={expanded} onMenuClick={onMenuClick} />
        <NavMenu className="hidden md:flex">
          {props.children}
          {props.socials}
        </NavMenu>
      </div>
      {expanded === true ? (
        <>
          <NavMenu className="md:hidden">
            {props.children}
            <div className="flex flex-row gap-x-3">{props.socials}</div>
          </NavMenu>
        </>
      ) : (
        <Fragment />
      )}
    </>
  );
};

export { NavbarResponsive };
