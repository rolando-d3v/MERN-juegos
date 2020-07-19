import React from "react";
import { API } from "../config";

const ShowImage = ({ url, item }) => {
  return (
    <div>
      <img src={`${API}/${url}/photo/${item._id}`} alt="algo" 
      style={{width: "100%"}}
      />
    </div>
  );
};

export default ShowImage;
