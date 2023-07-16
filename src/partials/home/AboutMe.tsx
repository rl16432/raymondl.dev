import { GradientText, Section } from '@/components';

const AboutMe = () => (
  <Section
    title={
      <>
        About <GradientText>Me</GradientText>
      </>
    }
  >
    <p className="text-lg">
      I love to combine my skills and interests to create memorable experiences
      for the people around me.
    </p>
  </Section>
);

export { AboutMe };
