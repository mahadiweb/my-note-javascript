// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });



fetch(myRequest)
  .then((response) => {
      // handle the response
      return response.json();
  })
  .then((data) => {
      /* process your data further */
  })
  .catch((error) => {
      // handle the error
      console.error(error)
  });



// fetch('url')
      // .then(response => console.log(response.json()))
      // .then(data => console.log(data))
      // .catch(error => console.log(error));





//Fetch is based on async and await. The example might be easier to understand like this:
async function getText(file) { //load file
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
};

getText("fetch_info.txt");
