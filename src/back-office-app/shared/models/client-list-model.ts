import {AccountVerificationStatus} from "../../../shared/enums/account-verification-status";

export class ClientListModel {
  id: number;
  accountVerificationStatus: AccountVerificationStatus;
  fullName: string;
  birthday: Date;
  gender: string;
}
