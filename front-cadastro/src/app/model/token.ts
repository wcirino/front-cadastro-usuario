import { UserProfileDTO } from "./UserProfileDTO";

export interface TokenDTO {
  username: string;
  authenticated: boolean;
  created: string;
  expiration: string;
  accessToken: string;
  refreshToken: string | null; // 👈 esse é o que pode vir null
  roles: string[];
  user: UserProfileDTO | null; // 👈 se o "user" pode ser null
  lastLogin: string | null;    // 👈 se o "lastLogin" pode ser null
}
