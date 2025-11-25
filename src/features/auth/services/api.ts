import { httpClient } from "../../../lib/axios";
import { userStorage } from "../storage";
import type {
  AuthPayload,
  AuthResponse,
  SignUpPayload,
  SignUpResponse,
  UserProfile,
} from "../types";

class AuthServices {
  #endPoint = "/auth";
  async login(payload: AuthPayload): Promise<AuthResponse> {
    const response = await httpClient.post<AuthResponse>(
      `${this.#endPoint}/login`,
      payload
    );
    const { access_token, refresh_token } = response.data;

    // Store the access token in local storage or state
    userStorage.set(access_token); // Assume this handles saving the token
    return { access_token, refresh_token };
  }

  async getMe(): Promise<UserProfile> {
    const response = await httpClient.get<UserProfile>(
      `${this.#endPoint}/profile`
    );
    return response.data;
  }

  async signUp(payload: SignUpPayload): Promise<SignUpResponse> {
    const response = await httpClient.post<SignUpResponse>(
      `${this.#endPoint}/register`,
      payload,
      { headers: { Accept: "application/json" } }
    );

    return response.data;
  }
}

export default new AuthServices();
