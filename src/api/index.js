import ApiConstants from './ApiConstants';

export default function api(path, params, method, token, fcmToken = null) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
      ...(fcmToken && { FcmToken: fcmToken }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
    
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then(resp => resp.json())
    .then(json => {
      console.log('json : ', json);
      return json;
    })
    .catch(error => {
      console.log(error);
    });
}
