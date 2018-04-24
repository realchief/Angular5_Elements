export class ClientBankAccountModel {
  id: number;
  clientId: number;
  name: string;
  accountHolder: string;
  accountNumber: string;
  swiftCode: string;
  bankId: number;
  clearingCode: string;
  isDefault: boolean;
}
