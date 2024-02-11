import { component$ } from "@builder.io/qwik";
 
export interface ButtonProps {
  label: string;
}
 
export const Button = component$<ButtonProps>(({label}) => {
  return (
    <button>
      {label}
    </button>
  );
});