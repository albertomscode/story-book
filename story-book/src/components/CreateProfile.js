import { sql } from "@vercel/postgres";

export default async function profile() {
  try {
    // Fetch profiles from the database
    const profiles = await sql`SELECT * FROM profiles`;

    if (profiles.length === 0) {
      return (
        <div>
          <h2>Profile List</h2>
          <p>No profiles found.</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Profile List</h2>
        <ul>
          {profiles.rows.map((profile) => (
            <li key={profile.id}>
              <strong>{profile.username}</strong>: {profile.bio}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return (
      <div>
        <h2>Profile List</h2>
        <p>Error fetching profiles. Please try again later.</p>
      </div>
    );
  }
}
