import React from "react";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {};

const About = (props: Props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Layout>
        <button
          onClick={goBack}
          className="border-2 m-3 border-off text-off font-[500] px-5 py-3"
        >
          Back
        </button>
        <div className="w-full p-2 flex flex-col items-center">
          <div className="w-full sm:w-[90%] md:w-[70%] mt-9">
            <p className="text-center font-mont tracking-wider font-[600] text-gray-500 uppercase">
              About DcryptGirl
            </p>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              className="w-full flex items-center justify-center mt-4"
            >
              <img src={"/debby2.jpeg"} alt={""} width={400} height={400} />
            </motion.div>
            <div className="mt-5 p-2 space-y-8">
              <p>
                <span className="font-[500]">Deborah Ezinne Ifegwu</span> is a
                blockchain enthusiast, influencer, content creator, community
                builder, project manager, and public speaker, all rolled into
                one!
              </p>
              <p>
                As a thought leader and innovator in the industry, she has built
                a reputation for her ability to engage the audience through
                compelling content, build and nurture communities, manage
                complex projects, and captivate crowds with her public speaking.
                Her multifaceted skill set allows her to contribute to the
                success of numerous projects and communities.
              </p>
              <p>
                With her expertise in blockchain technology, she has become a
                go-to blockchain expert for those seeking to elevate their
                projects or communities. Whether it&apos;s through creating
                engaging content, building a strong community, managing project
                complexities, or delivering captivating speeches, she brings a
                unique blend of skills to the table. With her deep understanding
                of blockchain technology and the crypto market, she offers
                valuable insights and predictions to help you stay ahead of the
                curve.
              </p>
              <p>
                If you&apos;re ready to take your blockchain project or
                community to new heights, she is here to help. Trust her to
                bring her passion, knowledge, and experience to the table, and
                let&apos;s make your vision a reality!
              </p>
            </div>
          </div>
        </div>

        <Contact />
      </Layout>
    </>
  );
};

export default About;
