import { TokenDTO } from "./token";

export interface LoginResponseDTO {
  username: string;
  token: TokenDTO;
}
