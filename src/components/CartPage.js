import "./CartPage.css";
import { useSelector } from "react-redux";
function CartPage() {
  const items = useSelector((state) => {
    console.log(state);
    return state.cart.itemsList;
  });
  console.log(items);

  return (
    <>
      <div className="cart-con">
        <div className="items-con">
          {items.map((el, index) => {
            return (
              <div className="card-con" key={index}>
                <div className="card-image"></div>
                <div className="card-details">
                  <p>{el.title}</p>
                  <button>+</button>
                  <p>{el.quantity}</p>
                  <button>-</button>
                  <p>{el.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="price-con"></div>
      </div>
    </>
  );
}
export default CartPage;
