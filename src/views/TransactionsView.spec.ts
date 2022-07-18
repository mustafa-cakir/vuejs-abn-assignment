import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TransactionsView from "./TransactionsView.vue";
import router from "@/router";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("TransactionsView", () => {
    it("renders properly", () => {
        const wrapper = mount(TransactionsView, mountOptions);
        expect(wrapper.text()).toContain("Transactions Details");
    });
    it("should include the back link", () => {
        const wrapper = mount(TransactionsView, mountOptions);
        expect(wrapper.text()).toContain("Back");
    });
});
