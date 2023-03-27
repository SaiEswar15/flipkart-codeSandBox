import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
function Product(props) {
  let { id, title, desc, image } = props;
  const dispatch = useDispatch();
  function addToCart() {
    console.log("dispatch sent");
    dispatch(
      cartActions.function4({
        id,
        title,
        image
      })
    );
  }
  return (
    <>
      <div className="product-con" id={id}>
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <div className="center">
          <img src={image} alt="p" className="pic" height="100px" />
          <button className="btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
