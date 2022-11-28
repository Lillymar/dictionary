import './App.css';
import Dictionary from "./Dictionary"
import bgVideo from "./bgVideo.mp4"

function App() {
  return (
    <div className="video">
    <video autoPlay loop muted id='video'>
                <source src={bgVideo} type='video/mp4'/>
            </video>

    <div className="App">
      <div className='container'>
      <header className="App-header">
       <h3> Dictionary</h3>
</header>
<main>
  <Dictionary/>
</main>
<footer>

This project was coded by{" "}
<a
  href="https://www.linkedin.com/in/lillymardiazsein/"
  target="_blank"
  rel="noopener noreferrer"
>
  Lilly
</a>{" "}
and is{" "}
<a
  href="https://github.com/Lillymar/dictionary"
  target="_blank"
  rel="noopener noreferrer"
>
  open-sourced on GitHub
</a>{" "}
and{" "}
<a
  href="https://storied-flan-129fc5.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  hosted on Netlify
</a>
</footer>
</div>
    </div>
    </div>
  );
}

export default App;
