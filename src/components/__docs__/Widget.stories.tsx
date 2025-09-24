import type { Meta, StoryObj } from "@storybook/react-vite";
import WidgetExample from "./WidgetExample";

const meta: Meta<typeof WidgetExample> = {
  title: "Widget",
  component: WidgetExample,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WidgetExample>;

export const Simple: Story = {
  args: {
    theme: "light",
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
  },
};
export const Starters: Story = {
  args: {
    starters: [
      {
        prompt: "What is the most populous city?",
      },
      {
        prompt: "Tell me interesting facts about Tokyo.",
      },
      {
        prompt: "Give me some interesting cities to visit.",
      },
    ],
  },
};
