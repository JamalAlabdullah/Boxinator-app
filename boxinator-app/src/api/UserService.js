    import axios from ".";

    /**
     * SAMPLE FUNCTION: Fetch products from a REST API
     * @returns { Promise<{ user: [], error: null | string }>} response
     */
    export const fetchUser = async () => {
    
      const accountURL = "http://localhost:8080/api/v1/account";
    
      try {
        const { data } = await axios.get(accountURL);
        return Promise.resolve({
          user: data,
          error: null,
        });
      } 
      catch (e) {
        return {
            user: [],
          error: e.message,
        };
      }
    };
    
    /**
     * Fetch a product by its id.
     * @param {string} userID
     * @returns {Promise<{user: { id } | null, error: null}>}
     */
    export const fetchUserById = async (userID) => {
      const accountURL = "http://localhost:8080/api/v1/account";
    
      try {
        const { data, status } = await axios.get(accountURL + "/" + userID);
        console.log(status)
        return Promise.resolve({
          user: data,
          error: null,
        });
      }
      catch (e) {
        return {
          user: null,
          error: e.message,
        };
      }
    }
    


