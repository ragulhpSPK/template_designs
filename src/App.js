import "./App.css";
import { ContentHomepage } from "./heper/contenthome";

function App() {
  return (
    <div className="h-auto w-[100vw] xsm:pl-1  overflow-x-hidden">
      <div
        className="text-center h-16 mt-5 text-4xl font-bold text-slate-700"
        id="writer"
      >
        <h1 className="text">Home Page Template Designs</h1>
      </div>
      <div className="xsm:grid xsm:grid-cols-1 xsm:w-min sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3 xsm:ml-40 gap-10">
        {ContentHomepage.map((data, index) => {
          return (
            <div key={data.id}>
              <div
                className="lg:ml-28 xsm:text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <h1 className="text-2xl pt-5">{data.heading}</h1>
                <p className="text-2xl pt-5">{data.content}</p>
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
                      className="w-6 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <a href={data.url} className="text-2xl pt-5">
                      Clik Here for visit this page
                    </a>
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
