import Product from "./product";
import { observer } from "mobx-react-lite";
const ItemWrapper = observer(({ ProductList, ModalState }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {ProductList.product.map((prod) => (
          <Product
            key={prod.sku}
            Product={prod}
            ModalState={ModalState}
          ></Product>
        ))}
      </div>
    </div>
  );
});

export default ItemWrapper;
