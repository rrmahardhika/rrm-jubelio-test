import { observer } from "mobx-react-lite";
const LoadMoreButton = observer(({ LoadMore }) => {
  return (
    <div className="py-3 col text-center">
      <button type="button" className="btn my-btn-load" onClick={LoadMore}>
        Load More Product
      </button>
    </div>
  );
});

export default LoadMoreButton;
