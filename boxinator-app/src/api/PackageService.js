import axios from ".";

/**
 * SAMPLE FUNCTION: Fetch products from a REST API
 * @returns { Promise<{ shipments: [], error: null | string }>} response
 */
export const fetchPackage = async () => {

  const shipmentURL = "http://localhost:8080/api/v1/shipments";

  try {
    const { data } = await axios.get(shipmentURL);
    return Promise.resolve({
        shipments: data,
      error: null,
    });
  } 
  catch (e) {
    return {
        shipments: [],
      error: e.message,
    };
  }
};

/**
 * Fetch a product by its id.
 * @param {number} id
 * @returns {Promise<{shipment: { id, receiver_name", weight, color, date, status, appUser, country } | null, error: null}>}
 */
export const fetchPackageById = async (id) => {
  const shipmentURL = "http://localhost:8080/api/v1/shipments";

  try {
    const { data, status } = await axios.get(shipmentURL + "/" + id);
    console.log(status)
    return Promise.resolve({
        shipments: data,
      error: null,
    });
  }
  catch (e) {
    return {
        shipments: null,
      error: e.message,
    };
  }
}