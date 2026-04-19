import { useEffect, useState } from "react";
import { getProducts, addProduct, deleteProduct } from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", quantity: "" });

  // load products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(form);
    fetchProducts();
  };

  // delete
  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h2>Retail Billing</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="quantity" placeholder="Qty" onChange={handleChange} />
        <button>Add</button>
      </form>

      {/* LIST */}
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price} - Qty: {p.quantity}
          <button onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;