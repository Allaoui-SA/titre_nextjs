import MiniProfile from "./MiniProfile";
import Posts from "./Posts";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto">
      {/* Section */}
      <section className="col-span-2">
        {/* Posts */}
        <Posts />

      </section>
    </main>
  )
}