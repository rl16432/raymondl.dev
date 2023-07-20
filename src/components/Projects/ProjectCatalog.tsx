import type { CollectionEntry } from 'astro:content';
import { v4 as uuidv4 } from 'uuid';

import { SKILL_COLOR_MAP } from '@/constants/skillTagColors';

import { Tags } from '../Tags';
import { Project } from './Project';

type IProjectListProps = {
  projects: CollectionEntry<'projects'>[];
  urls: string[];
};

const ProjectCatalog = (props: IProjectListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {props.projects.map((p, i) => (
        <Project
          key={uuidv4()}
          name={p.data.name}
          description={p.data.description}
          link={props.urls[i]}
          img={{ src: p.data.imgSrc, alt: p.data.imgAlt }}
          category={
            <>
              {p.data.skills.map((skill) => (
                <Tags key={uuidv4()} color={SKILL_COLOR_MAP[skill]}>
                  {skill}
                </Tags>
              ))}
            </>
          }
          source={p.data.source}
        />
      ))}
    </div>
  );
};

export { ProjectCatalog };
