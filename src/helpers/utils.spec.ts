import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { priceFormatter } from "@/helpers/utils";

describe("Utils unit tests", () => {
    it("should format price properly", () => {
        const result = priceFormatter(7500.39, "EUR");
        expect(result).toBe("€7,500.39");
    });
});
