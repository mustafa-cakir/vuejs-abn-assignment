import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "./HomeView.vue";
import router from "@/router";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("HomeView", () => {
    it("renders properly", () => {
        const wrapper = mount(HomeView, mountOptions);
        expect(wrapper.text()).toContain("This is the home page.");
    });
});
