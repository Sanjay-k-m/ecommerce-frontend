import React from 'react';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { loginSchema, type LoginFormData } from '~/schemas/auth.schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '~/stores/auth.store';
import { AUTH_ROUTES } from '../../routes.paths';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { AppleIcon } from '~/assets/icons/components/AppleIcon';
import { GoogleIcon } from '~/assets/icons/components/GoogleIcon';
import { FormInput } from '~/components/common/form/FormInput';
import { FormPasswordInput } from '~/components/common/form/FormPasswordInput';
import { LoadingButton } from '~/components/common/ui/LoadingButton';
import { TextDivider } from '~/components/common/ui/TextDivider';
import { PrivacyPolicy } from '../common/PrivacyPolicy';
import type { AxiosError } from 'axios';
import { HOME_ROUTES } from '~/features/home/routes.paths';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit, control, formState } = methods;
  const { isSubmitting } = formState;
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await login(data);
      navigate(HOME_ROUTES.home, { replace: true });
      console.log(response);
      toast.success(response.message);
    } catch (err: unknown) {
      const error = err as AxiosError;
      if (error) toast.error(error.message);
    }
  };
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your Apple or Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(
                onSubmit,
                // onError
              )}
            >
              <div className="grid gap-4">
                <div className="flex flex-col gap-4">
                  <Button variant="outline" className="w-full">
                    <AppleIcon />
                    Login with Apple
                  </Button>
                  <Button variant="outline" className="w-full">
                    <GoogleIcon />
                    Login with Google
                  </Button>
                </div>
                <TextDivider label=" Or continue with" />
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <FormInput<LoginFormData>
                      name="email"
                      control={control}
                      label="Email"
                      placeholder="A@example.com"
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormPasswordInput<LoginFormData>
                      name="password"
                      control={control}
                      label="Password"
                      placeholder="Password"
                      forgotPasswordLink={AUTH_ROUTES.forgotPassword}
                    />
                  </div>
                  <LoadingButton type="submit" isLoading={isSubmitting} label="Login" />
                </div>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{' '}
                  <Link to={AUTH_ROUTES.signup} className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
      <PrivacyPolicy />
    </div>
  );
}
