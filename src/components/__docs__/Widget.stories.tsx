import type { Meta, StoryObj } from "@storybook/react";
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
  args: {},
};
export const Starters: Story = {
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
