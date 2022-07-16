export type IAccount = {
    accountNumberType: string;
    accountNumber: string;
    productName: string;
    currencyCode: string;
    holderName: string;
    bankCountryCode: string;
    bankIdentifierCode: string;
    balance: number;
};

export type IAccountGroup = {
    groupName: string;
    groupId: string;
    accounts: IAccount[] | null;
};

export type IAccountGroups = IAccountGroup[] | null;

export type IAccountGroupsResponse = {
    accountGroups: IAccountGroups;
};


export type IError = null | {
    message?: string;
};