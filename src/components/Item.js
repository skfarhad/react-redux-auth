import React, {useState, useEffect} from 'react';
import { async } from 'q';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSelector} from 'react-redux'

const config = require("../config.json");

const baseUrl =  `${config["BASE_API_URL"]}`

function ItemList() {

  useEffect(()=>{
    fetchItemList();
  }, []);

  const [instantEvents, setInstantEvents] = useState([]);
  const jwt_token = useSelector(state => state.auth.jwt_token)

  const fetchItemList = () => {
    var url = `${baseUrl}event/event/instant/`;

    axios.get(url, {
      headers: { Authorization: `jwt ${jwt_token}` }
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      setInstantEvents(res.data);
    });
  };

  return (
    <div >
      {instantEvents.map(item=>(
          <h1 key={item.id}>
            <Link to={`/events/instant/${item.id}`}> {item.name}</Link>
          </h1>
        ))}
    </div>
  );
}

export default ItemList;