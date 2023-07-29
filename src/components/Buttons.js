import React, { useState } from "react";
import toast from "react-hot-toast";
import getTableInfo from "./GetTableInfo";

import { X, Trash2, Share2 } from "lucide-react";
const currentUrl = window.location.href;

const handleShareButtonClick = () => {
  // You can perform any other actions here before sharing (if needed)
  // For now, we'll just proceed with sharing the current URL.
  window.open(
    `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`
  );
};
const Modal = ({ setShowModal }) => {
  const [addedUsers, setAddedUsers] = useState(["ayushranjan@gmail.com"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target[0].value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (addedUsers.includes(email)) {
      alert("User already added");
      return;
    }
    setAddedUsers((prev) => [...prev, email]);
  }

  const handleDelete = (email) => {
    if (addedUsers.length === 1) {
      alert("Cannot remove all users");
      return;
    }
    setAddedUsers((prev) => prev.filter((e) => e !== email));
  }


  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-400 z-50 bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className="bg-white w-96 h-auto rounded-lg flex flex-col relative">
        <X
          className="text-black absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            setShowModal(false);
          }}
        />
        <div className="flex flex-col gap-6 w-full p-5 mt-10">
          <h1 className="text-2xl font-bold">Share for Collaboration</h1>
          <form class="grid gap-4 mb-4 grid-cols-2" onSubmit={handleSubmit}>
            <div className="col-span-full">
              <label
                for="first_name"
                class="block mb-2 text-sm font-semibold text-gray-900"
              >
                Email Address
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="col-span-1">
              <button
                onClick={handleShareButtonClick}
                type="button"
                className="flex flex-row items-center justify-center text-white bg-purple-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="21"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 
          480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 
          341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    />
                  </svg>
                </div>
                Share
              </button>
            </div>

            <div className="col-span-1">
              <button 
              type="submit"
              className="text-white bg-purple-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-2.5 text-center">
                Add Collaborator
              </button>
            </div>
          </form>
          <div>
            <h1 className="text-2xl font-bold">Collaborators</h1>
            <div className="flex flex-col gap-2 mt-4 w-full">
              {
                addedUsers.map((email) => {
                  return (
                    <div className="flex flex-row justify-between text-sm text-gray-700 rounded-lg bg-gray-100 w-full p-2">
                      <span>{email}</span>
                      <Trash2 className="text-xl text-red-500 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-center" onClick={()=>handleDelete(email)}/>
                    
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) {
  const runQuery = () => {
    setQuery(value);
    const { tableHeaders, tableRows } = getTableInfo(defaults);
    setHeaders(tableHeaders);
    setRows(tableRows);
    const temp = [];
    if (tableHeaders.length > 0 && tableRows.length > 0) {
      temp.push(tableHeaders);
      tableRows.forEach((row) => {
        temp.push(row);
      });

      setCSVData(temp);
      if (temp.length > 0) {
        toast.success("Query run");
      } else {
        toast.error("This didn't work.");
      }
    }
  };

  
  

  const currentDate = new Date().toLocaleString();
  const downloadTxtFile = () => {
    const element = document.createElement("a");

    const file = new Blob([`${value} Query run at  ${currentDate}`], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  

  const handleEmailButtonClick = () => {
    setShowModal(true);
  };

  const reset = () => {
    // function to reset the editor
    setQuery("");
    setValue("select * from customers;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
    console.log(setValue);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      <div className="flex">
        <div className="p-2">
          <button
            onClick={reset}
            className="flex mx-auto text-white bg-purple-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" />
            </svg>
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={runQuery}
            className="flex mx-auto text-white bg-purple-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
          >
            <div className="pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="21"
                viewBox="0 0 31.499 36.001"
                className="fill-current"
              >
                <path
                  id="Icon_awesome-play"
                  data-name="Icon awesome-play"
                  d="M29.841,15.1,5.091.464A3.356,3.356,0,0,0,0,3.368V32.625a3.372,3.372,0,0,0,5.091,2.9L29.841,20.9a3.372,3.372,0,0,0,0-5.808Z"
                  transform="translate(0 -0.002)"
                />
              </svg>
            </div>
            <div className="font-bold font-mono">Run Query</div>
          </button>
        </div>
        

        <div className="p-2">
          <button
            onClick={handleEmailButtonClick}
            className="flex mx-auto text-white bg-purple-500 border-0 py-5 h-11 px-1 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
          >
            <div className="px-3">
              <Share2 />
            </div>
            <div className="font-bold font-mono">Share</div>
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={downloadTxtFile}
            className="flex mx-auto text-white bg-purple-500 border-0 py-5 h-11 px-1 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
          >
            <div className="px-3">
              <svg
                className="text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 
            32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 
            45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 
            0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 
            25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
              </svg>
            </div>
            <div className="test-smaller">Query</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
