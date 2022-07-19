import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import FeatherIcon from "../FeatherIcon.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
    props: {
        name: "chevron-right",
    },
};

describe("FeatherIcon Component", () => {
    it("should render properly", () => {
        const wrapper = mount(FeatherIcon, mountOptions);
        expect(wrapper.get(".icons")).toBeTruthy();
    });

    it("should render the proper icon", () => {
        const wrapper = mount(FeatherIcon, mountOptions);
        expect(wrapper.get(".icons.icons-chevron-right")).toBeTruthy();
    });
});
