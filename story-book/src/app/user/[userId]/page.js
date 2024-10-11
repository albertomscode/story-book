import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import Link from "next/link";



export default async function UserPage({ params }) {
  // const post = await sql`SELECT * FROM posts ORDER BY id`;
  // const post = await sql`SELECT * FROM posts WHERE id = ${params.postid}`;
  try {
    const profile = await sql`SELECT * FROM profiles WHERE id = ${params.profileid}`;
    // Resto del código
  } catch (error) {
    console.error("Error al ejecutar la consulta SQL:", error);
    // Manejar el error de manera apropiada (por ejemplo, mostrar un mensaje de error en la interfaz de usuario)
  }

  if (!params.profileid) {
    // Manejar el caso en el que params.profileid no está definido
    return <p>Perfil no encontrado</p>;
  }


  console.log (post);

  return (
    <div>
    <h2>{profile.username}</h2>
    <p>{profile.bio}</p>

            {/* <h2>{post.title}</h2>
           <p>{post.content}</p> */}
      {/* {post.rows.map((post) => {
        return (
          <Link key={post.title} href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        );
      })} */}
    </div>
  );
}