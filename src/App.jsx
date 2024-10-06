import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [dataArr, setDataArr] = useState([]);
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState('');

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`https://670192fcb52042b542d81d15.mockapi.io/Characters`)
      .then((res) => {
        console.log(res.data);

        setDataArr(res.data);
      });

    console.log(dataArr);
  };

  const deleteItem = (id) => {
    axios
      .delete(`https://670192fcb52042b542d81d15.mockapi.io/Characters/${id}`)
      .then(() => {
        getData();
      });
  };

  
  const searchAction = () => {
    if (search == '') {
      getData()
      setNotFound('')

    } else if (dataArr.length == 0) {
      setNotFound('Character Not Found!') 
    } else {
      setNotFound('')
      setDataArr(dataArr.filter(el => el.name == search))
      
    }
  }
  return (
    <>
      <div className="w-full flex flex-col items-center my-10">
        <div className="flex w-[80vw] justify-between items-center">
          <div className="flex items-center">

        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <button onClick={searchAction} className="btn btn-accent m-4 text-white">Search</button>
          </div>
        <Link to="/add" className="btn btn-primary my-4 text-white">
          Add new character
        </Link>
        </div>
        <div className="grid justify-items-center  grid-cols-1 gap-2 w-[80vw] md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {dataArr.map((el) => {
            return (
              <div className="p-3 flex flex-col items-center  bg-white shadow-md rounded-md w-fit">
                  <p className="text-black text-center my-4 font-semibold">{el.name}</p>
               
                <img src={el.image} alt="" />
                <details className="dropdown">
                  <summary className="btn btn-sm bg-transparent border-0 my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </summary>
                  <ul className="menu dropdown-content bg-white rounded-box z-[1] w-30 p-2 shadow">
                    <button onClick={() => deleteItem(el.id)}>
                      <p>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF5861"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </p>
                    </button>
                  </ul>
                </details>
              </div>
            );
          })}
        </div>
        <p className="text-error">{notFound}</p>
        <button className="btn" >open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
    </>
  );
}

export default App;
