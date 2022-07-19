import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { fetchService } from "../fetch";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { BASE_API_URL } from "../../helpers/constants";
import type { IAccountGroup } from "../../types/types";

const testApi = "/api/some/path";
const mockAcountGroupData: IAccountGroup = {
    groupName: "Current Accounts",
    groupId: "current",
    accounts: [
        {
            accountNumberType: "IBAN",
            accountNumber: "NL18ABNA5476393838",
            productName: "Current Account",
            currencyCode: "EUR",
            holderName: "John Doe",
            bankCountryCode: "BE",
            bankIdentifierCode: "ZYABBE20",
            balance: 7500.39,
        },
        {
            accountNumberType: "IBAN",
            accountNumber: "NL14ABNA4415260276",
            productName: "Current Account",
            currencyCode: "EUR",
            holderName: "John Doe",
            bankCountryCode: "BE",
            bankIdentifierCode: "ZYABBE20",
            balance: 3000.0,
        },
    ],
};

const server = setupServer(
    rest.get(`${BASE_API_URL}${testApi}`, (req, res, ctx) =>
        // return mock data
        res(ctx.json(mockAcountGroupData)),
    ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Fetch Service", () => {
    it("should return proper data", async () => {
        const result: IAccountGroup = await fetchService(testApi);
        expect(result.groupName).toBe(mockAcountGroupData.groupName);
    });
    it("should return accounts properly", async () => {
        const result = await fetchService(testApi);
        expect(result.accounts.length).toBe(mockAcountGroupData.accounts?.length);
    });

    it("should return account properties properly", async () => {
        const result = await fetchService(testApi);
        expect(result.accounts[0].accountNumber).toBe(mockAcountGroupData.accounts?.[0].accountNumber);
    });
});
