import type { Meta, StoryObj } from "storybook-framework-qwik";
import {Button, type ButtonProps} from "./Button";
import {varient1, varient2, varient3, varient4, varient5 } from "./storiesData"
 
const meta: Meta<ButtonProps>  = {
  title: "Components/Atoms/Button",
  component: Button,
};
 
export default meta;
type Story = StoryObj<ButtonProps>; 
 
export const Primary: Story = {
  render: () => <Button {...varient1}>Danger</Button>
};

export const Danger: Story = {
  render: () => <Button {...varient2}>Primary</Button>
};

export const dark: Story = {
  render: () => <Button {...varient3}>Dark</Button>
};


export const Success: Story = {
  render: () => <Button {...varient5}>outline</Button>
};

export const WithBorder: Story = {
  render: () => <Button {...varient4}>outline</Button>
};
