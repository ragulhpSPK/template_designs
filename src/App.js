import "./App.css";
import { ContentHomepage } from "./heper/contenthome";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="h-auto w-[100vw] xsm:pl-10  overflow-x-hidden text-white">
      <div
        className="text-center h-16 mt-5 text-5xl font-bold text-orange-500"
        id="writer"
      >
        <Typewriter
          className="text-center"
          onInit={(typewriter) => {
            typewriter

              .typeString("Home Page Template Designs")
              .pauseFor(1000)
              .start();
          }}
        />
      </div>

      <div
        className="xsm:grid xsm:grid-cols-1 xsm:w-fit  sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3 xsm:ml-40 gap-10 pt-44"
        id="mobile"
      >
        {ContentHomepage.map((data) => {
          return (
            <div className="bg-white xsm:w-[25vw] h-[65vh] rounded-lg lg:ml-16 shadow-2xl  shadow-black-700 bg-blend-saturation">
              <div key={data.id}>
                <div
                  className="lg:ml-16 xsm:text-center"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <h1 className="text-2xl pt-5 text-slate-500">
                    {data.heading}
                  </h1>
                  <p className="text-2xl pt-5 text-slate-500">{data.content}</p>
                  <iframe
                    src={data.url}
                    style={{ height: "420px", width: "320px" }}
                    title="Iframe Example"
                    className="pt-5"
                    scrolling="no"
                  ></iframe>
                  <div className="flex w-[500px]">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-10 text-slate-700"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <a
                        href={data.url}
                        className="text-2xl pt-5 text-slate-700"
                      >
                        Clik Here for visit this page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
