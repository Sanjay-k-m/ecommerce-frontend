// app/features/auth/login/index.tsx
import React from 'react';
import { GalleryVerticalEnd } from 'lucide-react';
import { LoginForm } from '../components/login/LoginForm';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Login' }, { name: 'description', content: 'Sign up for an account' }];
}

export default function LoginPage() {
  return <LoginForm />;
}
