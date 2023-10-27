import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FetchApi from '../Api/FetchApi';
import Popup from '../components/Popup';

function Home() {
    const urlApi = 'data/data.json';
    const data = FetchApi({ urlApi });
    const [open, setOpen] = useState(false)
    const [newData, setNewDate] = useState([])
    localStorage.setItem('data', JSON.stringify(data))
    const userData = () => {
        return JSON.parse(localStorage.getItem('data'));
    }
    useEffect(() => {
        setNewDate(userData())
    }, [data])
    return (
        <div>
            <Navbar visible={open} setVisible={setOpen} />
            {
                open && <Popup />
            }
            <div className=' h-[80vh] w-[75vw] ml-auto mr-auto bg-slate-100'>
                <div className=' flex justify-between p-10'>
                    <input type="text" className='rounded-[5px] w-[50%] border-r-slate-500' placeholder='text...' />
                </div>
                <div className=' bg-white rounded-[5px] h-[50vh] w-[92%] ml-auto mr-auto overflow-y-auto'>
                    <div className=' overflow-y z-20'>
                        {
                            newData && newData.map((item, index) => (
                                <div key={index} className='border border-solid m-1 rounded-[5px]'>
                                    <p>{item.petName}</p>
                                    <p>{item.ownerName}</p>
                                    <p>{item.aptNotes}</p>
                                    <p>{item.aptDate}</p>
                                    {/* <button className=' bg-rose-700 rounded w-[60px] p-[2px] m-[2px]' onClick={() => { handelDelete(item.id) }}>delete</button> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;