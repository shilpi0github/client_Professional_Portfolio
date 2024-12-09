import React from "react";
import { profile } from "../../assets/index";
import Title from "../Layouts/Title";
const Contact = () => {
  const form = React.useRef();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [service, setService] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message || !service) {
      alert("All fields are required");
      return;
    }
    // Your email sending logic here
  }

  return (
    <section id="Contact" className="relative">
      <div className="flex justify-center  items-center">
        <Title
          title="Visit my Contact Section"
          desc="Contact Us"
        /></div>
      <div className="flex flex-col lgl:flex-row">
        <div className="w-full lgl:w-[40%]">
            <img src={profile} alt="" />
        </div>

        <div className="w-full lgl:w-[60%]">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <form
              ref={form}
              name="contact"
              onSubmit={handleSubmit}
              className="w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0"
            >
              <h2 className="text-gray-900 sm:text-4xl text-3xl mb-1 font-medium title-font">
                Get in Touch!
              </h2>
              <p className="leading-relaxed mb-5">
                Use the following form to contact me.
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  className="w-full  bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="service" className="leading-7 text-sm">
                  Reason for Contact
                </label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="software-development">
                    Software Development
                  </option>
                  <option value="software-consulting">
                    Software Consulting
                  </option>
                  <option value="web-design">Web Design</option>
                  <option value="coffee">Invite for a Coffee</option>
                  <option value="event-invitation">Event Invitation</option>
                  <option value="programming-classes">
                    Request Programming Classes
                  </option>
                </select>
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm">
                  Provide more details about your contact
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
