import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AccountsView from "./AccountsView.vue";

describe("AccountsView", () => {
    it("renders properly", () => {
        const wrapper = mount(AccountsView);
        expect(wrapper.text()).toContain("Accounts");
    });
});
