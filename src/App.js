import { useState } from "react";
import "./App.css";
import ContentCreatorFlow from "./components/ContentCreatorFlow";

function App() {
  const [loginToggle, setLoginToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === "contentCreator") {
      setFormSubmitted(true);
    }
  };
  const handleRegister = () => {
    setLoginToggle(!loginToggle);
  };


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="App flex min-h-screen">
      <div className="flex flex-col justify-center w-full md:w-2/5 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {formSubmitted ? "Content Creator Onboarding" : "Choose one"}
          </h2>
        </div>

        {
          selectedOption === "contentCreator" && <></>
        }
        {
          !formSubmitted && <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 text-center gap-2">
                <div
                  className={`border py-4 rounded-md cursor-pointer ${selectedOption === 'contentCreator' ? 'border-slate-400' : 'border-slate-200'
                    }`}
                  onClick={() => handleOptionClick('contentCreator')}
                >
                  <span>Content Creator</span>
                </div>
                <div
                  className={`border py-4 rounded-md cursor-pointer ${selectedOption === 'brand' ? 'border-slate-400' : 'border-slate-200'
                    }`}
                  onClick={() => handleOptionClick('brand')}
                >
                  <span>Brand</span>
                </div>
              </div>
              {loginToggle && (
                <>
                  {/* <div>
                  <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">Select Role</label>
                  <div className="mt-2">
                    <select id="role" name="role" className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6">
                      <option value="contentcreator">Content Creator </option>
                      <option value="brand">Brand</option>
                    </select>
                  </div>
                </div> */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Next
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-gray-500">
              <a
                onClick={handleRegister}
                className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500"
              >
                {!loginToggle ? "Login" : "Back"}
              </a>
            </p>
          </div>
        }
        {
          formSubmitted && <ContentCreatorFlow />
        }
      </div>
      <div
        className="hidden md:flex w-full md:w-3/5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i0.wp.com/blog.comunitive.com/wp-content/uploads/2021/09/influencer_4-copiar.jpg?fit=2000%2C1022&ssl=1')",
        }}
      ></div>
    </div>
  );
}

export default App;
