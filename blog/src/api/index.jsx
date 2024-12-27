import axios from "axios";

export const Api = axios.create({
  baseURL: "https://blog-api-t6u0.onrender.com/posts",
});

export const GetItems = async () => {
  try {
    const response = await Api.get("/");
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      // return response.data;
      const filteredata = response.data.filter((item) => item.id > 100);
      return filteredata;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};


export const AddItem = async (newItem) => {
  try {
    const response = await Api.post("/", newItem);
    if (response.status !== 201) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const DeleteItem = async (itemId) => {
  try {
    const response = await Api.delete(`/${itemId}`);
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
