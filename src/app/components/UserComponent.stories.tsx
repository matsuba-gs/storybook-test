import type { Meta, StoryObj } from "@storybook/react";
import UserComponent from "./UserComponent";
import { handlers } from "../mockHandlers";

const meta: Meta<typeof UserComponent> = {
    title: "Components/UserComponent",
    component: UserComponent,
    parameters: {
        msw: handlers, // ✅ API モックを適用
    },
};

export default meta;
type Story = StoryObj<typeof UserComponent>;

export const Default: Story = {};