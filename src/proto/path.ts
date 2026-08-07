import { join } from "path";

export const PATH_TO_PROTO_FILES = {
  AUTH: join(__dirname, "../../proto/auth.proto"),
  ACCOUNT: join(__dirname, "../../proto/account.proto"),
} as const;
