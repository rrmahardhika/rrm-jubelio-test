import Product from "./product";
import { observer } from "mobx-react-lite";
const ItemWrapper = observer(({ MyState }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {MyState.product.map((prod) => (
          <Product key={prod.SKU} Product={prod} MyState={MyState}></Product>
        ))}
      </div>
    </div>
  );
});

export default ItemWrapper;
