import { Metadata } from 'next';
import Link from 'next/link';
import EmailLogin from '../_components/email-login';
import OAuthLogins from '../_components/oauth-logins';

export const metadata: Metadata = {
  title: 'Sign in | Acme Inc',
};

const Login = () => {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center">
      <div className="space-y-6">
        <div className="space-y-1.5 text-center">
          <h3 className="text-2xl font-semibold font-title">
            Sign in to your accout
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sapiente.
          </p>
        </div>
        <EmailLogin />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-3/4 border-t mx-auto" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <OAuthLogins googleVariant={'outline'} />
        <p className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            className="underline underline-offset-1 font-medium hover:text-primary"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
