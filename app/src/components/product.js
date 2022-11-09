import { observer } from "mobx-react-lite";
function numberWithSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
const Product = observer(({ ModalState, Product }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12 p-3">
        <div className="product-box">
          <div className="product-img">
            <img src={Product.images} alt="W3Schools.com"></img>
          </div>
          <div className="p-3">
            <div className="product-name">{Product.name}</div>
            <div className="product-price">
              Rp {numberWithSeparator(Product.price)}
            </div>
            <div className="product-desc pt-3">{Product.description}</div>
            <div className="product-btn pt-2">
              <button
                type="button"
                className="btn my-btn-detail"
                onClick={() => ModalState.showModalWithData(Product)}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default Product;
