import { useContext, useState } from "react";
import { Context } from "../Context";
import useHover from '../hooks/useHover'

export default function CartItem({ img }) {
  const { removeFromCart } = useContext(Context);
  //const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover()

  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(img)}
        ref={ref}
        className={`ri-delete-bin-${hovered?'fill':'line'}`}
      ></i>
      <img src={img.url} alt="" width="130px" />
      <p>Price: ${img.price}</p>
    </div>
  );
}


