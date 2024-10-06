import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from "axios";

function Update() {
    const [info, setInfo] = useState([]);
    const [img, setImg] = useState("");
    const [name, setName] = useState("");

    const { id } = useParams()
    useEffect(() => {
        getData();
      }, []);

    const getData = () => {
        axios
          .get(`https://670192fcb52042b542d81d15.mockapi.io/Characters/${id}`)
          .then((res) => {
            console.log(res.data);
    
            setInfo(res.data);
          });
    
      };
    const updateImage = () => {
        if (img == '') {
            axios.put(`https://670192fcb52042b542d81d15.mockapi.io/Characters/${id}`, {
                name: name
            }).then(() => {
            console.log('name updated');    
        }).then(() => getData())  
        } else if (name == '') {
            axios.put(`https://670192fcb52042b542d81d15.mockapi.io/Characters/${id}`, {
                image: img
            }).then(() => {
            console.log('image updated'); 
        }).then(() => getData()) 
        } else {
            axios.put(`https://670192fcb52042b542d81d15.mockapi.io/Characters/${id}`, {
                image: img,
                name: name
            }).then(() => {
            console.log('both updated'); 
        }).then(() => getData()) 
        }
       
}
  return (
      <div>
            
            <div className="flex p-10 flex-col items-center justify-center">
              <Link to='/' className=" btn btn-sm btn-secondary my-5 text-white"> Go back
              </Link>
              <div className='flex w-full justify-around'>
                  
              <div className='flex flex-col items-center'>
                  <p className='text-lg font-semibold my-2'>{info.name}</p>
                <img src={info.image} alt="" />
              </div>
              <div className='w-[40vw]  flex flex-col items-center'>
                  
          <p className="text-white text-lg my-4">Update image</p>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Character image link</span>
              </div>
              <input
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                />
            </label>
            <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Character Name</span>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            />
        </label>
                  <button onClick={updateImage} className="text-white btn btn-primary my-10">
              Update character's infp
                  </button>
            </div>
          </div>
        
            </div>
    </div>
  )
}

export default Update
