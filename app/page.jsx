import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";

import Social from "@/components/Social";
const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text*/}
        <div className="text-center xl:text-left ">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br /><span className="text-accent">Juan Garcia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">As a passionate and innovative Software Engineer, I specialize in full-stack web development, with expertise in JavaScript, React.js, Node.js, and RESTful APIs. I am driven to create scalable, efficient, and user-friendly applications that solve real-world problems while embracing continuous learning and teamwork.</p>
            {/*button and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              size="lg" 
              className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FaDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
                </div>
            </div>
        </div>
        {/*photo*/}
        <div>photo</div>
      </div>
    </div>
  </section>
  );
};
export default Home;