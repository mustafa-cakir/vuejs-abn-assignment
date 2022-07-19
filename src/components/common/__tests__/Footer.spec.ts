import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import Footer from "../Footer.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("Footer Component", () => {
    it("should render properly", () => {
        const wrapper = mount(Footer, mountOptions);
        expect(wrapper.text()).toContain("Mustafa Cakir");
    });
});
