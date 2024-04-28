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
    <div className="pb-5 pt-20 px-10 md:px-20 lg:px-40 ">
      <div className="p-6 bg-blue-200 content-center rounded-lg hover:shadow-2xl">
        <div className="grid grid-cols-1 grid-cols-1 xl:grid-cols-2 gap-x-14 gap-y-10">
          <div>
            <h2 className="text-2xl pb-2">Reach Out to Us</h2>
            <p className="pb-6">
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
                className="w-full"
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
                className="w-full"
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
                className="w-full"
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
                className="w-full min-h-[150px]"
              ></textarea>
            </div>

            {error && <div className="formcarry-block error">{error}</div>}

            <div className="formcarry-block">
              <button
                type="submit"
                className="
                  w-[50%]
                  bg-blue-500 
                  text-white 
                  px-4 
                  py-2 
                  rounded-lg 
                  shadow-lg 
                  text-xl
                  hover:bg-white 
                  hover:text-blue-500 
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
