import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import ScrollWithShadow from "../ScrollWithShadow.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("ScrollWithShadow Component", () => {
    it("should render properly", () => {
        const wrapper = mount(ScrollWithShadow, mountOptions);
        expect(wrapper.get(".scroll-with-shadow")).toBeTruthy();
    });
});
