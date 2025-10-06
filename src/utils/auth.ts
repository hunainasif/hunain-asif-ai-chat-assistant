import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        console.log("Environment variables:", { adminEmail, adminPassword });
        console.log("Received credentials:", credentials);

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        if (
          credentials.email !== adminEmail ||
          credentials.password !== adminPassword
        ) {
          throw new Error("Invalid email or password");
        }

        console.log("Authorization successful");
        return {
          id: "1",
          email: adminEmail,
        };
      },
    }),
  ],
});
