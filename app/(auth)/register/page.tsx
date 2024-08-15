import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Create an account | Acme Inc',
};

const Register = () => {
  return (
    <div className="w-full">
      <div className="space-y-1.5">
        <h3 className="text-2xl font-semibold font-title">
          Create your account
        </h3>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          sapiente.
        </p>
      </div>
    </div>
  );
};

export default Register;
