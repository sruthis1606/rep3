import Header from "./Header";
import Romance from "./Romance";
import Adventure from "./Adventure";
import NovelCard from "./NovelCard";

function App() {
  return (
    <div className="container">
      <Header />

      <Romance />
      <Adventure />

      <h2>Featured Novels</h2>

      <NovelCard
        title="Pride and Prejudice"
        author="Jane Austen"
        genre="Romance"
      />

      <NovelCard
        title="Treasure Island"
        author="Robert Louis Stevenson"
        genre="Adventure"
      />

      <NovelCard
        title="The Notebook"
        author="Nicholas Sparks"
        genre="Romance"
      />
    </div>
  );
}

export default App;