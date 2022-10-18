import axios from ".";

/**
 * SAMPLE FUNCTION: Fetch products from a REST API
 * @returns { Promise<{ countries: [], error: null | string }>} response
 */
export const fetchCountry = async () => {

  const countryURL = "http://localhost:8080/api/v1/settings/countries";

  try {
    const { data } = await axios.get(countryURL);
    return Promise.resolve({
        countries: data,
      error: null,
    });
  } 
  catch (e) {
    return {
        countries: [],
      error: e.message,
    };
  }
};

/**
 * Fetch a product by its id.
 * @param {number} id
 * @returns {Promise<{product: { id, multiplier, packages } | null, error: null}>}
 */
export const fetchCountryById = async (id) => {
  const accountURL = "http://localhost:8080/api/v1/account";

  try {
    const { data, status } = await axios.get(accountURL + "/" + id);
    console.log(status)
    return Promise.resolve({
        countries: data,
      error: null,
    });
  }
  catch (e) {
    return {
        countries: null,
      error: e.message,
    };
  }
}

