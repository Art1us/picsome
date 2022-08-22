import { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, orderBtnTxt, placeOrder } = useContext(Context);

  const myCartList = cartItems.map((img) => (
    <CartItem key={img.id} img={img} />
  ));

  const ttl =
    cartItems.length > 0 &&
    cartItems
      .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr.price), 0)
      .toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {myCartList}
      {cartItems.length > 0 ? (
        <h2 className="total-cost">Total Cost: {ttl}</h2>
      ) : (
        <h3>You don't have any items in Your cart yet</h3>
      )}
      {cartItems.length > 0 && (
        <div className="order-button">
          <button onClick={() => placeOrder()}>{orderBtnTxt}</button>
        </div>
      )}
    </main>
  );
}
