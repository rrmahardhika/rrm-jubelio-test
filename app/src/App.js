import "./App.css";
import AppBar from "./components/app-bar";
import NewButton from "./components/button-new";
import ItemWrapper from "./components/item-wrapper";
import LoadMoreButton from "./components/load-more-button";
import Dialog from "./components/dialog";
import ProductList from "./state/product";
import ModalState from "./state/modal";

const myModalState = new ModalState();
const myProductList = new ProductList();

const AppView = () => {
  return (
    <>
      <div className="app">
        <AppBar></AppBar>
        <NewButton ModalState={myModalState}></NewButton>
        <ItemWrapper
          ProductList={myProductList}
          ModalState={myModalState}
        ></ItemWrapper>
        <LoadMoreButton
          LoadMore={myProductList.getProductList}
        ></LoadMoreButton>
        <Dialog ModalState={myModalState} />
      </div>
    </>
  );
};

function App() {
  return <AppView />;
}

export default App;
