import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";

const UseFetch = (url) => {
const[datas,setData] = useState([])
    // const { data: datas, isLoading } = useQuery({
    //     queryKey: ["random"],
    //     queryFn: async () => {
    //       const res = await fetch(url);
    //       const data = await res.json();
    //       return data;
    //     },
    //   });
    //   console.log(datas);

    useEffect(()=>{
      fetch(url).then(res=>res.json().then(data=> setData(data))).catch(er=>console.log(er))
    },[url])
    

      // if(isLoading){
      //   return <h1 className='flex justify-center text-5xl font-semibold mt-48'>
      //       Loading..
      //   </h1>
      // }
    return [datas]
};

export default UseFetch;