import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center imtes-center">
      <h1>React-SRP-PostLikeApp</h1>
      <PostList />
    </div>
  );
}

export default App;
