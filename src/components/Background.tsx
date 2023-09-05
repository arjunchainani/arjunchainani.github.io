import { ReactNode } from "react";

interface Props {
  styling: string;
  children: ReactNode;
}

const Background = ({ styling, children }: Props) => {
  return <div className={styling}>{children}</div>;
};

export default Background;
