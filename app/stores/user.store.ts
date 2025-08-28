import { create } from 'zustand';
import { userService } from '~/services/user.service';
import type { User } from '~/types/user/types';

interface UserState {
  user: User | null;
  loading: boolean;
  getProfile: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  getProfile: async () => {
    set({ loading: true });
    try {
      const response = await userService.getProfile();
      console.log('Profile:', response);
      // Only update if status is 'success'
      if (response.status === 'success') {
        set({ user: response.data?.user || null });
      } else {
        console.warn('Failed to fetch profile:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
