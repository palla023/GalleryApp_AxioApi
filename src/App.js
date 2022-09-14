import React, { useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {

  //created a variable to store the API data what you are fetching : used array because of we are storing Objects here
  const [data, setData] = useState([]);

  //created a variable to store the input data
  const [search, setSearch] = useState("");

  const changeHandler = e => {
    setSearch(e.target.value);     //The input value coming from the user stored in search variable 
  }
  const submitHandler = e => {
    e.preventDefault();
    //axios is a third party library for using a promise req or Http req
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )                      //url -> 2 static values one is our form storing variable = which value you want to search like cars, flowers
      .then(response => {
        setData(response.data.photos.photo)      // photos.photo => specific photo from a category(Bikes,flowers,cars) of photos
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      })
  }
  return (
    <div className='mt-5'>
      <center>
        <h2>Gallery Snapshot</h2><br />
        <form onSubmit={submitHandler}>
          <input size="30" type="text" onChange={changeHandler} value={search} /><br /><br />
          <input type="submit" name="Search" />
        </form>
        <br />
        {/* Always check data length , when you fetching the data from api is > 0 or Not by ternary operator and then send that data to another component by Props */}

        {data.length >= 1 ? <Gallery data={data} /> : <h4>No Image Loaded</h4>}
      </center>
    </div>
  )
}

export default App
