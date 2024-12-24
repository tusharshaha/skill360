import { FaFacebookF, FaSkype, FaTwitter } from "react-icons/fa";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer>
      <div className="bg-indigo-950 text-white">
        <div className="cus-container py-16">
          <div className="grid grid-cols-5 gap-8 lg:gap-4">
            <div className="lg:col-span-1 sm:col-span-2 sm:text-left col-span-5 px-5 sm:p-0 text-center">
              <h2 className="text-4xl header">Skill360</h2>
              <p className="text-slate-300 mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
                rem. Nulla sapiente alias ad doloribus!
              </p>
              <div className="flex items-center justify-center sm:justify-normal gap-3 mt-6">
                <div className="p-3 rounded-full outline outline-slate-300 text-slate-300 outline-2 trans hover:outline-fuchsia-600 hover:bg-fuchsia-600">
                  <FaFacebookF />
                </div>
                <div className="p-3 rounded-full outline outline-slate-300 text-slate-300 outline-2 trans hover:outline-fuchsia-600 hover:bg-fuchsia-600">
                  <FaSkype />
                </div>
                <div className="p-3 rounded-full outline outline-slate-300 text-slate-300 outline-2 trans hover:outline-fuchsia-600 hover:bg-fuchsia-600">
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <QuickLinks></QuickLinks>
              </div>
            </div>
          </div>
        </div>
        <div className="cus-container border-t border-slate-700 py-5">
          <p className="text-center text-slate-300">
            Copyright &#169; 2024 Rainbow-Themes. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;