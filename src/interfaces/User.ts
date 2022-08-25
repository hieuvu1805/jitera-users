export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IUserAddress;
  company: IUSerCompany;
};

export type IUserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type IUSerCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
