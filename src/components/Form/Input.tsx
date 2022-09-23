import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function Input(Props: IInputProps) {
  return (
    <input
      {...Props}
      className={`bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500`}
    />
  );
}
