import React from 'react';
import UseFetch from '../Hook/UseFetch';


const Home = () => {

 const [datas] = UseFetch("https://www.boredapi.com/api/activity");
    
    return (
        <div className='flex justify-center pt-48'>
            <div className="flex flex-col justify-center w-96 p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
            <button className='bg-gray-600 text-gray-300 mt-4 rounded-md px-1'>#{datas?.type}</button>
			<p className="px-5 text-[14px]  text-gray-100">Accessibility: {datas?.accessibility}</p>
            <p className='px-5 text-xs sm:text-base text-gray-400'>"{datas?.activity}"</p>
        <div className='flex justify-around'>
        <p className='text-[14px]  text-gray-100'>Price: ${datas?.price}</p>
         <p className='text-[14px]  text-gray-100'>Key: {datas?.key}</p>
        </div>
      
            
		</div>
	<a className='bg-orange-500 px-4 py-0.5 rounded-md hover:bg-purple-300' href="/">Refresh</a>
	</div>
</div>
        </div>
    );
};

export default Home;