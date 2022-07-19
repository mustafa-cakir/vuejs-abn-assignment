/**
 * This method helps simulate the fetch request by sleeping 0.5s - 1.5s (randomly) seconds.
 */
export const simulateFetchWithDelay = () => new Promise(r => setTimeout(r, (Math.random() + 0.5) * 1000));

/**
 *
 * @param amount {number}
 * @param currency {string}
 * Gets amount and currency symbol as args, and returns a string with a language-sensitive representation of the price.
 */
export const priceFormatter = (amount = 0, currency = "EUR"): string => {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency,
    });
};

/**
 *
 * @param str {string}
 * Validate the date string whether it is valid or not
 */
const isValidDate = (str: string): boolean => !isNaN(Date.parse(str));

/**
 *
 * @param date {string}
 * @param isIncludeTime {boolean}
 * gets the date and format is either by including the time (hh:mm) or not
 */
export const dateFormatter = (date: string, isIncludeTime = false): string => {
    if (!isValidDate(date)) return "";
    if (isIncludeTime)
        return new Date(date).toLocaleDateString("nl-NL", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
        }); // DD-MM-YYYY hh:mm CET
    return new Date(date).toLocaleDateString("nl-NL", { month: "2-digit", day: "2-digit", year: "numeric" });
};

/**
 *
 * @param callback {function}
 * @param wait {number}
 * Helper function to wait a certain amount of time before running again
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (callback: (...arg: any[]) => void, wait = 250) => {
    let timeout: NodeJS.Timeout;
    return (...args: unknown[]) => {
        const next = () => callback(...args);
        clearTimeout(timeout);
        timeout = setTimeout(next, wait);
    };
};

export const isTest = process.env.NODE_ENV === "test";
export const isLocalhost = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";
