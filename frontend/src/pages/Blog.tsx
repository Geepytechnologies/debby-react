import { useEffect, useState } from "react";
import Blogcard from "../components/blog/Blogcard";
import Blogskeleton from "../components/skeletons/Blogskeleton";
import Layout from "../components/Layout";
import Hero from "../components/blog/Hero";
import { getPosts } from "../utils";

type Props = {};

const Blog = (props: Props) => {
  const [posts, setPosts] = useState([1, 2, 3]);
  const [isloading, setIsloading] = useState(false);
  const getmyposts = async () => {
    try {
      setIsloading(true);
      const result = await getPosts();
      setPosts(result);
      setIsloading(false);
    } catch (err) {
      setIsloading(false);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    getmyposts();
  }, []);
  const gridColsClass =
    posts.length <= 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <>
      <Layout>
        {isloading ? (
          <Blogskeleton />
        ) : (
          <div>
            <Hero />
            <div className="w-full flex items-center justify-center p-3 mt-7">
              {/* blog posts */}
              <div
                className={`grid p-4 justify-center ${gridColsClass}  gap-5`}
              >
                {posts.map((item: any, index: any) => (
                  <Blogcard key={index} post={item.node} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Blog;
