import type { ReactNode } from 'react';

interface IViewAllButtonProps {
  onClick?: () => any;
  children: ReactNode;
  className?: string;
}

const ViewAllButton = (props: IViewAllButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.className === undefined ? '' : `${props.className} `
      }w-40 rounded-xl bg-blue-600 p-2 text-sm`}
    >
      {props.children}
    </button>
  );
};

export { ViewAllButton };
