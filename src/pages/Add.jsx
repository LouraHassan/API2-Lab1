import React, { useState } from "react";
import axios from "axios";
import { Link , useNavigate} from "react-router-dom";
function Add() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [hair, setHair] = useState("");
  const [origin, setOrigin] = useState("");
  const [status, setStatus] = useState("");

    const [gender, setGender] = useState("Pick one");
    const navigate = useNavigate()
  console.log(gender);
console.log(status);

  const AddBtn = () => {
    axios.post(`https://670192fcb52042b542d81d15.mockapi.io/Characters`, {
      name: name,
      image: img,
        gender: gender,
        hair: hair,
        origin: origin
    }).then(() => {
navigate('/')
    })
  };
    return (
      
        <div className="">
            
        <div className="flex flex-col items-center justify-center">
          <Link to='/' className=" btn btn-sm btn-secondary my-5 text-white"> Go back
          </Link>
      <div className="p-5 bg-base-300 w-[80vw] flex flex-col items-center md:w-[60vw] lg:w-[40vw]">
      <p className="text-white text-lg">Add new character</p>
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
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Hair Color</span>
          </div>
          <input
            value={hair}
            onChange={(e) => setHair(e.target.value)}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            />
        </label>{" "}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Character origin</span>
          </div>
          <input
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Gender</span>
          </div>
          <select
            className="select select-bordered"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            >
            <option disabled selected>
              Pick one
            </option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>
        </label>
        
              <div className="form-control w-full max-w-xs">
          <p className="my-4">Status:</p>
  <label className="label cursor-pointer">
    <span className="label-text">Alive</span>
    <input value={'Alive'} onChange={(e)=> setStatus(e.target.value)}  type="radio" name="radio-10" className="radio checked:bg-primary" defaultChecked />
  </label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label cursor-pointer">
    <span className="label-text">Deceased</span>
    <input value={'Deceased'} onChange={(e)=> setStatus(e.target.value)} type="radio" name="radio-10" className="radio checked:bg-primary" defaultChecked />
                  </label>
                  
              </div>
              <button onClick={AddBtn} className="text-white btn btn-primary my-10">
          Add character
              </button>
      </div>
              </div>
    </div>
  );
}

export default Add;
