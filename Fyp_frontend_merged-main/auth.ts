/*import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDB } from "@/services/mongodb";

export const { handlers, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      const db = await connectToDB();
      const users = db.collection("users");

      const existing = await users.findOne({ email: user.email });

      if (!existing) {
        await users.insertOne({
          name: user.name,
          email: user.email,
          accessToken: account?.access_token,
        });
      } else {
        await users.updateOne(
          { email: user.email },
          { $set: { accessToken: account?.access_token } }
        );
      }

      return true;
    },

    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = session.user || {};
      session.user.accessToken = token.accessToken as string | undefined;
      return session;
    },
  },
});*/
// @/auth.ts
import Google from "next-auth/providers/google";
import { connectToDB } from "@/services/mongodb";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Account, User, Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],

  callbacks: {
    // ✅ signIn callback
    async signIn({ user, account }) {
  const db = await connectToDB();
  const users = db.collection("users");

  const existing = await users.findOne({ email: user.email });

  if (!existing) {
    await users.insertOne({
      name: user.name,
      email: user.email,
      accessToken: account?.access_token,
      refreshToken: account?.refresh_token, // <-- ADD THIS
    });
  } else {
    await users.updateOne(
      { email: user.email },
      { 
        $set: { 
          accessToken: account?.access_token,
          refreshToken: account?.refresh_token, // <-- ADD THIS
        } 
      }
    );
  }

  return true;
},

    // ✅ jwt callback
    async jwt({
      token,
      account,
      user,
      profile,
      isNewUser,
      trigger,
      session,
    }: {
      token: JWT;
      user?: User | AdapterUser;
      account: Account | null;
      profile?: any;
      isNewUser?: boolean;
      trigger?: "signIn" | "signUp" | "update";
      session?: Session;
    }): Promise<JWT> {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    // ✅ session callback
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user?: User | AdapterUser;
    }): Promise<Session> {
      session.user = session.user || {};
      session.user.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
