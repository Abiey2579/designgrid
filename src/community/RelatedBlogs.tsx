import React, { useState, useEffect } from "react";
import BlogCardOne from "./components/BlogCardOne";
import {
  database,
  DATABASE_ID,
  COMMUNITY_BLOGS_COLLECTION,
} from "../assets/config/appwrite-auth";
import { Blog } from "../assets/Model/model";
import { Query } from "appwrite";

const Relatedblogs = (props: { category: string }) => {
  const [blogLists, setBlogLists] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const promise = await database.listDocuments(
          DATABASE_ID,
          COMMUNITY_BLOGS_COLLECTION,
          [
            Query.equal("category", props.category),
            Query.limit(3),
            Query.orderDesc("name"),
          ]
        );

        const blogDocuments: Blog[] = promise.documents as Blog[];
        setBlogLists(blogDocuments);
      } catch (err) {
        setBlogLists([]);
      }
    };

    fetchBlogs();
  }, [props.category]);
  return (
    <React.Fragment>
      <h2 className="mb-4 text-xl font-bold text-dgDarkPurple">
        Related Blogs
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {blogLists.map((blog) => (
          <BlogCardOne
            category={blog.category}
            image={blog.cover_image_url}
            date={blog.$createdAt}
            readtime={blog.readtime}
            title={blog.name}
            partialDesc={blog.partial_description}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Relatedblogs;
