    import axios from ".";

    /**
     * SAMPLE FUNCTION: Fetch products from a REST API
     * @returns { Promise<{ account: [], error: null | string }>} response
     */
    export const fetchUser = async () => {
    
      const accountURL = "http://localhost:8080/api/v1/account";
    
      try {
        const { data } = await axios.get(accountURL);
        return Promise.resolve({
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
     * @param {number} accuntId
     * @returns {Promise<{product: { id, birthday, country, description, quantity } | null, error: null}>}
     */
    export const fetchProductById = async (accuntId) => {
      const accountURL = "http://localhost:8080/api/v1/account";
    
      try {
        const { data, status } = await axios.get(accountURL + "/" + accuntId);
        console.log(status)
        return Promise.resolve({
          product: data,
          error: null,
        });
      }
      catch (e) {
        return {
          product: null,
          error: e.message,
        };
      }
    }
    


