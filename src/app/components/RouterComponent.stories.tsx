import type { Meta, StoryObj } from "@storybook/react";
import RouterComponent from "./RouterComponent";

const meta: Meta<typeof RouterComponent> = {
    title: "Components/RouterComponent",
    component: RouterComponent,
    parameters: {
        nextjs: {
            // 👇 As in the Next.js application, next/navigation only works using App Router
            appDirectory: true,
        },
    },
};

export default meta;
type Story = StoryObj<typeof RouterComponent>;

export const Default: Story = {};