export interface User {
  username: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  enabled: boolean;
  lastLogin: string;
}

export interface UserProfile {
  user: User;
  registrationNumber: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  birthdate: string;
  cpf: string;
}
