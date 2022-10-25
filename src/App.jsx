import "./App.scss";
import Link from "./components/link/Link";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <section className="links">
        <a target="_blank" href="">
          Twitter Link
        </a>
        <a target="_blank" id="btn__zuri" href="https://training.zuri.team/">
          Zuri Team
        </a>
        <a target="_blank" id="books" href="http://books.zuri.team/">
          Zuri Books
        </a>
        <a
          target="_blank"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
        >
          Python Books
        </a>
        <a target="_blank" id="pitch" href="https://background.zuri.team/">
          Background Check for Coders
        </a>
        <a
          target="_blank"
          id="book__design"
          href="https://books.zuri.team/design-rules"
        >
          Design Books
        </a>
      </section>
    </div>
  );
}

export default App;
