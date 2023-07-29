import React from "react";

function PredefinedQuery({ setDefaults, setValue }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
  ];
  
  return (
    <div>
      
      
      <div className=" p-4 text-purple-500">
      <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="25"
            height="15" viewBox="0 0 448 512">
          <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
          <p className="font-bold text-lg">SQL EDITOR</p>
        </div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="23"
            viewBox="0 0 36 27"
            className="fill-current mr-3"
          >
            <path
              id="Icon_open-code"
              data-name="Icon open-code"
              d="M22.5,0,9,27h4.5L27,0ZM4.5,4.5,0,13.5l4.5,9H9l-4.5-9L9,4.5ZM27,4.5l4.5,9-4.5,9h4.5l4.5-9-4.5-9Z"
            />
          </svg>

          <p className="font-bold text-lg">Available Queries</p>
        </div>
       
        
        
        <div className="h-52 lg:h-48 overflow-auto scrollbar-hide mb-6 lg:mb-0">
          {qurtyValue.map((item, index) => (
            
            <p
              key={index}
              
              className="cursor-pointer bg-gray-300 hover:bg-gray-400 font-mono hover:text-white p-2 text-center text-sm rounded-sm my-4"
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);

              }}
            >
            {item.query}
              
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PredefinedQuery;
