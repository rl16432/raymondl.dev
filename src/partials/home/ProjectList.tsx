import { ColorTags, GradientText, Project, Section, Tags } from '@/components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="raymondl.dev"
        description="This website 🙂"
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.BLUE}>React</Tags>
            <Tags color={ColorTags.SKY}>TailwindCSS</Tags>
          </>
        }
        source="https://github.com/rl16432/raymondl.dev"
      />
      <Project
        name="Obsidian Colored Text"
        description="A lightweight open-source plugin which for Obsidian which I have 
        contributed to, allowing users to select and add color to their notes."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.BLUE}>React</Tags>
          </>
        }
        source="https://github.com/erincayaz/obsidian-colored-text"
      />
      <Project
        name="Unlimited Wordle"
        description="Endless Wordle for those who can't wait a day"
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.BLUE}>React</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
          </>
        }
        source="https://github.com/rl16432/unlimited-wordle"
      />
    </div>
  </Section>
);

export { ProjectList };
