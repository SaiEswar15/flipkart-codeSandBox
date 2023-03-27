import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions } from "../Store/apiSlice";
import "./Dash.css";
import Product from "./Product";

export default function Dash() {
  const apiData = useSelector((state) => state.api.apiData);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        dispatch(actions.function2(data));
      });
  }, [dispatch]);

  return (
    <div className="dash-con">
      {apiData.map((el, index) => {
        return (
          <>
            <Product
              key={el.id}
              id={el.id}
              title={el.title}
              desc={el.description}
              image={el.image}
            />
          </>
        );
      })}
    </div>
  );
}
