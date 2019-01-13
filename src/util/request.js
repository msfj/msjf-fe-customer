function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function handleResponse (response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
        return response.json()
    } else if (contentType.includes('text/html')) {
        return response.text()
    } else {
        // Other response types as necessary. I haven't found a need for them yet though.
        throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
}
  
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
    const response = await fetch(url, options);
    checkStatus(response);
    return await handleResponse(response);
}