import { BASE_API_URL } from "@/helpers/constants";
import { simulateFetchWithDelay } from "@/helpers/utils";
// import { simualetFetchWithDelay } from "@/helpers/utils";

export const fetchService = (api: string) => {
    return fetch(BASE_API_URL + api, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then(async res => {
        await simulateFetchWithDelay();
        if (res.ok) return res.json();
        return res.text().then(text => {
            throw new Error(text);
        });
    });
};
