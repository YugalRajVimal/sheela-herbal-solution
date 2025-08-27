import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import Footer from "../Components/Footer";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // const [countryCode, setCountryCode] = useState("India (+91)");
  const [phone, setPhone] = useState("");
  // const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!fullName || !email || !phone || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneNo = "+919389528675"; // Remove non-numeric characters
    const fullMessage = `Hello, my name is ${fullName}. You can reach me at ${email} or ${phone}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNo}?text=${encodeURIComponent(
      fullMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = {
    email: "sumitkumar093089@gmail.com",
    phone: "+919389528675",
    location: {
      address1: (
        <>
          <span>Gali no 1, Gram Pavsara, Post Kasganj, Dist. Kasganj</span>
          <span>PIN code: 207123</span>
        </>
      ),
    },
  };

  return (
    <>
      <div className="">
        <section className="py-24 bg-green-500 text-white ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Section (Form) */}
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-white mb-4 font-montserrat">
                    Get in Touch
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight text-white">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-gray-600 font-roboto mb-8">
                    Whether you have a project in mind or just want to explore
                    possibilities, we're here to help. Fill out the form, and
                    one of our team members will get back to you shortly.
                  </p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 font-semibold text-white">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full text-black bg-white border border-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold text-white">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full text-black bg-white border border-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Phone Number
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 py-2 rounded-l-md border border-green-500 border-r-0 bg-white text-black">
                          +91
                        </span>
                        <input
                          type="text"
                          placeholder="12345 67890"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 text-black bg-white border border-green-500 px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    {/* <div>
                      <label className="block mb-2 font-semibold text-white">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company / Brand"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full text-black bg-white border border-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div> */}

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full text-black bg-white border border-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full mt-4 flex items-center justify-center gap-5 border border-white text-white hover:bg-white hover:text-green-500 px-5 py-2 rounded-md transition-all duration-300"
                    >
                      <FiSend size={15} />
                      <span className="font-semibold text-sm">
                        Send Message
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right Section (Contact Info) */}
                <div className="bg-white rounded-lg border border-green-500 shadow-md p-8 md:p-12">
                  <h3 className="text-2xl font-bold font-montserrat mb-8 tracking-tight text-black">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex flex-col items-start">
                      <div className="flex items-start mb-4">
                        <MdOutlineMail className="w-6 h-6 text-black mr-4" />
                        <div>
                          <h4 className="font-semibold font-montserrat mb-1 text-black">
                            Email
                          </h4>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-gray-600 font-roboto hover:text-black transition-colors"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start mb-4">
                        <MdOutlinePhone className="w-6 h-6 text-black mr-4" />
                        <div>
                          <h4 className="font-semibold font-montserrat mb-1 text-black">
                            Phone
                          </h4>
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-gray-600 font-roboto hover:text-black transition-colors"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start mb-4">
                        <MdOutlineLocationOn className="w-6 h-6 text-black mr-4" />
                        <div>
                          <h4 className="font-semibold font-montserrat mb-1 text-black">
                            Locations
                          </h4>
                          <p className="text-gray-600 font-roboto">
                            {contactInfo.location.address1}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold font-montserrat mb-2 text-black">
                        Working Hours
                      </h4>
                      <p className="text-gray-600 font-roboto">
                        Monday to Friday: 8:00 AM - 11:00 PM
                        <br />
                        Saturday: 9:00 AM - 11:00 PM
                        <br />
                        Sunday: 9:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Map Section */}
        <section className="py-24 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight text-black">
                Visit Our <span className="shadow-text">Office</span>
              </h2>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/50 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7058.147649192889!2d78.63799096977539!3d27.8074984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e0181451fb89%3A0xcd5cad09b55055d6!2sKasganj%20Post%20Office!5e0!3m2!1sen!2sin!4v1756056406925!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
