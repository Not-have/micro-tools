import jwt from "jsonwebtoken";

import {
  IUserInfo
} from "./mock-data";

// TODO: Replace with your own secret key
const ACCESS_TOKEN_SECRET = "access_token_secret";

const REFRESH_TOKEN_SECRET = "refresh_token_secret";

export interface IUserPayload extends IUserInfo {
  iat: number;
  exp: number;
}

export function generateAccessToken(user: IUserInfo) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, {
    expiresIn: "7d"
  });
}

export function generateRefreshToken(user: IUserInfo) {
  return jwt.sign(user, REFRESH_TOKEN_SECRET, {
    expiresIn: "30d"
  });
}
