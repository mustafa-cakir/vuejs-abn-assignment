import { BASE_API_URL } from "@/helpers/constants";

export const fetchService = (api: string) => {
    return fetch(BASE_API_URL + api, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => {
        if (res.ok) return res.json();
        return res.text().then(text => {
            throw new Error(text);
        });
    });
};
