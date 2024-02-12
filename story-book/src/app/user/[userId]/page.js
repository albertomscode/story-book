import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import Link from "next/link";



export default async function UserPage({ params }) {
  const post = await sql`SELECT * FROM posts ORDER BY id`;

  console.log (post);

  return (
    <div>
      {post.rows.map((post) => {
        return (
          <Link key={post.title} href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        );
      })}
    </div>
  );
}