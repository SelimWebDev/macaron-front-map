import { useState, useEffect } from "react";
import { Arrondissement } from "../../type/Arrondissement";

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store/store'

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

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector