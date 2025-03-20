import { Badge } from "../src/components/Badge/badge";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";


const meta: Meta<typeof Badge> = {
    title: "Atoms/Badge",
    component: Badge,
    tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "badge",
    variant: "default",
  },
  render: (args) => <Badge {...args} />,
};