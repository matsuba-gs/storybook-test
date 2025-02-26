import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"], // Docsアドオンを有効化
    argTypes: {
        label: { control: "text" },
        primary: { control: "boolean" },
        onClick: { action: "clicked" }, // Actionsアドオンを有効化
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Primary Button",
        primary: true,
    },
};

export const Secondary: Story = {
    args: {
        label: "Secondary Button",
        primary: false,
    },
};
