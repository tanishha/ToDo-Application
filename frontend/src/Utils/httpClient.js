import axios from "axios";
const BaseURL = process.env.REACT_APP_BASE_URL;

export const additem = async (data) => {
  try {
    let response = await axios.post(`${BaseURL}todo/`, data);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getItems = async () => {
  try {
    let response = await axios.get(`${BaseURL}todo/`);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
export const edititem = async (id,data) => {
    try {
      let response = await axios.put(`${BaseURL}todo/${id}/`, data);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  };
  export const deleteitem = async (id) => {
    try {
      let response = await axios.delete(`${BaseURL}todo/${id}/`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  };
