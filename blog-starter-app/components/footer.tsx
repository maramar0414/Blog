import Container from "./container";
import SocialMedia from "./social-media";

import { EXAMPLE_PATH } from "../lib/constants";
//import FeedbackForm from "./feedback";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-3 lg:mb-0 lg:pr-4 lg:w-1/2">
            Maria Araque
          </h3>
            <p className="text-2xl lg:text-[1.5rem] tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Frontend Developer
            </p>
          
          <SocialMedia/>
          
         {/*<FeedbackForm/>*/}
          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
