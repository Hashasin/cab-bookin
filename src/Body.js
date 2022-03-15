import React,{useEffect, useState} from 'react';
import "./Body.css";
import { BsFilterLeft } from "react-icons/bs";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


function Body() {

  return (


  














    <div className="body_initial">
      <div className="body_start">
        <a href="#body">Nearest Rides</a>
        <div className="body_first">
          <a href="">Upcoming Rides</a>
        </div>
        <div className="body_second">
          <div>Past Rides</div>
        </div>
        <div className="body_third">
          <div>
            <BsFilterLeft />
            <div className="filter">Filters</div>

            <FormControl className="app__dropdown">
              <Select placeholder="Select Option">
                <MenuItem value="filters">City</MenuItem>
                <MenuItem value="filters">State</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;