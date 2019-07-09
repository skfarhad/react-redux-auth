import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux'

const config = require("../config.json");
const baseUrl =  `${config["BASE_API_URL"]}`

function ItemDetail({match}) {

  useEffect(()=>{
    fetchItemDetail();
  }, []);

  const [instantEventDetail, setInstantEventDetail] = useState({});
  const jwt_token = useSelector(state => state.auth.jwt_token)

  const fetchItemDetail = async () => {
    var url = `${baseUrl}event/event/instant/${match.params.id}`;
    axios.get(url, {
      headers: { Authorization: `jwt ${jwt_token}` }
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      setInstantEventDetail(res.data);
    });
  };

  return (
    <div >
        <h1>{instantEventDetail.name}</h1>
        <h1>{instantEventDetail.description}</h1>
    </div>
  );
}

export default ItemDetail;