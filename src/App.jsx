import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [dataArr, setDataArr] = useState([]);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState("");
  const navigate = useNavigate();
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
    if (search == "") {
      getData();
      setNotFound("");
    } else if (dataArr.length == 0) {
      setNotFound("Character Not Found!");
    } else {
      setNotFound("");
      setDataArr(dataArr.filter((el) => el.name == search));
    }
  };
  const updateAction = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center my-10">
        <div className="flex w-[80vw] justify-between items-center">
          <div className="flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button
              onClick={searchAction}
              className="btn btn-accent m-4 text-white"
            >
              Search
            </button>
          </div>
          <Link to="/add" className="btn btn-primary my-4 text-white">
            Add new character
          </Link>
        </div>
        <div className="grid justify-items-center  grid-cols-1 gap-2 w-[80vw] md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {dataArr.map((el) => {
            return (
              <div className="p-3 flex flex-col items-center  bg-white shadow-md rounded-md w-fit">
                <p className="text-black text-center my-4 font-semibold">
                  {el.name}
                </p>

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
                  <ul className="menu dropdown-content bg-white rounded-box z-[1] w-40 p-2 shadow border border-gray-500">
                    <li>
                      <button onClick={() => deleteItem(el.id)}>
                        <p className="flex text-black">
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-trash mx-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                          Delete
                        </p>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => updateAction(el.id)}>
                        <p className="flex  text-black">
                          {" "}
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-pencil mx-1"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                            <path d="M13.5 6.5l4 4" />
                          </svg>
                          Update
                        </p>
                      </button>
                    </li>
                  </ul>
                </details>
              </div>
            );
          })}
        </div>
        <p className="text-error">{notFound}</p>
      </div>
    </>
  );
}

export default App;
