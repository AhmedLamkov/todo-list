import { ChangeEvent, FormEvent } from "react";
import "./Input.css";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const Input = ({ value, onChange, onSubmit }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <input value={value} onChange={onChange} className="input" placeholder="What needs to be done" data-testid="input"/>
    </form>
  )
};

export default Input;