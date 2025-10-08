import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        if (
          credentials.email !== adminEmail ||
          credentials.password !== adminPassword
        ) {
          throw new Error("Invalid email or password");
        }

        return {
          id: "1",
          email: adminEmail,
        };
      },
    }),
  ],
});
