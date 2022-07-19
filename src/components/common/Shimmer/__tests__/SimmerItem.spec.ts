import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../../router";
import ShimmerItem from "../ShimmerItem.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("ShimmerItem Component", () => {
    it("should render properly", () => {
        const wrapper = mount(ShimmerItem, mountOptions);
        expect(wrapper.get(".shimmer-item")).toBeTruthy();
    });
});
