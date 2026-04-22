// 1. Import types
import type { Meta, StoryObj } from "@storybook/react-vite";

// 2. Import your component
import { Button } from "./Button";

// Meta: describes the component
const meta: Meta<typeof Button> = {
  title: "Components/Button", // sidebar path
  component: Button,
  tags: ["autodocs"], // auto-generate docs page
};
export default meta;

// 4. Type alias
type Story = StoryObj<typeof Button>;

// Each named export = one story
export const Primary: Story = {
  args: {
    label: "Click me",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Click me",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

// Extend an existing story
export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args, // reuse Primary's args
    disabled: true,
  },
};
