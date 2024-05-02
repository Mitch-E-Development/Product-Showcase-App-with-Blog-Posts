import React from "react";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  subject,
  setSubject,
  message,
  setMessage,
  onSubmit,
  error,
}) => {
  
  return (
    <div className="pb-5 pt-20 px-10 md:px-20 xl:px-40 ">
      <div className="p-6 border-4 border-orange-500 content-center rounded-lg hover:shadow-xl hover:shadow-orange-300">
        <div className="grid grid-cols-1 grid-cols-1 xl:grid-cols-2 gap-x-14 gap-y-10">
          <div className="px-6 flex flex-col flex-cols-1 justify-center">
            <h2 className="text-3xl pb-4 text-center">Reach Out to Us</h2>
            <p className="pb-10">
              As the creators of I-Meditate, we are passionate about leveraging
              technology to bring people together in pursuit of well-being and
              inner harmony. As the creators of I-Meditate, we are passionate
              about leveraging technology to bring people together in pursuit of
              well-being and inner harmony.
            </p>
            <ul className="text-lg text-black">
              <li className="py-1"><b>Phone:</b> 02 9999 9999</li>
              <li className="py-1"><b>Street:</b> 15/200 Some Street</li>
              <li className="py-1"><b>City:</b> Wynyard NSW 2000</li>
              <li className="py-1"><b>Country</b> Australia</li>
            </ul>
          </div>
          
          <form
            onSubmit={(e) => onSubmit(e)}
            className="grid grid-cols-1 gap-y-4"
          >
            <div className="formcarry-block">
              <label htmlFor="name" className="text-lg">
                NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Your first and last name"
                className="w-full border border-gray-600"
              />
            </div>

            <div className="formcarry-block">
              <label htmlFor="email" className="text-lg">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="john@doe.com"
                className="w-full border border-gray-600"
              />
            </div>

            <div className="formcarry-block">
              <label htmlFor="name" className="text-lg">
                SUBJECT
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                id="name"
                placeholder="Your message subject"
                className="w-full border border-gray-600"
              />
            </div>

            <div className="formcarry-block">
              <label htmlFor="message" className="text-lg">
                MESSAGE
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Enter your message..."
                className="w-full min-h-[150px] border border-gray-600"
              ></textarea>
            </div>

            {error && <div className="formcarry-block error">{error}</div>}

            <div className="formcarry-block">
              <button
                type="submit"
                className="
                  w-[50%]
                  bg-orange-500 
                  text-white 
                  px-4 
                  py-2 
                  rounded-lg 
                  shadow-lg 
                  text-xl
                  hover:bg-orange-300 
                  hover:text-orange-500 
                  transition 
                  duration-300"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
