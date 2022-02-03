import { useState, useEffect } from "react";
import { Arrondissement } from "../../type/Arrondissement";

function useFetch(url: string){
    const [isLoaded, updateIsLoaded ] = useState<boolean>(false)
    const [ data, setData ] = useState<Array<Arrondissement>> ([]) // ou <Array<Tournage>>

    useEffect( () => {
        fetch(url)
        .then((response) => response.json())
        .then((newData) => setData(newData))

        .catch((error) => console.log(error))
        .then(() => updateIsLoaded(true))
    },[url])

    return { isLoaded, data }
}

export default useFetch