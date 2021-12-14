import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setrelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setrelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setrelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);
  return <div>Post Widget</div>;
};

export default PostWidget;
