import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface IInlineLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const InlineLink = ({ children, ...props }: IInlineLinkProps) => (
  <a className="text-blue-300 hover:underline" {...props}>
    {children}
  </a>
);

export { InlineLink };
