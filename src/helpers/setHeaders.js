export function setHeaders() {
  let headers = {};
  const token = localStorage.getItem("token");
  
  if (token) {
    headers['x-token'] = token;
  }

  return headers;
}