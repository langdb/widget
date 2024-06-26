import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Widget",
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Simple: Story = {
  args: {
  },
};
export const Starters: Story = {
  args: {
    advancedOptions: {
      conversationOptions: {
        conversationStarters: [
          {
            prompt: 'What is the most Populous City'
          },
          {
            prompt: 'Tell me interesting facts about Tokyo.'
          },
          {
            prompt: 'Give me some interesting cities to visit.'
          }
        ]
      }
    },
  }
};