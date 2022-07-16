import { rest } from "msw";
import jsonAccounts from "./jsons/accounts.json";

export default [
    rest.get("/api/accounts", (req, res, ctx) => {
        return res(ctx.json(jsonAccounts));
    }),
];
