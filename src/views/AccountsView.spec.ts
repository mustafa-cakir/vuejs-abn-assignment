import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AccountsView from "./AccountsView.vue";
import router from "@/router";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("AccountsView", () => {
    it("renders properly", () => {
        const wrapper = mount(AccountsView, mountOptions);
        expect(wrapper.text()).toContain("Accounts");
    });
});
