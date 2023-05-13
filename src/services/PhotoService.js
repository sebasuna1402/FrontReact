const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

 async function getPhotos () {
  let data = await fetch(`${apiBaseUrl}/photos`);
  let dataJson = await data.json();

  return dataJson;
}


export {
    getPhotos
};