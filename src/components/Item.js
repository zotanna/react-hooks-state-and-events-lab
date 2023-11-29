import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding/removing the item to/from the cart
  const handleToggleCart = () => {
    // Toggle the isInCart state
    setIsInCart(!isInCart);
  };

  // Determine the className and button text based on whether the item is in the cart
  const itemClass = isInCart ? "item in-cart" : "item";
  const buttonText = isInCart ? "Remove from Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleToggleCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
