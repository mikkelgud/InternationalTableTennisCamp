import {useEffect} from 'react';

export function ScrollTop(){
useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  }