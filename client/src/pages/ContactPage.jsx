import "../styles/ContactPage.css";
import Contact from "../assets/images/contact.png";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [inputvalue, setInputvalue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  const sentClientdata = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = inputvalue;

    if (name == "" || email == "" || phone == "" || !email.includes("@")) {
      toast.error("Please Fill Out Required Fields!!");
    } else {
      const response = await fetch(
        "https://portfolio-zg5e.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        },
      );

      const data = await response.json();
      console.log(data);

      if (response.status == 201) {
        toast.success("Message Sent Successfully!!");

        setInputvalue({
          ...inputvalue,
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xxl-6">
              <div className="card1">
                <div className="row border-line">
                  <img src={Contact} alt="Contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xxl-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6 className="text-uppercase text-center">
                      Contact With{" "}
                      <a
                        className="text-decoration-none"
                        href="https://www.linkedin.com/in/prinsipekumar/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin
                          color="#0077b5"
                          size={30}
                          className="ms-2 linkedin"
                        />
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/prinsipekumar"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub
                          color="#181717"
                          size={30}
                          className="ms-2 github"
                        />
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://www.facebook.com/prinsipekumar"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FaFacebook
                          color="#1877f2"
                          size={30}
                          className="ms-2 facebook"
                        />
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://x.com/prinsipekumar"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FaXTwitter
                          color="#181717"
                          size={30}
                          className="ms-2 twitter"
                        />
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://www.instagram.com/prinsipekumar/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FaInstagram
                          color="#e1306c"
                          size={30}
                          className="ms-2 instagram"
                        />
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://t.me/prinsipekumar"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <FaTelegramPlane
                          color="#0088cc"
                          size={30}
                          className="ms-2 telegram"
                        />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                        className="mb-3"
                        value={inputvalue.name}
                        onChange={getvalue}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        required
                        className="mb-3"
                        value={inputvalue.email}
                        onChange={getvalue}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="tel"
                        name="phone"
                        pattern="^\+?[0-9]{7,15}$"
                        title="Include a leading + code."
                        placeholder="Enter Your Mobile Number"
                        required
                        className="mb-3"
                        value={inputvalue.phone}
                        onChange={getvalue}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Write Your Message"
                        className="mb-3"
                        value={inputvalue.message}
                        onChange={getvalue}
                      />
                    </div>
                    <div className="row px-3">
                      <button
                        className="button"
                        type="submit"
                        onClick={sentClientdata}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
