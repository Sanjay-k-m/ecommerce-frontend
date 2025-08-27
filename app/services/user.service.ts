import { AxiosError } from 'axios';
import apiWithAuth from '~/lib/api';
import type { GetProfileResponse } from '~/types/user/response.types';

export interface UserService {
  getProfile: () => Promise<GetProfileResponse>;
}

export const userService: UserService = {
  getProfile: async () => {
    try {
      const response = await apiWithAuth.get<GetProfileResponse>('/auth/me');
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) throw error.response?.data;
      throw new Error('Unexpected error occurred');
    }
  },
};
