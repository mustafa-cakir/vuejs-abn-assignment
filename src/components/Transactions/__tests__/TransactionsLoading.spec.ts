import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import TransactionsLoading from "../TransactionsLoading.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
};

describe("TransactionsLoading Component", () => {
    it("should render properly", () => {
        const wrapper = mount(TransactionsLoading, mountOptions);
        expect(wrapper.text()).toContain("loading");
    });
});
