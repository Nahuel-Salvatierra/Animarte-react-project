export function handleLoginError (err ) {
  if (!err?.response) {
    return ("No Server Response");
  } else if (err.response?.status === 400) {
    return ("Missing Username or Password");
  } else if (err.response?.status === 401) {
    return ("Unauthorized");
  } else {
    return ("Login Failed");
  }
}