import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import React from 'react';

type OAuthLoginsProps = {
  googleVariant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
};

const OAuthLogins = ({ googleVariant }: OAuthLoginsProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Button variant={googleVariant}>
        <Icons.google className="w-4 h-4 mr-2" />
        Continue with Google
      </Button>
      <Button variant={'outline'}>
        <Icons.gitHub className="w-4 h-4 mr-2" />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default OAuthLogins;
