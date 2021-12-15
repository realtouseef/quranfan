import { useState } from "react"
import { Prayers } from "./Prayers"
import DuaLayout from "./DuaLayout"

const DuaList = () => {
  const [prayer, setPrayer] = useState()

  const handleChange = (e) => {
    setPrayer(e.target.value)
  }

  const filteredDua = Prayers.find((Dua) => Dua.id === prayer)

  return (
    <>
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
              Feeling Sad, Depressed, or Hopeless and {"don't"} know what to
              recite? {"Don't"} worry, we have got you covered.
            </p>

            {/* normal dropdown  */}
            <div className="relative">
              <i className="fas fa-caret-down text-4xl absolute top-2 right-3 fill-current text-transparent bg-clip-text bg-gradient-to-r from-skin-first via-skin-mid to-skin-last pointer-events-none"></i>
              <select
                className="dropdown w-full pl-4 pr-10 py-3 text-xl font-lato font-normal bg-white text-skin-heading border-2 rounded-md outline-none appearance-none shadow-none cursor-pointer"
                onChange={handleChange}
              >
                <option value="null">Select Emotion</option>
                <option value="Afraid">Afraid</option>
                <option value="Angry">Angry</option>
                <option value="Anxious">Anxious</option>
                <option value="Treated-harshly">Been treated harshly</option>
                <option value="Depressed">Depressed</option>
                <option value="Desire">Desire</option>
                <option value="Burdened">Feeling burdened</option>
                <option value="Loser">Feeling like a loser</option>
                <option value="Lonely">Feeling lonely</option>
                <option value="Proud">Feeling proud</option>
                <option value="Underpriviledged">
                  Feeling underpriviledged
                </option>
                <option value="Weak">Feeling weak</option>
                <option value="Upset">Feeling upset</option>
                <option value="Danger">In danger</option>
                <option value="Lost-hope">Lost Hope</option>
                <option value="Lack-of-faith">Lack of faith</option>
                <option value="Courage">Need courage</option>
                <option value="Not-appreciated">Not Appreciated</option>
                <option value="Direction">Need direction</option>
                <option value="Overwhelmed-with-hardships">
                  Overwhelmed with harships
                </option>
                <option value="Love-and-tranquility">
                  Seeking love n tranquility
                </option>
                <option value="Seeking-peace">Seaking peace</option>
                <option value="Seeking-patience">Seaking patience</option>
                <option value="Stay-steadfast">
                  Struggling to stay steadfast
                </option>
                <option value="Hard-on-myself">Too hard on myself</option>
                <option value="Unhappy">Unhappy</option>
                <option value="Wishing-friend">Wishing for a friend</option>
              </select>
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
                  <div className="max-h-96 overflow-y-auto scrollbar-hide p-8 bg-white rounded-xl shadow-xl">
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
  )
}

export default DuaList
