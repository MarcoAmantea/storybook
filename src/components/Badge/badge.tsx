import css from "./badge.css?raw";
import React from "react";
import root from "react-shadow";


type BadgeProps = {
  children?: React.ReactNode;
  variant?: "default" | "positive" | "negative";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  ...attrs
}) => {
    return( 
    <root.div>
      <style>{css}</style>
      <span className= {`badge ${variant}`} {...attrs}>{children}</span>
    </root.div>
    )
};