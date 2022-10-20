import axios from ".";
import keycloak from "../keycloak";

    /**
     * SAMPLE FUNCTION: Fetch products from a REST API
     * @returns { Promise<{ account: [], error: null | string }>} response
     */
    export const fetchUser = async () => {
    
      const accountURL = "http://localhost:8080/api/v1/account";
    
      try {
        const { data } = await axios.get(accountURL);
        console.log(data)
        return Promise.resolve({
          headers: { Authorization: `Bearer ${keycloak.token}` },
          account: data,
          error: null,
        });
      } 
      catch (e) {
        return {
            account: [],
          error: e.message,
        };
      }
    };
    
  

    /**
     * Fetch a product by its id.
     * @param {string} userId
     * @returns {Promise<{account: [] | null, error: null}>}
     */
    export const fetchUserById = async (userId) => {
      const accountURL = "http://localhost:8080/api/v1/account";
    
      try {
        const { data } = await axios.get(accountURL + "/" + userId);
        //console.log(status)
        return Promise.resolve({
          account: data,
          error: null,
        });
      }
      catch (e) {
        return {
          account: null,
          error: e.message,
        };
      }
    }
    



