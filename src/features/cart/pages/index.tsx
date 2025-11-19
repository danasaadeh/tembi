import React from "react";
import CartItem from "../components/cart-item";
import OrderSummary from "../components/order-summary";
import PaymentMethods from "../components/payment-methods";
import Breadcrumbs from "../../../shared/components/breadcrumb";

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Cart", to: "/cart" },
          { label: "Checkout", to: "/checkout" },
          { label: "Place order", to: "/place-order" },
          { label: "Confirm Order", to: "/confirm-order" },
        ]}
        activeIndex={0} // mark "Cart" as the active/current step
      />

      {/* <h1 className="text-center md:text-left text-2xl font-bold mb-6">Cart</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CartItem
            name="Product Name"
            image="src/assets/images/cart/pasta.jpg"
            price={300}
            oldPrice={360}
            discount={20}
            quantity={3}
          />

          <CartItem
            name="Product Name"
            image="src/assets/images/cart/pizza.jpg"
            price={110}
            oldPrice={120}
            discount={10}
            quantity={1}
          />

          <CartItem
            name="Product Name"
            image="src/assets/images/cart/salad.png"
            price={100}
            oldPrice={120}
            discount={20}
            quantity={1}
          />
        </div>

        <div>
          <OrderSummary total={510} delivery={30} />
          <PaymentMethods />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
