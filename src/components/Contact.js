import {
  FaGithub,
  FaLinkedinIn,
  FaMailBulk,
  FaFileDownload,
} from "react-icons/fa";
import { useState, useRef } from "react";
import axios from "axios";
import main from "../data/main.json";

const Contact = () => {
  const ref = useRef(null);
  const [isMailSent, setIsMailSent] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    let value = e.target.value;
    let field = e.target.name;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const formD = new FormData(ref.current);

    await axios({
      method: "post",
      url: process.env.REACT_APP_PHP_MAIL_URL,
      headers: { "Content-type": "application/json" },
      data: formD,
    })
      .then((res) => {
        console.log(res, "res");
        if (res.status === 200) {
          setError(false);
          setIsMailSent(true);
        } else {
          setError(true);
          setIsMailSent(false);
        }
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };
  return (
    <section
      id="contact"
      className="flex flex-col max-w-[1400px] justify-center items-center mx-auto overflow-auto bg-green-50 mt-10 p-10 sm:scroll-mt-36  lg:scroll-mt-24  dark:bg-slate-600 dark:text-slate-100 "
    >
      <h1 id="cont" className="text-3xl font-bold p-2">Get In Touch</h1>
      <p className="text-2xl font-extralight pb-2 tracking-widest">
        Ways to connect with me
      </p>

      <div className="flex flex-col lg:flex-row w-full overflow-auto gap-x-10 gap-y-10 mx-auto justify-around">
        {/* contact info */}
        <div className="max-w-[400px] p-10 justify-center items-center pt-10 ">
          <ul className="space-y-5">
            <li className="text-xl font-light">
              <a href={main.github} target="_blank" rel="noreferrer" className="flex gap-x-3 items-center">
                <FaGithub /> Follow on Github
              </a>
            </li>
            <li className="text-xl font-light">
              <a href={main.linkedin} target="_blank" rel="noreferrer" className="flex gap-x-3 items-center">
                <FaLinkedinIn /> Follow on LinkedIn
              </a>
            </li>
  
            <hr />
            <li className="flex items-center gap-x-3 text-xl font-light">
             <a href={main.cv} download className="flex gap-x-3 items-center" rel="noreferrer"> CV:
                <FaFileDownload />
              </a>
            </li>

            <li className="flex items-center gap-x-3 text-xl font-light">
              <a href={`mailto:${main.email}`} className="flex gap-x-3">
                <FaMailBulk /> {main.email}
              </a>
            </li>
          </ul>
        </div>

        {/* contact form */}
        <div className="max-w-[500px] p-5 ">
          <p className="p-5 text-l text-gray-700 font-light">
            If you want to reach me out here please fill out the form below, I
            will get back to you soon.
          </p>
          <form
            onSubmit={submitHandle}
            ref={ref}
            className="w-full flex flex-col gap-y-8"
          >
            <input
              className="p-3 rounded-xl hover:bg-pink-50"
              name="name"
              type="text"
              placeholder="Name"
              value={formData?.name || ""}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              className="p-3 rounded-xl hover:bg-pink-50"
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData?.subject || ""}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              className="p-3 rounded-xl hover:bg-pink-50"
              name="email"
              type="email"
              placeholder="Email"
              value={formData?.email || ""}
              onChange={(e) => handleChange(e)}
              required
            />
            <textarea
              className="p-3 rounded-xl hover:bg-pink-50"
              row="20"
              name="message"
              type="textArea"
              aria-multiline
              placeholder="Your message"
              value={formData?.message || ""}
              onChange={(e) => handleChange(e)}
              required
            />
            <p
              className={
                isMailSent || error
                  ? "text-center text-red-700 font-bold"
                  : "hidden"
              }
            >
              {isMailSent ? "Your message was sent!" : error}
            </p>

            <button className="w-[180px] self-center px-3 py-2 border-2 border-pink-500 rounded-lg text-lg font-semibold hover:text-white hover:bg-pink-500 transition-all">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
