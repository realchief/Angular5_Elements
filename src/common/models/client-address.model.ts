export class ClientAddressModel {
  id: number;
  clientId: number;
  addressData: AddressData;
  addressType: number;
}

export class AddressData {
  id: number;
  line1: string;
  line2: string;
  city: string;
  postalCode: string;
  stateProvidence: string;
  countryId: number;
}
