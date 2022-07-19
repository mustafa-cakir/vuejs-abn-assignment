import axios from "axios";
import { BASE_API_URL } from "@/helpers/constants";
import { isTest, simulateFetchWithDelay } from "@/helpers/utils";

export const fetchService = (api: string) => {
    return axios.get(BASE_API_URL + api).then(async res => {
        // Simulate the server response delay, except test (to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();
        return res.data;
    });

    // Alternatively, fetch() can be used as follows;

    // return fetch(BASE_API_URL + api, {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // }).then(async res => {
    //     await simulateFetchWithDelay();
    //     if (res.ok) return res.json();
    //     return res.text().then(text => {
    //         throw new Error(text);
    //     });
    // });
};
