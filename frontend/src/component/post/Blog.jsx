import React from "react";

const Blog = ({el}) => {
  return (
    <>
	  <div class="card">
        <img
          src="https://i.ibb.co/vd4HTQH/105-1058511-banner-transparent-library-png-pinterest-clip-art-scrapbook.png"
          alt="Avatar"
        />
        <div class="container">
          <h4>
            <b>{el.title}</b>
          </h4>
          <ol>
            <li>Category : {el.categoryId.title}</li>
            <li> Sub category : {el.subCategory.title} </li>
            <li> Max guests : {el.maxNoOfGuests} </li>
            <li> Date : {el.date} </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Blog;
