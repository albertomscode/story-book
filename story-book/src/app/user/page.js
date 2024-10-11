import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import CreateProfile from "@/components/CreateProfile";
import Link from "next/link";
import "../globals.css";



export default async function CreateProfiles() {
  const { userId } = auth();
  const profile = await sql`SELECT * FROM profiles ORDER BY id`;

  async function addNewProfile(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");

    await sql`INSERT INTO profiles (clerk_user_id, username, bio) VALUES (${userId}, ${username}, ${bio})`;
    revalidatePath(`/user/${params.profileid}`);
    redirect(`/user/${params.profileid}`);
  }

  return (
    <div className="profile-container">
      <h2>Create Profile</h2>
      <form action={addNewProfile}>
        <input name="username" placeholder="Username" />
        <textarea name="bio" placeholder="Bio"></textarea>
        <button>Submit</button>
      </form>
      <CreateProfile />
    </div>
  );
}