import React from 'react';
import { Button } from '~/components/ui/button';
import { Loader } from 'lucide-react';

interface LoadingButtonProps {
  label: string;
  isLoading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // add onClick
}

export function LoadingButton({
  label,
  isLoading = false,
  className = '',
  type = 'submit',
  onClick,
}: LoadingButtonProps) {
  return (
    <Button
      type={type}
      className={`w-full ${className}`}
      disabled={isLoading}
      onClick={onClick} // attach the onClick handler
    >
      {isLoading ? <Loader className="animate-spin" /> : label}
    </Button>
  );
}
