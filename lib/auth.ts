import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type DefaultSession } from 'next-auth';
import Google from 'next-auth/providers/google';
import Resend from 'next-auth/providers/resend';
import { db } from './db';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

const {
  AUTH_RESEND_KEY,
  NEXTAUTH_SECRET,
  ENVIRONMENT,
  AUTH_CLIENT_ID,
  AUTH_CLIENT_SECRET,
} = process.env;

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: AUTH_CLIENT_ID as string,
      clientSecret: AUTH_CLIENT_SECRET as string,
    }),
    Resend({
      apiKey: AUTH_RESEND_KEY,
      from: 'no-reply@company.com',
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token }) => {
      // const user = await getUserByEmail(token?.email as string);
      const user = { id: 1, name: 'sa' };

      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
  debug: ENVIRONMENT === 'development',
});
