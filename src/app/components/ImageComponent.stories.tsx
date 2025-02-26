import type { Meta, StoryObj } from "@storybook/react";
import ImageComponent from "./ImageComponent";

const meta: Meta<typeof ImageComponent> = {
    title: "Components/ImageComponent",
    component: ImageComponent,
};

export default meta;
type Story = StoryObj<typeof ImageComponent>;

export const Default: Story = {};