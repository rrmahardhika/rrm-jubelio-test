import { observer } from "mobx-react-lite";
const NewButton = observer(({ MyState }) => {
  return (
    <>
      <div className="py-3 col text-center">
        <button
          type="button"
          className="btn my-btn"
          onClick={MyState.showModal}
        >
          New Product
        </button>
      </div>
    </>
  );
});

export default NewButton;
