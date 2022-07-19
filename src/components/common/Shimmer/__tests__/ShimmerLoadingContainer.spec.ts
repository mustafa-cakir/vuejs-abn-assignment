import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../../router";
import ShimmerLoadingContainer from "../ShimmerLoadingContainer.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("ShimmerLoadingContainer Component", () => {
    it("should render properly", () => {
        const wrapper = mount(ShimmerLoadingContainer, mountOptions);
        expect(wrapper.get(".shimmer-loading-container")).toBeTruthy();
    });
});
