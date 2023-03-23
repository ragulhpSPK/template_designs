import "./App.css";

function App() {
  return (
    <div className="h-[125vh]">
      <div>
        <div className="text-center h-16 mt-5 text-4xl font-bold text-slate-400">
          <h1>Home Page Template Designs</h1>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="ml-28">
            <h1 className="text-2xl pt-5">Template 01</h1>
            <p className="text-2xl pt-5">Using React with Tailwind Css</p>
            <iframe
              src="https://home-template.vercel.app/"
              style={{ height: "500px", width: "320px" }}
              title="Iframe Example"
              className="pt-5"
            ></iframe>
            <div></div>
            <a
              href="https://home-template.vercel.app/"
              className="text-2xl pt-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
              Clik Here for visit this page
            </a>
          </div>
          <div className="ml-28">
            <h1 className="text-2xl pt-5">Template 02</h1>
            <p className="text-2xl pt-5">Using React with Tailwind Css</p>
            <iframe
              src="https://template-01-three.vercel.app/"
              style={{ height: "500px", width: "320px" }}
              title="Iframe Example"
              className="pt-5"
            ></iframe>
          </div>
          <div className="ml-28">
            <h1 className="text-2xl pt-5">Template 03</h1>
            <p className="text-2xl pt-5">Using React with Tailwind Css</p>
            <iframe
              src="https://template-02-one.vercel.app/"
              style={{ height: "500px", width: "320px" }}
              title="Iframe Example"
              className="pt-5"
            ></iframe>
          </div>
          <div className="ml-28">
            <h1 className="text-2xl pt-5">Template 04</h1>
            <p className="text-2xl pt-5">Using React with Tailwind Css</p>
            <iframe
              src="https://template-03.vercel.app/"
              style={{ height: "500px", width: "320px" }}
              title="Iframe Example"
              className="pt-5"
              scrolling="no"
            ></iframe>
          </div>
          <div className="ml-28">
            <h1 className="text-2xl pt-5">Template 05</h1>
            <p className="text-2xl pt-5">Using React with Tailwind Css</p>
            <iframe
              src="https://template-05.vercel.app/"
              style={{ height: "500px", width: "320px" }}
              title="Iframe Example"
              className="pt-5"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
