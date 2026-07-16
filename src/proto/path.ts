import { join } from "path";

export const PATH_TO_PROTO_FILES = {
  AUTH: join(__dirname, "../../proto/auth.proto"),
} as const;
