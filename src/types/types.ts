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

export type ITransactionAccount = {
    accountNumber: string;
    currencyCode: string;
};

export type ITransaction = {
    transactionId: string;
    bookDate: string;
    transactionDateTime: string;
    creditDebitIndicator: string;
    amount: number;
    counterpartyAccountNumber: string;
    counterpartyName: string;
    description: string;
};

export type ITransactions = ITransaction[];

export type ITransactionsResponse = {
    account: ITransactionAccount;
    transactions: ITransactions;
};
