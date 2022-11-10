import "./App.css";
import AppBar from "./components/app-bar";
import NewButton from "./components/button-new";
import ItemWrapper from "./components/item-wrapper";
import LoadMoreButton from "./components/load-more-button";
import Dialog from "./components/dialog";
import Alert from "./components/alert";
import ProductList from "./state";

const myState = new ProductList();

const AppView = () => {
  return (
    <>
      <div className="app">
        <AppBar></AppBar>
        <NewButton MyState={myState}></NewButton>
        <ItemWrapper MyState={myState}></ItemWrapper>
        <LoadMoreButton MyState={myState}></LoadMoreButton>
        <Dialog MyState={myState} />
        <Alert MyState={myState} />
      </div>
    </>
  );
};

function App() {
  return <AppView />;
}

export default App;
