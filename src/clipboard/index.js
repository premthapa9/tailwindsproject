import React from "react";
import logo from "./images/logo.svg";
import fet from "./images/image-computer.png";
import acc from "./images/image-devices.png";
import black from "./images/icon-blacklist.svg";
import text from "./images/icon-text.svg";
import preview from "./images/icon-preview.svg";
import google from "./images/logo-google.png";
import micro from "./images/logo-microsoft.png";
import hp from "./images/logo-hp.png";
import ibm from "./images/logo-ibm.png";
import vect from "./images/logo-vector-graphics.png";
import face from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import insta from "./images/icon-instagram.svg";
const Clipboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <img src={logo} alt="" className="my-16 mx-auto" />
          <h3>A history of everything you copy</h3>
          <p className="section-cont mb-10 text-2xl ">
            Clipboard allows you to track and organize everyting you copy.
            Instantly access your clipboard on all your devices.
          </p>
          {/* Button Container */}

          <div className="button-cont">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download form iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download form Mac
            </a>
          </div>
        </div>
      </section>

      {/* snippets section */}

      <section id="snippets">
        <div className="section-container my-20 ">
          <h3>Keep Track of your Snippets</h3>
          <p className="section-cont mb-24 text-xl">
            Clipboard instantly store any item you copy in the cloud, meaning
            you can access you snippets immediately on all your deives. Our Mac
            and iOS app will help you organize everything
          </p>
        </div>
      </section>

      {/* Featues sections */}
      <section id="features" className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* Images */}
          <div className="md:w-1/2">
            <img src={fet} alt="" className="md:absolute top-0 right-[50%]" />
          </div>

          {/* Items cont */}
          <div className="flex flex-col  md:flex-row  mt-16 mb-24 space-y-12 text-xl md:space-x-4 md:space-y-0 md:w-1/2 md:mb-60 md:text-left md:pl-16">
            <div className="flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue ">
                Quick Search
              </h5>
              <p className="max-w-md text-grayishBlue">
                Easily searh your snippets by content, cateogory, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue ">
                iCloud Sync
              </h5>
              <p className="max-w-md  text-grayishBlue">
                Instantly saves and syncs snippets across all your devices
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue ">
                Completely History
              </h5>
              <p className="max-w-md text-grayishBlue">
                Retrieves any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access anywhere section */}

      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard anywhere</h3>
          <p className="section-cont mb-24 text-xl">
            Whether you're on the go, or at your computer, you can access all
            your clipboard snippets in a few simple clicks
          </p>
          <img src={acc} alt="" className="mx-auto" />
        </div>
      </section>

      {/* Super Charge */}

      <section id="super">
        <div className="section-container my-20">
          <h3>Super charge your workflow</h3>
          <p className="section-cont mb-16 text-xl">
            We have got the tools to boost your productivity.
          </p>

          {/* Item cont */}

          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <img src={black} alt="" className="mb-5" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img src={text} alt="" className="mb-5" />
              <h5>Plain text snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img src={preview} alt="" className="mb-5" />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ref section */}

      <section id="ref">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src={google} alt="" />
          <img src={ibm} alt="" />
          <img src={hp} alt="" />
          <img src={micro} alt="" />
          <img src={vect} alt="" />
        </div>
      </section>

      {/* Button action */}

      <section id="butt">
        <div className="section-container my-20">
          <h3>Clipboard for iOS and MacOS</h3>
          <p className="section-cont mb-10 text-xl">
            Available for free on the App store. Downlaod for Mac or iOS, sync,
            with iCloud and you're ready to start adding to your clipboard
          </p>

          <div className="button-cont">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download form iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download form Mac
            </a>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer className="bg-green-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src={logo} alt="" className="scale-50" />
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-y-0 md:space-x-24">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Privacy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-32 py-1 pb-10">
              <a href="#">
                <img src={face} alt="" className="duration-200 ficon" />
              </a>
              <a href="#">
                <img src={twitter} alt="" className="duration-200 ficon" />
              </a>
              <a href="#">
                <img src={insta} alt="" className="duration-200 ficon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Clipboard;
