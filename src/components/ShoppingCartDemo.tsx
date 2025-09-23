import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const mockeProducts: Product[] = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
  { id: 3, name: "Headphones", price: 199.99, category: "Electronics" },
  { id: 4, name: "Coffee Maker", price: 49.99, category: "Home Appliances" },
  { id: 5, name: "Blender", price: 29.99, category: "Home Appliances" },
  { id: 6, name: "Air Fryer", price: 89.99, category: "Home Appliances" },
  { id: 7, name: "T-Shirt", price: 19.99, category: "Clothing" },
  { id: 8, name: "Jeans", price: 49.99, category: "Clothing" },
  { id: 9, name: "Sneakers", price: 79.99, category: "Clothing" },
];

const ShoppingCartDemo: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const inputRef = useRef<HTMLInputElement>(null);
  const cartCountRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (cartCountRef.current) {
      cartCountRef.current.classList.add("animate");
      setTimeout(() => {
        if (cartCountRef.current) {
          cartCountRef.current.classList.remove("animate");
        }
      }, 300);
    }
  }, [cart.length]);

  const addtoCart = useCallback((product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) => {
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  }, []);

  const filteredProducts = useMemo(() => {
    return mockeProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPrice = useMemo(() => {
    return cart
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);
  }, [cart]);

  return (
    <div className="shopping-cart-demo">
      <h1>Shopping Cart Demo</h1>
      <div className="controls">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Clothing">Clothing</option>
        </select>
        <div className="cart-info">
          Cart Items:{" "}
          <span ref={cartCountRef} className="cart-count">
            {cart.length}
          </span>
        </div>
      </div>
      <div className="product-list">
        <h2>Products</h2>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price.toFixed(2)}
                <button onClick={() => addtoCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.product.id}>
                {item.product.name} x {item.quantity} - $
                {(item.product.price * item.quantity).toFixed(2)}
                <button onClick={() => removeFromCart(item.product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default ShoppingCartDemo;