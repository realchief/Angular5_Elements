import {AccountVerificationStatus} from "../../../shared/enums/account-verification-status";

export class ClientSearchModel {
  pageNumber: number;
  perPageCount: number;
  filter: FilterModel;
}

class FilterModel {
  name: string;
  statuses: AccountVerificationStatus[];
}
