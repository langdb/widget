import type { Meta, StoryObj } from "@storybook/react";
import LangdbWidgetExample from "./LangdbWidgetExample";

const meta: Meta<typeof LangdbWidgetExample> = {
  title: "Langdb Widget",
  component: LangdbWidgetExample,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LangdbWidgetExample>;

export const Simple: Story = {
  args: {
    advancedOptions: {
      displayOptions: {
        themeId: 'langdb',
        colorScheme: 'light',
      }
    }
  },
};

export const Dark: Story = {
  args: {
    advancedOptions: {
      displayOptions: {
        themeId: 'nova',
        colorScheme: 'dark',
      }
    }
  },
};
export const Starters: Story = {
  args: {
    advancedOptions: {
      displayOptions: {
        themeId: 'langdb',
        colorScheme: 'light',
      },
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
