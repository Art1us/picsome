import { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
//import useHover from '../hooks/useHover'

export default function Image({ className, img }) {
  const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

  const [hovered, setHovered] = useState(false);
  //const [hovered, ref] = useHover()

  const heartIcon = img.isFavorite ? (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-fill favorite"
    ></i>
  ) : (
    hovered && (
      <i
        onClick={() => toggleFavorite(img.id)}
        className="ri-heart-line favorite"
      ></i>
    )
  );

  const cartIcon = cartItems.some((item) => item.id === img.id) ? (
    <i
      onClick={() => removeFromCart(img)}
      className="ri-shopping-cart-fill cart"
    ></i>
  ) : (
    hovered && (
      <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
    )
  );

  return (
    <div
      className={`${className} image-container`}
      /* ref={ref} */
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
