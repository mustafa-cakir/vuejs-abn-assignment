import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import Checkbox from "../Checkbox.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
    props: {
        value: "test-checkbox",
        label: "This is a sample label",
        checked: false,
    },
};

describe("Checkbox Component", () => {
    it("should render properly", () => {
        const wrapper = mount(Checkbox, mountOptions);
        expect(wrapper.get("[data-testid='checkbox']")).toBeTruthy();
    });

    it("should render the label properly", () => {
        const wrapper = mount(Checkbox, mountOptions);
        expect(wrapper.get("[data-testid='checkbox']").text()).toContain("This is a sample label");
    });

    it("should render input as unchecked by default", () => {
        const wrapper = mount(Checkbox, mountOptions);
        expect(wrapper.find("input:checked").exists()).not.toBeTruthy();
    });

    it("should render input as checked if check prop is true", () => {
        const wrapper = mount(Checkbox, {
            ...mountOptions,
            props: {
                ...mountOptions.props,
                checked: true,
            },
        });
        expect(wrapper.get("input:checked")).toBeTruthy();
    });

    it("should render checkbox container includes is-checked class if the checkbox is checked", () => {
        const wrapper = mount(Checkbox, {
            ...mountOptions,
            props: {
                ...mountOptions.props,
                checked: true,
            },
        });
        expect(wrapper.get("label.is-checked")).toBeTruthy();
    });
});
