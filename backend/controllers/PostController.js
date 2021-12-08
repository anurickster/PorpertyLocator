import postModel from "../models/posts.js";
import categoriesModel from "../models/categories.js";
import subcategoriesModel from "../models/subcategories.js";

export const searchPosts = async (req, res) => {
  try {
    const {
      query: {
        category: categoryId,
        subCategory,
        date,
        maxNumberOfRooms: maxNoOfGuests,
      },
    } = req;

    const queryObj = { categoryId, subCategory, date, maxNoOfGuests };
    queryObj.maxNoOfGuests = queryObj.maxNoOfGuests * 1;
    for (const property in queryObj) {
      if (!queryObj[property]) {
        delete queryObj[property];
      }
    }

    if (queryObj.date) {
      queryObj.date = new Date(queryObj.date);
    }

    console.log({ queryObj });

    const posts = await postModel
      .find(queryObj)
      .populate({ path: "categoryId", select: { title: 1 } })
      .populate({ path: "subCategory", select: { title: 1 } })
      .lean();
    res.status(200).send({ msg: 200, posts });
  } catch (error) {
    console.log({ error });
    res.status(500).send({ msg: "Internal server error" });
  }
};

export const createPost = async (req, res) => {
  try {
    const {
      body: { categoryId, subCategoryId, title, date, maxNoOfGuests },
    } = req;

    if (!categoryId || !subCategoryId || !title || !date) {
      return res.status(403).send({ msg: "Please fill proper data" });
    }
	
    const createPost = await postModel.create({
      title: title,
      categoryId: categoryId,
      subCategory: subCategoryId,
      date: new Date(date),
      maxNoOfGuests: maxNoOfGuests,
    });

    res.status(200).send({ msg: 200, post: createPost });
  } catch (error) {
    console.log({ error });
    res.status(500).send({ msg: "Internal server error" });
  }
};
