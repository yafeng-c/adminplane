import { userRows } from "../../dummyData";

export const getAllUsers = () => ({
  type: "GET_ALL_USERS",
  payload: userRows,
});

export const getUser = (user2edit) => ({
  type: "GET_USER",
  payload: user2edit,
});

export const deleteUserById = (id) => ({
  type: "DELETE_USER",
  payload: id,
});

export const getProduct = (product2edit) => ({
  type: "GET_PRODUCT",
  payload: product2edit,
});

export const updateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user,
});
