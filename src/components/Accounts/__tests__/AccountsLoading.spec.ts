import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import AccountsLoading from "../AccountsLoading.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("AccountsLoading Component", () => {
    it("should render properly", () => {
        const wrapper = mount(AccountsLoading, mountOptions);
        expect(wrapper.text()).toContain("loading");
    });
});
