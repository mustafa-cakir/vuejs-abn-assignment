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
