import { addUser } from "@/app/lib/actions";
import styles from "../../../ui/users/addUsers/addUsers.module.css";

const page = () => {
    return (
      <div className={styles.container}>
        <form action={addUser} className={styles.form}>
          <input type="text" placeholder="Username" name="username" required />
          <input type="text" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="text" placeholder="Phone" name="phone" />
          <select name="isAdmin" id="isAdmin">
            <option value={false}>Is Admin</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <textarea
            name="address"
            id="address"
            rows="16"
            placeholder="Address"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default page;