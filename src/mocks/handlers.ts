import { rest } from "msw";
import jsonAccounts from "./jsons/accounts.json";
import jsonTransactionsNL14ABNA4415260276 from "./jsons/transactions_NL14ABNA4415260276.json";
import jsonTransactionsNL18ABNA5476393838 from "./jsons/transactions_NL18ABNA5476393838.json";
import jsonTransactionsNL72ABNA4416709382 from "./jsons/transactions_NL72ABNA4416709382.json";

export default [
    rest.get("/api/accounts", (req, res, ctx) => {
        return res(ctx.json(jsonAccounts));
    }),
    rest.get("/api/transactions", (req, res, ctx) => {
        const id = req.url.searchParams.get("id");
        if (id === "NL14ABNA4415260276") return res(ctx.json(jsonTransactionsNL14ABNA4415260276));
        if (id === "NL18ABNA5476393838") return res(ctx.json(jsonTransactionsNL18ABNA5476393838));
        if (id === "NL72ABNA4416709382") return res(ctx.json(jsonTransactionsNL72ABNA4416709382));
    }),
];
