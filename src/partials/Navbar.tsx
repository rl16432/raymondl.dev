import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '@/components';
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from '@/constants';

const Navbar = () => (
  <Section className="sticky top-0 z-[100] bg-slate-900/50 backdrop-blur-lg">
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
        <NavMenuItem href={GITHUB_URL} openNewTab={true}>
          <img
            className="w-7 hover:brightness-75"
            src="/assets/images/github-icon.svg"
            alt="GitHub icon"
          />
        </NavMenuItem>
        <NavMenuItem href={LINKEDIN_URL} openNewTab={true}>
          <img
            className="w-7 hover:brightness-75"
            src="/assets/images/linkedin.svg"
            alt="LinkedIn icon"
          />
        </NavMenuItem>
        <NavMenuItem href={`mailto:${EMAIL_ADDRESS}`} openNewTab={true}>
          <img
            className="w-7 hover:brightness-75"
            src="/assets/images/mail-icon.svg"
            alt="Mail icon"
          />
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
