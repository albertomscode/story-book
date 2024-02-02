import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton, auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import CreateProfile from "@/components/CreateProfile";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

  // go and get the user profile from our db
  const profileRes =
    await sql`SELECT * FROM profiles WHERE clerk_user_id = ${userId}`;
    console.log(profileRes);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <UserButton afterSignOutUrl="/" />
          <h1>StoryBook, the brandnew socialmedia</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/profile">Create your profile</Link>
            <Link href="/posts">Posts</Link>
          </nav>
          <div>
           {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}