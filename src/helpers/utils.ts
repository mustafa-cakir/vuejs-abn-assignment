/**
 *
 * @param cb
 * this method will simulate the fetch request by running the cb() after 0.5s - 1.5s (random) seconds later.
 */
export const simualetFetchWithDelay = (cb: () => void) => {
    setTimeout(cb, (Math.random() + 0.5) * 1000);
};

export const priceFormatter = (amount = 0, currency = "EUR") => {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency,
    });
};
