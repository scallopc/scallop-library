import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedLanguage<T>(
     key: string,
     initialState: T
): Response<T> {
     const [state, setState] = useState<T>(() => {
          const storageValue = localStorage.getItem(key);
          return storageValue ? JSON.parse(storageValue) : initialState;
     });

     useEffect(() => {
          localStorage.setItem(key, JSON.stringify(state));
     }, [key, state]);

     return [state, setState];
}
