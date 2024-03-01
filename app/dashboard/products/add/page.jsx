import { addProduct } from "@/app/lib/actions";
import styles from "../../../ui/products/addproducts/addproducts.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose Category</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Living Room">Living Room</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
