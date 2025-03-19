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
  render: () => {
    return (
      <div>
        <style>
          {`
                .container{
                display: grid;
                grid-template-columns: repeat(10, 1fr);
                height: 3rem;
                margin-bottom: var(--spacing-lg);
               }
        .info {
        padding: var(--spacing-md);
        background-color: var(--color-gray-5);
        color: var(--color-gray-10);
        margin-bottom: var(--spacing-lg);
        border: 1px solid var(--color-gray-3);
        border-radius: var(--border-radius-sm, 0.50rem);
        cursor: pointer;
        }
        h1{
        text-align: center;
        }
        `}
        </style>
        <h1>Colors</h1>
        <h2>Colori Primitivi</h2>
        <h3>Gray</h3>
        <div className="container">
          {Array.from({ length: 10 }).map((_, index) => {
            const color = `var(--color-gray-${index})`;
            return (
              <div
                className="info"
                style={{ backgroundColor: color }}
                key={index}
              />
            );
          })}
        </div>
        <h3>Red</h3>
        <div className="container">
          {Array.from({ length: 10 }).map((_, index) => {
            const color = `var(--color-red-${index})`;
            return (
              <div
                className="info"
                style={{ backgroundColor: color }}
                key={index}
              />
            );
          })}
        </div>
        <h3>Green</h3>
        <div className="container">
          {Array.from({ length: 10 }).map((_, index) => {
            const color = `var(--color-green-${index})`;
            return (
              <div
                className="info"
                style={{ backgroundColor: color }}
                key={index}
              />
            );
          })}
        </div>
        <h2>Colori semantici</h2>
        <h3>Colori neutrali</h3>
        <p>Per questo progetto abbiamo utilizzato questi colori neutrali:</p>
        <div className="container">
          {["--color-neutral-bcg", "--color-neutral-text", "--color-neutral-accent"].map((colorVar, index) => {
            const color = `var(${colorVar})`;
            return (
              <div
                className="info"
                style={{ backgroundColor: color }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  },
};
