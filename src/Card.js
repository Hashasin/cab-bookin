import React, {useEffect, useState} from 'react';
import "./Card.css"
import img2 from "./images/googl.jfif"

 function Card() {

   const [user, setUser] = useState([]);  
 const getUsers = async () => {
   const response = await fetch("https://assessment.api.vweb.app/rides");
   setUser(await response.json());
//   const data = (await response.json());
//   console.log(data);
 }
  
useEffect(() => {
  getUsers();
}, []);
  

  return (

       
           <div className="  Card"> 
          {user.map((curElem) => {
            return (
              <div className="card">
                <div className=" row">
                  <div className="image">
                    <img
                      src={img2}
                      class="rounded"
                      height="100"
                      width="105"
                      class="float-right"
                      alt=""
                    ></img>
                  </div>
                  <div className="id"  >
                    Ride id: {curElem.id}
                  </div>
                  <div className="origin_station_code">
                    Origin Station: {curElem.origin_station_code}
                  </div>
                  <div className="station_path">
                    station_path: {curElem.station_path}
                  </div>
                  <div className="date">Date: {curElem.date} Distance=0</div>

                  <div className="city">City Name: {curElem.city}</div>
                  <div className="state">State Name: {curElem.state}</div>
                </div>
              </div>
            );
          })}
        </div>
      
    
  );
}

export default Card;






  //   <div className="col-4 col-md-4 mt-5">
            //     <div className="card p-2">
            //       <div className="d-flex align-items-center">
            //         <div className="image">
            //           <img src={img2} class="rounded" width="105" alt=""></img>
            //         </div>
            //         <div className="ml-3 w-10">
                      /* <h4 className="mb-0 mt-0 textleft">
                        Ride id: {curElem.id}
                      </h4>
                      <h4 className="mb-0 mt-0 textleft">
                        Origin Station: {curElem.origin_station_code}
                      </h4>
                      <h4 className="mb-0 mt-0 textleft">
                        station_path: {curElem.station_path}
                      </h4>
                      <h4 className="mb-0 mt-0 textleft">
                        Date: {curElem.date}
                      </h4>
                      <h4 className="mb-0 mt-0 textleft">Distance</h4>
                      <h4 className="mb-0 mt-0 textleft">
                        City Name: {curElem.city}
                      </h4>
                      <h4 className="mb-0 mt-0 textleft">
                        State Name: {curElem.state}
                      </h4> */

                      /* <span className="textleft">
                        Origin Station: {curElem.origin_station_code}
                      </span> */
                      /* <div className="p-2 mt-2 bg-black d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">
                            station_path: {curElem.station_path}
                          </span>
                          <span className="number1"></span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="articles">Date: {curElem.date}</span>
                          <span className="number2">238</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="articles">Distance</span>
                        </div>
                      </div> */
                //     </div>
                //   </div>
                // </div>
           //   </div>