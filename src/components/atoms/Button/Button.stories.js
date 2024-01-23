import React from "react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default { title: "atoms/button" };

export const standard = () => (
    <Button onClick={action("Button")}>This is a button</Button>
);
