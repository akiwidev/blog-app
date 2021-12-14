import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setrelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug).then((result) => setrelatedPosts(result));
    } else {
      getRecentsPosts().then((result) => setrelatedPosts(result));
    }
    return () => {
      cleanup;
    };
  }, [input]);
  return <div>Post Widget</div>;
};

export default PostWidget;
