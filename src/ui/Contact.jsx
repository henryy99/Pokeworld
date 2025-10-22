import { useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.fullname.value);

    const mailtoLink = `mailto:henrynguyen3123@gmail.com?subject=Message from ${encodeURIComponent(
      formRef.current.fullname.value
    )}&body=${encodeURIComponent(
      formRef.current.message.value +
        "\n\nFrom " +
        formRef.current.fullname.value +
        "\n\nFrom " +
        formRef.current.email.value
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contact">
      <div className="flex flex-col w-[90%] mx-auto justify-center items-center gap-15  lg:gap-10  h-[400px]">
        <div className="w-full">
          <h1 className="text-center  text-5xl uppercase font-pixel  text-red-main-100">
            Contact
          </h1>
          <hr className="w-8/9 mx-auto text-red-main-100 font-bold border-b-2" />
        </div>
        <p className="text-xl">
          I would love to hear from you. If you have a question, a job
          opportunity, a project idea, a or just want to connect, feel free to
          reach out to me.
        </p>
        <div className="flex justify-center flex-col items-center gap-2">
          <h4 className="uppercase text-gray-500 tracking-wider font-semibold">
            Contact me
          </h4>
          <a
            href="mailto:Henrynguyen3123@gmail.com"
            className="uppercase text-ascent-green tracking-wider hover:scale-110 transition-all duration-1000"
          >
            Henrynguyen3123@gmail.com
          </a>
          <div className="flex gap-5 text-xl [&>*]:hover:text-red-main-300 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer">
            <a href="https://www.facebook.com/demento.huy/" target="_blank">
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/henryy99/details/featured/1757886570840/single-media-viewer/?profileId=ACoAAFpIeNMBylCkCXOBYKceLuzub5Q8xS09xkE"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/dmt__huy/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/henryy99" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
