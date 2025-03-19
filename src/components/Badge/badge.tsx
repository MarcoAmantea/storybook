import "./badge.css";
import React from "react";

type BadgeProps = {
  children?: React.ReactNode;
  variant?: "default" | "positive" | "negative";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  ...attrs
}) => {
  return <span className= {`badge ${variant}`} {...attrs}>{children}</span>;
};