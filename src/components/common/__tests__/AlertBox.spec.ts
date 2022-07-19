import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import AlertBox from "../AlertBox.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
    props: {
        type: "error",
        message: "This is a sample error message",
    },
};

describe("AlertBox Component", () => {
    it("should render properly", () => {
        const wrapper = mount(AlertBox, mountOptions);
        expect(wrapper.get("[data-testid='alertbox']")).toBeTruthy();
    });
    it("should render error message properly", () => {
        const wrapper = mount(AlertBox, mountOptions);
        expect(wrapper.text()).toContain("This is a sample error message");
    });
    it("should alert box error class name if the type is error", () => {
        const wrapper = mount(AlertBox, mountOptions);
        expect(wrapper.get("[data-testid='alertbox'].error")).toBeTruthy();
    });
    it("should render info message properly", () => {
        const wrapper = mount(AlertBox, {
            ...mountOptions,
            props: {
                type: "info",
                message: "This is a sample info message",
            },
        });
        expect(wrapper.text()).toContain("This is a sample info message");
    });
    it("should alert box info class name if the type is info", () => {
        const wrapper = mount(AlertBox, {
            ...mountOptions,
            props: {
                type: "info",
                message: "This is a sample info message",
            },
        });
        console.log(wrapper.get("[data-testid='alertbox']").classes);
        expect(wrapper.get("[data-testid='alertbox'].info")).toBeTruthy();
    });
});
