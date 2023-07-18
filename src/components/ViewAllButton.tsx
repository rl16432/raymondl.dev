import type { ReactNode } from 'react';

interface IViewAllButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const ViewAllButton = (props: IViewAllButtonProps) => {
  return (
    <a
      className={`${
        props.className === undefined ? '' : `${props.className} `
      }block w-40 rounded-xl bg-blue-600 p-2 text-center text-sm`}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export { ViewAllButton };
