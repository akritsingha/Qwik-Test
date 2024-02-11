import type { Meta, StoryObj } from "storybook-framework-qwik";
import {Button, type ButtonProps} from "./button";
import {defaultData } from "./storiesData"
 
const meta: Meta<ButtonProps>  = {
  title: "Components/Atoms/Button",
  component: Button,
};
 
export default meta;
type Story = StoryObj<ButtonProps>; 
 
export const Primary: Story = {
  args: {...defaultData}
};