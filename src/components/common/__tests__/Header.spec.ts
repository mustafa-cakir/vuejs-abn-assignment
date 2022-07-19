import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import Header from "../Header.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("Header Component", () => {
    it("should render properly", () => {
        const wrapper = mount(Header, mountOptions);
        expect(wrapper.get(".main-header")).toBeTruthy();
    });

    it("should render the navigation menu items properly", () => {
        const wrapper = mount(Header, mountOptions);
        expect(wrapper.text()).toContain("Accounts");
        expect(wrapper.text()).toContain("Home");
    });

    it("should render the logo properly", () => {
        const wrapper = mount(Header, mountOptions);
        expect(wrapper.get(".main-header-logo")).toBeTruthy();
    });
});
