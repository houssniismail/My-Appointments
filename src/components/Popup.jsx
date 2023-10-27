import React, { useState } from 'react';

function Popup() {
    const [arr, setArr] = useState([])
    const [userData, setUserData] = useState({
        petName: '',
        ownerName: '',
        aptNotes: '',
        aptDate: '',
    });
    const handelChange = (e) => {
        const { name, value } = e.target;
        setUserData((data) => ({
            ...data,
            [name]: value,
        }));
    };
    const handeSubmit = () => {
        setArr(item => [...item, userData])
        console.log(arr)
    }
    return (
        <>
            <div className='h-[89%] bg-black bg-opacity-50 w-[100%] absolute'>
                <div className=" absolute left-1/2 translate-y-1/2 z-50 -translate-x-1/2 w-3/6 h-4/6 -top-24 bg-white mx-auto rounded-[10px]">
                    <div className='px-4'>
                        <span className="title text-2xl font-semibold text-center">Leave a Comment</span>
                        <div className="group relative my-2">
                            <input type="text" name="petName" value={userData.petName} onChange={handelChange} required placeholder="" className="px-4 py-2 border rounded-lg w-full" />
                            <label htmlFor="petName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1" > Name</label>
                        </div>
                        <div className="group relative my-2">
                            <input type="text" name="ownerName" value={userData.ownerName} onChange={handelChange} required placeholder="" className="px-4 py-2 border rounded-lg w-full" />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1" >Owner's Name</label>
                        </div>
                        <div className="group relative my-2">
                            <textarea type="text" name="aptNotes" value={userData.aptNotes} onChange={handelChange} required placeholder="" className="px-4 py-2 border rounded-lg w-full" />
                            <label htmlFor="ownerName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Owner's Name</label>
                        </div>
                        <div className="group relative my-2">
                            <input type="date" name="aptDate" value={userData.aptDate} onChange={handelChange} required placeholder="" className="px-4 py-2 border rounded-lg w-full" />
                            <label htmlFor="ownerName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1" >Owner's Name</label>
                        </div>
                        <button type="button" onClick={handeSubmit} className="bg-blue-500 text-white border-none rounded-lg px-4 py-2 text-xl cursor-pointer transition-all duration-300 hover:bg-blue-700" >Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popup;
