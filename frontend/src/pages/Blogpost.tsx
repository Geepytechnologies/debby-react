import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { getPostBySlug } from "../utils";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";

type Post = {
  author: {
    name: string;
    photo: {
      url: string;
    };
  };
  categories: any;
  content: {
    html: string;
  };
  createdAt: string;
  title: string;
  featuredImage: {
    url: string;
  };
};

const Blogpost = () => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const sanitizedHtml = post?.content?.html
    ? DOMPurify.sanitize(post.content.html)
    : "";

  const { slug } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const getSinglePost = async () => {
    const result = await getPostBySlug(String(slug));
    setPost(result);
  };
  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    <>
      <Layout>
        <button
          onClick={goBack}
          className="shadow-md rounded-md m-3 bg-off text-white font-[500] px-5 py-3"
        >
          Back
        </button>
        {post && (
          <div className="flex items-center justify-center p-4">
            <div className="mb-8">
              <h3 className="text-off font-[500]">{post.categories[0].name}</h3>
              <h1 className="font-[700] text-[30px]">{post.title}</h1>
              <div className="flex gap-3 mt-3">
                <h2 className="font-[500] font-rubik italic lowercase tracking-wider">
                  by {post.author.name}
                </h2>
                <h2>{moment(post.createdAt).fromNow()}</h2>
              </div>
              <div className="w-full flex items-center justify-center my-6">
                <div className="w-[300px] sm:w-[400px] md:w-[700px] lg:w-[1000px] ">
                  <img src={post.featuredImage.url} alt="" className="w-full" />
                </div>
              </div>
              <div className="content-wrapper">
                <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Blogpost;
