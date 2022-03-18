import {useState, useEffect} from 'react';

function useFetch(url, settings) {

const [apiResponse, setApiResponse] = useState("");

async function getApi() {
    const response = await fetch(url, settings);
    const data = await response.json();
    setApiResponse(data.payload);
}

useEffect(()=> {

    getApi()

}, [url])

  return [apiResponse]
}

export default useFetch;