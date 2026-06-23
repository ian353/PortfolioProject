import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface linkboxProps {
  foo?: boolean;
}

const linkbox: React.FC<React.PropsWithChildren<HTMLAttributes<HTMLDivElement> & linkboxProps>> = ({
  foo = true,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        'bg-red-500',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};