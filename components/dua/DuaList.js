import { useState } from "react";
import { Prayers } from "./Prayers";
import DuaLayout from "./DuaLayout";
import { DropdownOptions } from "./DropdownOptions";

const DuaList = () => {
  const [prayer, setPrayer] = useState();

  const handleChange = (e) => {
    setPrayer(e.target.value);
  };

  const filteredDua = Prayers.find((Dua) => Dua.id === prayer);

  return (
    <>
      <style jsx>
        {`
          .custom-arrow::before {
            content: "";
            position: absolute;
            widhth: 0;
            height: 0;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-left: 0.7em solid transparent;
            border-right: 0.7em solid transparent;
            border-top: 0.7em solid rgb(236 72 153);
          }
        `}
      </style>
      <DuaLayout>
        <main className="lg:py-24 lg:pl-10 lg:pr-1 lg:flex lg:justify-between">
          {/* heading */}
          <header className="max-w-lg lg:mr-10 mx-auto lg:mx-0 text-center lg:text-left">
            <h1
              className="text-3xl lg:text-4xl text-skin-heading
            font-extrabold font-mulish"
            >
              ease your life with the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                quranic verses
              </span>
            </h1>
            <p className="my-6 text-md md:text-lg font-lato font-semibold tracking-wide text-skin-muted">
              Feeling Sad, Depressed, or Hopeless and don&apos;t know what to
              recite? Don&apos;t worry, we have got you covered.
            </p>

            {/* normal dropdown  */}
            <div className="relative">
              <select
                className="dropdown w-full h-14 pl-4 pr-10 py-3 text-xl font-lato font-normal bg-white text-skin-heading rounded-md outline-none appearance-none shadow-none cursor-pointer"
                onChange={handleChange}
              >
                {DropdownOptions.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </select>
              <div className="custom-arrow absolute top-0 right-0 h-full w-16 bg-fuchsia-400 pointer-events-none rounded-r-md"></div>
            </div>
          </header>
          {/* ------------------------------------------------
            ----------------------------------------------------
            ------------ Filtering out the data ---------------
            ---------------------------------------------------
            ------------------------------------------------ */}
          <div className="max-w-4xl mx-auto lg:max-w-2xl lg:mx-0">
            {filteredDua && (
              <div className="mt-16">
                <div className="max-w-4xl p-[4px] bg-gradient-to-r from-skin-first via-skin-mid to-skin-last rounded-xl font-mulish">
                  <div className="max-h-96 lg:max-h-[27rem] overflow-y-auto scrollbar-hide p-8 bg-white rounded-xl shadow-xl">
                    <h1 className="text-xl text-center text-skin-muted">
                      {filteredDua.title}
                    </h1>
                    <p className="mt-10 mb-6 font-uthmanic text-3xl lg:text-3xl text-right">
                      {filteredDua.arabic}
                    </p>
                    <div>
                      <span className="text-skin-muted">Urdu Translation:</span>
                      <p className="font-lato mb-4 text-[1.35rem] text-right">
                        {filteredDua.urdu}
                      </p>
                    </div>
                    <div>
                      <span className="text-skin-muted">
                        English Translation:
                      </span>
                      <p>{filteredDua.translation}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </DuaLayout>
    </>
  );
};

export default DuaList;
