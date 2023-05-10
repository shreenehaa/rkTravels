import React from 'react'
import  { useState,useEffect} from 'react'

import axios from 'axios'
import Navbar_user from './Navbar_user'
const Mybooking = () => {
    const [disp,setdisp]=useState([])
    let datas=[]
    const display=()=>{
        axios.get('http://localhost:4000/book/display')
        .then(res=>{
            datas=res.data
            setdisp(datas)
        })
    }
    useEffect(()=>{
        display()
    },[])
    return (
        <div>
             <div className='content'>
                 <Navbar_user/>
            </div>
            <div class="container">
            <table class="rwd-table">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th>email</th>
                        <th>mobile no1</th>
                        <th>tilte</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        disp.map(user => (
                            <tr>
                                <td data-th="sno">
                                    {user.sno}
                                </td>
                                <td data-th="name">
                                    {user.name}
                                </td>
                                
                                <td data-th="mb1">
                                    {user.mb1}
                                </td>
                                <td data-th="mb2">
                                    {user.mb2}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
</div> 
        </div>
    )
}

export default Mybooking;


