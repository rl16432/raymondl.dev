import { GradientText, HeroAvatar, HeroSocial, Section } from '@/components';
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from '@/constants/links';
import { GRADIENT_MAIN } from '@/constants/styles';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Raymond</GradientText> 👋
        </>
      }
      description={
        <>
          Penultimate Year <GradientText>Software Engineering</GradientText>{' '}
          Student @ University of Auckland
        </>
      }
      avatar={
        <div
          className={`h-auto max-w-xs rounded-md bg-gradient-to-r ${GRADIENT_MAIN} p-1`}
        >
          <img className="rounded-md" src="/assets/images/me.jpg" alt="Me!" />
        </div>
      }
      socialButtons={
        <>
          <a href={GITHUB_URL}>
            <HeroSocial
              src="/assets/images/github-icon.svg"
              alt="GitHub icon"
            />
          </a>
          <a href={LINKEDIN_URL}>
            <HeroSocial src="/assets/images/linkedin.svg" alt="LinkedIn icon" />
          </a>
          <a href={`mailto:${EMAIL_ADDRESS}`}>
            <HeroSocial src="/assets/images/mail-icon.svg" alt="Mail icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
