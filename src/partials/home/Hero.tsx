import { GradientText, HeroAvatar, Section } from '@/components';
import { GRADIENT_MAIN } from '@/constants';

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
          <img
            className="rounded-md"
            src="/assets/images/me.jpg"
            alt="Me!"
            loading="lazy"
          />
        </div>
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
