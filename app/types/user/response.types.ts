import type { ApiResponse } from "../types";
import type { User } from "./types";

export type GetProfileResponse = ApiResponse<{ user: User  }>;
