import { describe, expect, it, vi } from "vitest";
import { dateFormatter, debounce, priceFormatter } from "../utils";

describe("Utils tests", () => {
    it("should priceFormatter return the formatted price properly", () => {
        const result = priceFormatter(7500.39, "EUR");
        expect(result).toBe("€7,500.39");
    });
    it("should priceFormatter handle the null case properly", () => {
        const result = priceFormatter(0);
        expect(result).toBe("€0.00");
    });
    it("should dateFormatter returns the formatted date properly", () => {
        const result = dateFormatter("2021-02-28T20:23:00Z");
        expect(result).toBe("28-02-2021");
    });
    it("should dateFormatter returns the formatted date and time properly", () => {
        const result = dateFormatter("2021-02-28T20:23:00Z", true);
        expect(result).toBe("28-02-2021 21:23 CET");
    });
    it("should debounce run the function just once", () => {
        const mockFn = vi.fn();
        const debouncedFunc = debounce(mockFn, 250);
        for (let i = 0; i < 100; i++) {
            debouncedFunc();
        }
        setTimeout(() => {
            expect(mockFn).toHaveBeenCalledTimes(1);
        }, 250);
    });
});
