import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("Received credentials:", credentials);

        return {
          id: "admin",
          email: "heyyyyyy",
        };
      },
    }),
  ],
});
