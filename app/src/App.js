import "./App.css";
import AppBar from "./components/app-bar";
import NewButton from "./components/button-new";
import ItemWrapper from "./components/item-wrapper";

function App() {
  return (
    <div className="app">
      <AppBar></AppBar>
      <NewButton></NewButton>
      <ItemWrapper></ItemWrapper>
    </div>
  );
}

export default App;
