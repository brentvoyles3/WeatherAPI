import Header from "./components/Header"
import Main from "./components/Main"
import "./styles/components/App.scss"
import "bootstrap-icons/font/bootstrap-icons.css"

{/* Dependencies */}
{/* npx create-react-app */ }
{/* npm install react-router-dom */ }
{/* npm install sass --save-dev */}
{/* npm i bootstrap-icons */}

function App() {
  const dark = false;
  return (
    <div className={'App-dark'}>
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
