import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '@/components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<img className="w-8" src="/assets/images/ray-logo.svg" />}
          name="raymond.l"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/" openNewTab={false}>
          Blogs
        </NavMenuItem>
        <NavMenuItem href="https://github.com/rl16432/" openNewTab={true}>
          <img
            className="w-7 hover:brightness-75"
            src="/assets/images/github.svg"
          />
        </NavMenuItem>
        <NavMenuItem
          href="https://www.linkedin.com/in/raymond-luo-dev/"
          openNewTab={true}
        >
          <img
            className="w-7 hover:brightness-75"
            src="/assets/images/linkedin.svg"
          />
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
