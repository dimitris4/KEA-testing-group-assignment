export interface Address {
  street: string;
  streetNumber: number;
  floor: string;
  door: string;
  postalCode: {
    postalCode: string;
    town: string;
  };
}
