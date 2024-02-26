import { Logo, NavbarResponsive, NavMenuItem, Section } from '@/components';
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from '@/constants/links';

const Navbar = () => (
  <Section className="sticky top-0 z-[100] bg-slate-900/50 backdrop-blur-lg">
    <NavbarResponsive
      logo={
        <a href="/">
          <Logo
            icon={
              <img
                className="w-8"
                src="/assets/images/ray-logo.svg"
                alt="raymondl logo"
              />
            }
            name="raymondl.dev"
          />
        </a>
      }
      socials={
        <>
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
        </>
      }
    >
      <NavMenuItem href="/posts/" openNewTab={false}>
        Blog
      </NavMenuItem>
      <NavMenuItem href="/projects/" openNewTab={false}>
        Projects
      </NavMenuItem>
    </NavbarResponsive>
  </Section>
);

export { Navbar };
