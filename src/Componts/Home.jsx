import React, { useEffect, useState } from 'react';

const Home = () => {

    const [datas, setData] = useState()

    useEffect(()=>{
        fetch('http://api.quotable.io/random')
        .then(res => res.json())
        .then(data=> setData(data))
    },[])
    
    return (
        <div className='flex justify-center pt-48'>
            <div className="flex flex-col justify-center w-96 p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl "> {datas?.author}</h2>
            <button className='bg-gray-600 bg-auto'>#{datas?.tags[0]}</button>
			<p className="px-5 text-xs sm:text-base text-gray-400">URL: {datas?.authorSlug}</p>
            <p className='px-5 text-xs sm:text-base text-gray-400'>"{datas?.content}"</p>
            <div className='flex gap-10'>
            <p className='text-xs'>Added: {datas?.dateAdded}</p>
            <p className='text-xs'>Modified: {datas?.dateAdded}</p>
      
            </div>
		</div>
	<a className='bg-orange-500 px-4 py-0.5 rounded-md hover:bg-purple-300' href="/">Refresh</a>
	</div>
</div>
        </div>
    );
};

export default Home;