import type { Meta, StoryObj } from "@storybook/react";
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

export const StartersFloatingChatWidget: Story = {
  args: {
    advancedOptions: {
      conversationOptions: {
        conversationStarters: [
          {
            prompt: "What is the most Populous City",
          },
          {
            prompt: "Tell me interesting facts about Tokyo.",
          },
          {
            prompt: "Give me some interesting cities to visit.",
          },
        ],
      },
    },
  },
};
