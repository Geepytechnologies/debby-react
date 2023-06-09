import React from "react";
import { motion } from "framer-motion";

type Post = {
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  date: string;
  author: {
    name: string;
  };
  slug: string;
};

const post = {
  title: "Introduction to web3",
  excerpt: "A Beginner's Guide To Blockchain",
  image: "/bgdeb.jpeg",
  date: Date.now(),
  author: "debby",
};

const Blogcard = ({ post }: { post: Post }) => {
  return (
    <div className="p-3 min-w-[300px]">
      {/* post image */}
      <a
        href={`/blog/${post?.slug}`}
        className=" flex items-center justify-center my-3"
      >
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          src={post?.featuredImage.url}
          alt={post?.title}
          height={300}
          width={300}
          loading="lazy"
          className="shadow-l"
        />
      </a>
      {/* article section */}
      <div className="space-y-2">
        <a href={`/blog/${post?.slug}`}>
          <h1 className="font-[600] text-2xl text-center">{post?.title}</h1>
        </a>
        <h2 className="text-center">{post?.excerpt}</h2>
      </div>
    </div>
  );
};

export default Blogcard;
