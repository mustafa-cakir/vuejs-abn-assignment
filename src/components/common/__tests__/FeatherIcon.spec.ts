import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import FeatherIcon from "../FeatherIcon.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("FeatherIcon Component", () => {
    it("should render properly", () => {
        const wrapper = mount(FeatherIcon, mountOptions);
        expect(wrapper.get(".icons")).toBeTruthy();
    });
});
