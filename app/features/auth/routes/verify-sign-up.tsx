import React from 'react';
import { useParams } from 'react-router';
import { SignUpVerifyForm } from '../components/sign-up/SignUpVerifyForm';
import type { Route } from './+types/forgot-password';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'Verify OTP' }, { name: 'description', content: 'Verify OTP' }];
}

export default function VerifyOtp() {
  const { email } = useParams();
  return <SignUpVerifyForm email={email || ''} />;
}
