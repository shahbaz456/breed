import React from 'react'
import '../App.css'
import { Input } from "reactstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = ({heading}) => {
    const [toFind, setToFind] = useState("");
    const dispatch = useDispatch();
    // const breedFilter = useSelector((state) => state.data.breedFilter);



    return (
            <div className="input-group">
          <Input
            placeholder="Search Dog Breed"
            value={toFind}
            type="search"
            onChange={(e) => {
              setToFind(e.target.value);
              dispatch({type: heading === 'Home' ? 'FILTER' : "FAVFILTER", payload: e.target.value})
            }}
          />
        </div>
    )
}
export default SearchBar
