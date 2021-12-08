import React, { useEffect, useState } from "react";
import "./post.css";
import { getPosts, getAllCategories, getSubCategories } from "../../api/index";
import Blog from "./Blog";

const Post = () => {
  const initSearchObj = {
    category: "",
    subCategory: "",
    date: "",
    maxNumberOfRooms: 0,
  };
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [searchObj, setSearchObj] = useState(initSearchObj);
  const clearSearch = () => {
    setSearchObj(initSearchObj);
    setSubCategories([]);
  };
  // Fetch category
  useEffect(() => {
    (async () => {
      const { categories: dbCategories } = await getAllCategories();
      console.log("DB category", dbCategories);
      setCategories([...dbCategories]);
    })();
  }, []);

  // Fetch subCategory
  useEffect(() => {
    (async () => {
      const { subCategories: dbSubCategories } = await getSubCategories(
        searchObj.category
      );
      setSubCategories(dbSubCategories);
    })();
  }, [searchObj.category]);

  // Search query
  useEffect(() => {
    (async () => {
      const { posts } = await getPosts(searchObj);
      console.log("POSTS ", posts);
      setPosts(posts);
    })();
  }, [searchObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchObj({ ...searchObj, [name]: value });
  };

  return (
    <div>
		<h1 className="heading">Search Post</h1>
      <div className="search-panel">
        <select
          onChange={handleChange}
          name="category"
          value={searchObj.category}
        >
          <option value="">Select category</option>
          {categories.length &&
            categories.map((el) => {
              return <option value={el._id}>{el.title}</option>;
            })}
        </select>

        <select
          onChange={handleChange}
          name="subCategory"
          value={searchObj.subCategory}
        >
          <option value="">Select sub category</option>
          {subCategories.length &&
            subCategories.map((el) => {
              return <option value={el._id}>{el.title}</option>;
            })}
        </select>

        <input
          onChange={handleChange}
          type="date"
          name="date"
          value={searchObj.date}
        />
        <input
          onChange={handleChange}
          type="number"
          name="maxNumberOfRooms"
          value={searchObj.maxNumberOfRooms}
        />
      </div>

        <button className="clear-btn" onClick={clearSearch}>Clear</button>

	  <div className="blog-container">
        {posts.length && posts.map((el) => <Blog el={el} />)}
      </div>
    </div>
  );
};

export default Post;
