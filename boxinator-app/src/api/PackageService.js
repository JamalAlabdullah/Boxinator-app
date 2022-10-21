import axios from ".";
import keycloak from "../keycloak";

/**
 * SAMPLE FUNCTION: Fetch products from a REST API
 * @returns { Promise<{ packages: [], error: null | string }>} response
 */
export const fetchPackage = async () => {

  const shipmentURL = "http://localhost:8080/api/v1/shipments/";

  try {
    const { data } = await axios.get(shipmentURL);
    console.log(data);
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
 * @param {number} packageId
 * @returns {Promise<{package: { id, receiver_name, weight, color, date, status, appUser, country, totalSum } | null, error: null}>}
 */
export const fetchPackageById = async (packageId) => {
  const shipmentURL = "http://localhost:8080/api/v1/shipments/customer";

  try {
    const { data, status } = await axios.get(shipmentURL + "/" + packageId);
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
};


export const updatePackage = async (packageId) => {
  const shipmentURL = "http://localhost:8080/api/v1/shipments";
  try {
    const { data, status } = await axios.put(shipmentURL + "/" + packageId);
    console.log(status)
    return Promise.resolve({
      package: data,
      error: null
    })

  } catch (e) {
    return {
      package: null,
      error: e.message,
    }
  }
};
