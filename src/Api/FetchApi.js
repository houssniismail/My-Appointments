import { useState, useEffect } from 'react';
function FetchApi({ urlApi }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(urlApi, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [urlApi]);
  return data
}

export default FetchApi;
