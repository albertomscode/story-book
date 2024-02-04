import "./globals.css";


export default function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Storybook</h1>
        <p>Where every story matters.</p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Connect</h2>
          <p>Connect with friends and family to share your stories and experiences.</p>
        </div>

        <div className="feature">
          <h2>Discover</h2>
          <p>Discover new stories, follow your favorite writers, and stay updated on the latest updates.</p>
        </div>

        <div className="feature">
          <h2>Share</h2>
          <p>Share your own stories, photos, and special moments with the Storybook community.</p>
        </div>
      </section>
    </div>
  );
}