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
     * @param {string} accountId
     * @returns {Promise<{account: [] | null, error: null}>}
     */
    export const fetchUserById = async (accountId) => {
      const accountURL = "http://localhost:8080/api/v1/account";
    
      try {
        const { data } = await axios.get(accountURL + "/" + accountId);
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
    



