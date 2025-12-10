// app/api/auth/[...nextauth]/route.ts
/*
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      if (account?.access_token) token.accessToken = account.access_token;
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
};

// App Router requires explicit GET/POST exports
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
*/
// ✅ authOptions is explicitly exported so other files can import it
// app/api/auth/[...nextauth]/route.ts




/*
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";
import { JWT } from "next-auth/jwt";

const client = new MongoClient(process.env.MONGODB_URI!);

async function refreshAccessToken(token: JWT) {
  try {
    if (!token.refreshToken || typeof token.refreshToken !== "string") {
      throw new Error("No refresh token available");
    }

    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        refresh_token: token.refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const refreshed = await res.json();

    if (!refreshed.access_token) throw new Error("Failed to refresh token");

    // update tokens in DB
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    if (token.email) {
      await db.collection("users").updateOne(
        { email: token.email },
        { $set: { google_access_token: refreshed.access_token } }
      );
    }

    return {
      ...token,
      accessToken: refreshed.access_token,
      accessTokenExpires: Date.now() + (refreshed.expires_in || 3600) * 1000,
      refreshToken: refreshed.refresh_token || token.refreshToken,
    };
  } catch (error) {
    console.error("TOKEN REFRESH ERROR", error);
    return { ...token, error: "RefreshAccessTokenError" } as JWT;
  }
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          scope:
            "openid email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      // initial sign in
      if (account && user) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token || token.refreshToken;
        token.accessTokenExpires = Date.now() + (account.expires_in || 3600) * 1000;
        token.email = user.email;

        // Save tokens to MongoDB
        try {
          await client.connect();
          const db = client.db(process.env.DB_NAME);
          await db.collection("users").updateOne(
            { email: user.email },
            {
              $set: {
                name: user.name,
                email: user.email,
                google_access_token: account.access_token,
                google_refresh_token: account.refresh_token || token.refreshToken,
              },
            },
            { upsert: true }
          );
        } catch (e) {
          console.error("Failed saving tokens to DB:", e);
        }

        return token;
      }

      // Return token if still valid
      if (Date.now() < (token.accessTokenExpires || 0)) {
        return token;
      }

      // Access token expired, try to refresh
      return await refreshAccessToken(token);
    },

    async session({ session, token }: any) {
      (session as any).accessToken = token.accessToken;
      (session as any).refreshToken = token.refreshToken;
      (session as any).user = session.user || {};
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };*/




/*
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/services/mongodb";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  authorization: {
    params: {
      scope: "openid email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
      access_type: "offline",
      prompt: "consent",
    },
  },
})
  ],

  callbacks: {
    async signIn({ user, account }) {
      const db = await connectToDB();
      const users = db.collection("users");

      const existingUser = await users.findOne({ email: user.email });

      if (!existingUser) {
        await users.insertOne({
          name: user.name,
          email: user.email,
          accessToken: account?.access_token || null,
        });
      } else {
        await users.updateOne(
          { email: user.email },
          { $set: { accessToken: account?.access_token || null } }
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
      session.accessToken = token.accessToken as string | undefined;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// must export these
export { handler as GET, handler as POST };
*/


/*
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/services/mongodb";

export const { handlers: { GET, POST }, auth } = NextAuth({
  providers: [
    GoogleProvider({
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

      const existingUser = await users.findOne({ email: user.email });

      if (!existingUser) {
        await users.insertOne({
          name: user.name,
          email: user.email,
          accessToken: account?.access_token || null,
        });
      } else {
        await users.updateOne(
          { email: user.email },
          { $set: { accessToken: account?.access_token || null } }
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
      if (session.user) {
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
});
*/

//export { handlers as GET, handlers as POST } from "@/auth";

import NextAuth from "next-auth";
import { authOptions } from "@/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
