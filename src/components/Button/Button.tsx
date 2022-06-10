import classnames from "classnames";
import { MouseEvent } from "react";
import "./Button.css";

interface Props {
  text: string;
  className?: string;
  value?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ className, value, text, onClick }: Props) => {
  return (
    <button className={classnames('button', className)} value={value} onClick={onClick}>{text}</button>
  )
};

export default Button;