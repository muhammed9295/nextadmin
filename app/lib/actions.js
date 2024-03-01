"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";


// Add new User //
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user  ");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Update a user //
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user  ");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Delete a user //
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user  ");
  }

  revalidatePath("/dashboard/users");
};

// Add new Product //
export const addProduct = async (formData) => {
  const { title, description, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new product  ");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Update a Products //
export const updateProduct = async (formData) => {
  const { id, title, description, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title,
      description,
      price,
      stock,
      color,
      size,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Delete a product //
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product  ");
  }

  revalidatePath("/dashboard/products");
};

// Login
export const authenticate = async (formData) => {
  const {username, password} = Object.fromEntries(formData);
  
  try {
    await signIn("credentials",{username:username, password:password});
  } catch (error) {
    console.log(error);
    throw error    
  }
}
