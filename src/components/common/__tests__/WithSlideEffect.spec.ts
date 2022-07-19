import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import WithSlideEffect from "../WithSlideEffect.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("WithSlideEffect Component", () => {
    it("should render properly", () => {
        const wrapper = mount(WithSlideEffect, mountOptions);
        expect(wrapper.get(".with-slide-effect")).toBeTruthy();
    });
});
