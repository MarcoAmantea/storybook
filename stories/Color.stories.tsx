import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Atoms/Color",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <style>
        {`
                .container{
                display: grid;
                grid-template-columns: repeat(10, 1fr);
                height: 3rem;
                margin-bottom: var(--spacing-lg);
               }
        .info{
        padding: var(--spacing-md);
        background-color: var(--color-gray-5);
        color: var(--color-gray-10);
        margin-bottom: var(--spacing-lg);
        border: 1px solid var(--color-gray-7);
        border-radius: var(--border-radius-sm), 0.25rem;
        }
        .center{
        text-align: center;}
        `}
      </style>
      <h1 className="center">Colors</h1>
      <h2 className="center">Gray</h2>
      <div className="container">
        {Array.from({ length: 10 }).map((_, index) => (
            <div className="info" 
            style={{backgroundColor : `var(--color-gray-${index})`}} 
            key={index}/>
        ))}
      </div>
    </div>
  ),
};
