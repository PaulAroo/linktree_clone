import "./App.scss";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <section className="links">
        <a target="_blank" id="twitter" href="https://twitter.com/paul_aroo">
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
          href="https://books.zuri.team/python-for-beginners?ref_id=star_thrills"
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
        <div className="icons">
          <a href="">
            <img src="assets/slack_logo.svg" alt="slack icon" />
          </a>
          <a href="https://github.com/PaulAroo" target="_blank">
            <img src="assets/github_icon.svg" alt="github icon" />
          </a>
        </div>
      </section>
      <footer>
        <div className="content">
          <img src="assets/zuri.svg" alt="zuri logo" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src="assets/ig.svg" alt="I4G logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
