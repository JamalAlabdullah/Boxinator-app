import axios from ".";

/**
 Create a new user on the database
 
 */


export const createProfile = async (user) => {
  try {
    const { data } = await axios.get("http://localhost:8080/api/v1/account", {
      data: user,
    });
    return Promise.resolve({
      user: data,
      error: null,
    });
  } catch (e) {
    return Promise.reject({
      error: e.message,
      user: null,
    });
  }
};
