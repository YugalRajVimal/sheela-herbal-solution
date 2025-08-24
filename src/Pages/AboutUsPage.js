import React from "react";

import { FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="">
      <section className="py-24 bg-black-theme-rich text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight">
                About Us{" "}
                <span className="relative inline-block ml-1">
                  <span className="text-danger gold-glow text-3xl relative z-10">
                    <FaHeart />
                  </span>
                  <span className="absolute -inset-0.5 blur-[6px] bg-danger/40 rounded-full animate-pulse z-0"></span>
                  <span className="absolute -inset-1 blur-[12px] bg-danger/20 rounded-full animate-pulse z-0 delay-75"></span>
                </span>
              </h3>

              <p className="text-gray-light font-roboto mb-6 text-lg italic">
                Welcome to Sheela Herbal Company — Your Natural Partner in
                Healing.
              </p>

              <p className="text-gray-light font-roboto mb-4">
                Founded with the vision of bringing authentic Ayurvedic remedies
                to every home, Sheela Herbal Company is dedicated to providing
                safe, natural, and effective solutions for skin and wellness
                challenges.
              </p>

              <p className="text-gray-light font-roboto mb-4">
                Our flagship products —{" "}
                <span className="font-semibold">Psoriasis Oil</span>
                and <span className="font-semibold">Psoriasis Capsules</span> —
                are trusted by people across India for their ability to soothe,
                heal, and restore balance using the power of Ayurveda.
              </p>

              <p className="text-gray-light font-roboto mb-4">
                Based in India, we follow time-tested herbal traditions combined
                with modern quality standards to ensure every product we deliver
                is pure, effective, and reliable.
              </p>

              <p className="text-gray-light font-roboto mb-4">
                At Sheela Herbal, we believe healing should come from nature —
                and our mission is to make natural wellness accessible to
                everyone.
              </p>

              <p className="text-gray-light font-roboto italic text-right">
                Healing through Ayurveda, the natural way.
              </p>
            </div>

            <div className="relative aspect-square md:aspect-auto md:h-[600px]">
              <img
                src=""
                alt="Sheela Herbal Company"
                className="w-full h-full object-cover rounded-lg shadow-text border"
              />

              <div className="absolute text-white -bottom-20 md:-bottom-4 -right-4 w-36 h-36 md:w-56 md:h-56 bg-neutral-900 border border-danger/40 rounded-lg p-4 md:p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold font-montserrat text-danger shadow-text">
                    10+
                  </p>

                  <p className="text-xs md:text-base text-gray-light font-roboto mt-1 md:mt-2">
                    Years of Herbal Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black-theme-poor text-black relative overflow-hidden">
        <div className="absolute inset-0  z-0"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-danger/70 to-transparent animate-gold-pulse"></div>
        </div>

        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-danger/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-danger/5 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 tracking-tight">
            Meet Our <span className="shadow-text">Founder</span>
          </h2>
          <p className="text-gray-light font-roboto max-w-2xl mx-auto">
            The visionary behind Sheela Herbal Company, dedicated to promoting
            natural healing through Ayurveda and creating effective remedies for
            skin wellness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-16 max-w-lg mx-auto">
            {/** CEO profile */}
            <div className="relative z-10 group opacity-100 transform-none">
              <div className="relative overflow-hidden h-full">
                <div className="relative  overflow-hidden">
                  <img
                    src=""
                    alt=""
                    className=" h-1/2 aspect-[1/1] rounded-full object-cover transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 p-8 opacity-0 md:group-hover:opacity-100">
                    <div className="max-w-xs">
                      <h3 className="text-black-theme-pure text-2xl font-bold font-montserrat mb-1">
                        Sumit Kumar
                      </h3>

                      <span className="text-danger text-lg font-medium tracking-wide font-montserrat mb-4 inline-block">
                        CEO
                      </span>

                      <p className="text-danger font-medium text-center mb-1 font-montserrat">
                        Founder. Visionary Leader. Advocate of Natural Healing.
                      </p>

                      <p className="text-black-theme-pure font-roboto text-center">
                        With a passion for Ayurveda and natural wellness, the
                        CEO of Sheela Herbal Company has dedicated years to
                        developing trusted remedies for skin health. Under their
                        leadership, the company focuses on safe, herbal
                        solutions like Psoriasis Oil and Capsules, helping
                        people restore confidence and well-being through
                        nature’s power.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <div className="text-danger text-xl font-medium tracking-wide font-montserrat">
                    Sumit Kumar
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="relative z-10 group opacity-100 transform-none">
              <div className="relative overflow-hidden h-full">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={Nihal}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 p-8 opacity-0 md:group-hover:opacity-100">
                    <div className="max-w-xs">
                      <h3 className="text-black-theme-pure text-2xl font-bold font-montserrat mb-1">
                        Nihal Singh
                      </h3>

                      <span className="text-danger text-lg font-medium tracking-wide font-montserrat mb-4 inline-block">
                        CTO
                      </span>

                      <p className="text-danger font-medium text-center mb-1 font-montserrat">
                        Tech visionary. Systems thinker. Founding builder.
                      </p>

                      <p className="text-black-theme-pure font-roboto text-center">
                        An IITian with deep expertise in generative AI, Nihal
                        leads our entire technology vertical — building scalable
                        systems and pushing the boundaries of what's possible.
                        Off the clock, you'll likely find him deep in an FPS
                        match, as precise with strategy as he is with code.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <div className="text-danger text-lg font-medium tracking-wide font-montserrat">
                    Tech-smith
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="mt-20 text-center">
            <Link to="/contact" className="font-montserrat">
              <Button>
                Join Our Team <IoIosArrowForward />
              </Button>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
