import { observer } from "mobx-react-lite";
const LoadMoreButton = observer(({ MyState }) => {
  if (MyState.page < MyState.totalPages)
    return (
      <div className="py-3 col text-center">
        <button
          type="button"
          className="btn my-btn-load"
          onClick={MyState.getProductList}
        >
          Load More Product
        </button>
      </div>
    );
});

export default LoadMoreButton;
