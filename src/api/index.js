import ApiConstants from "./ApiConstants";

export default function api(path, params, method, token, fcmToken = null) {
  let options;
  options = {
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
      ...(token && { Authorization: token }),
      ...(fcmToken && { FcmToken: fcmToken }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };

  return fetch(ApiConstants.BASE_URL + path, options).then((response) => {
    return new Promise((resolve, reject) => {
      if (response.status === 200) {
        resolve(response.json());
      } else {
        reject(response.json());
      }
    });
  });
}
