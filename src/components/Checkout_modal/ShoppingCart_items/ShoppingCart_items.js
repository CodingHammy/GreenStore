import React from "react";

import classes from "./ShoppingCart_items.module.css";

const ShoppingCart_items = () => {
  return (
    <main>
      <Image src={"#"} height={100} width={100} />
      <div>
        <h3>Plant Name</h3>
        <p>
          {`num`} x {`$299.99`}
        </p>
      </div>
      <button>
        <Image src={"#"} width={20} height={20} />
      </button>
    </main>
  );
};

export default ShoppingCart_items;
