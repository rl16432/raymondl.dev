import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  source?: string;
  link?: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-4 md:flex-row">
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="h-36 w-36 hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
        />
      </a>
    </div>
    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="hover:text-cyan-400" href={props.link}>
          <div className="text-xl font-semibold">{props.name}</div>
        </a>

        <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
      </div>

      <p className="mt-3 text-gray-400">{props.description}</p>
    </div>
    {props.source !== undefined ? (
      <a
        href={props.source}
        target="_blank"
        className="mt-5 w-12 flex-none hover:translate-y-1 md:ml-auto md:mr-5 md:mt-0"
      >
        <img
          className="w-full"
          src="/assets/images/source-icon.svg"
          alt="Source code icon"
        />
      </a>
    ) : (
      <></>
    )}
  </div>
);

export { Project };
