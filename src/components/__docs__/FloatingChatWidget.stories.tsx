import type { Meta, StoryObj } from "@storybook/react-vite";
import FloatingChatWidgetExample from "./FloatingWidgetExample";
const meta: Meta<typeof FloatingChatWidgetExample> = {
  title: "FloatingChatWidget",
  component: FloatingChatWidgetExample,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FloatingChatWidgetExample>;

export const SimpleFloatingChatWidget: Story = {
  args: {},
};

export const DarkFloatingChatWidget: Story = {
  args: {
    theme: "dark",
  },
};

export const StartersFloatingChatWidget: Story = {
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
    theme: "dark",
  },
};
