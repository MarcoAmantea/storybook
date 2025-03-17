import { title } from "process";
import { Badge } from "../src/components/Badge/badge.tsx";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
}

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story ={
    render: () => <Badge />,
}