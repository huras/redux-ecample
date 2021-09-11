import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Posts from './components/Posts';
import Postform from "./components/Postform";

function App() {
  return (
    <div className="App">
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
