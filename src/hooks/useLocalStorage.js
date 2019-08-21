import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {

    const [item, setItem] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(err) {
            console.log(err);
            return initialValue;
        }
    });

    useEffect(() => {
        setItem(JSON.parse(localStorage.getItem(key)));
    }, [key]);

    function updateItem(item) {
        localStorage.setItem(key, JSON.stringify(item));
        setItem(item);
    }

    function removeItem() {
        localStorage.removeItem(key);
        setItem(null);
    }

    return [item, updateItem, removeItem];
}

