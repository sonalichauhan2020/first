import './App.css';
import abcd from './logoreact.gif';
import efgh from './roadmap.png';
function App() {
  return (
    <div className="App">
      
     <h1>  Hy this is my first program.</h1>
<p>npx create react app react Demo .after executing the command.it will take some time to create a React application and its related dependencies.npm start  after npm start it will open the application in a browser on port number 3000. now, open app.
</p>
<img src={abcd} height="200" width="200"/>
<h2>How to learn react js quickly </h2>
<ul>
  <h3>Here is some tricks</h3>
  <li>Learn javascript first </li>
  <li>Take a look at React's stater guide.</li>
  <li>Join online React community</li>
</ul>
<img src={efgh} height="400" width="300"/>

      </div>
  );
}

export default App;

