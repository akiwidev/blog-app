import React, { useState, useEffect } from "react";
import moment from "moment";
import arse from "html-react-parser";

const Comments = ({ slug }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    // getComments(slug)
    return () => {
      cleanup;
    };
  }, []);

  return <div>Comments</div>;
};

export default Comments;
