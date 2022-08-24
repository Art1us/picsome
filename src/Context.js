import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orderBtnTxt, setOrderBtnTxt] = useState('Place Order')

  const randomPrice = (Math.random() * 10).toFixed(2);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Art1us/pictures-for-picsome/main/images.json"
    )
      .then((response) => response.json())
      
      .then((data) =>
        data.map((item) => {
          return { ...item, price: randomPrice };
        })
      )
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const newArr = allPhotos.map((photo) => {
      if (id === photo.id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(newArr);
  }

  function addToCart(img) {
    setCartItems((prev) => [...prev, img]);
  }

  function removeFromCart(img) {
    setCartItems(prev=>prev.filter(item=>item.id!==img.id));
  }

  function placeOrder(){
    setOrderBtnTxt('Ordering...')
    setTimeout(()=>{
      setCartItems([])
      console.log('Order Placed!')
      setOrderBtnTxt('Place Order')

    }, 3000)
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        orderBtnTxt,
        placeOrder,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
