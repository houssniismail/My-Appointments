import React from 'react';

function Search() {
  return (
    <div className=' flex justify-between p-10'>
      <input type="text" className=' rounded-[5px] w-[50%] border-r-slate-500' placeholder='text...' />
      <button className=' rounded-[5px] bg-sky-500  w-[60px] border-r-1 h-[30px]'>search</button>
    </div>
  )
}

export default Search
