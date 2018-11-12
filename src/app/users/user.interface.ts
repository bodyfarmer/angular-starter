export interface User {
  _id: string;
  username: string;
  password: string;
  mobileNumber: string;

  // basic info
  firstName: string;
  lastName: string;
  middleName: string;
  dob: Date;

  // address
  street: string;
  city: string;
  state: string;
  zip: number;

}
