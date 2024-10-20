import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

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
            Hello I'm <br /><span>Juan Garcia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">write about who i am in a brief sentence. Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui nulla nostrum quam architecto sint quas voluptate reprehenderit doloremque fugiat, ipsam quia assumenda expedita repellat consequuntur tenetur perferendis facere? Sequi.</p>
            {/*buttin and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              size="lg" 
              className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
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