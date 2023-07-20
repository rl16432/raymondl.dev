interface INavBurgerIconProps {
  onMenuClick: () => any;
  clicked: boolean;
}

const NavBurgerIcon = (props: INavBurgerIconProps) => (
  <button
    onClick={props.onMenuClick}
    className={`rounded-full border-2 border-slate-500 bg-gradient-to-br ${
      props.clicked === true ? 'from-slate-900 to-slate-600' : ''
    } p-2 hover:brightness-75 md:hidden`}
  >
    <img src="/assets/images/menu-icon.svg" className="w-6" />
  </button>
);

export { NavBurgerIcon };
