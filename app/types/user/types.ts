export type User = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  phone: string | null;
  dob: Date | null;
  isEmailVerified: boolean;
  status: string;
  lastLogin: Date | null;
  twoFactorEnabled: boolean;
  socialProvider: string | null;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
};
