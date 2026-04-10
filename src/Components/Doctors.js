import React from "react";

const doctors = [
  {
    name: "Dr. Anjali Verma",
    image: "/drAmitYadav.png",
   
  },
  {
    name: "Dr. Rajeev Mehra",
    image: "/drAnuragSharma.png",

  },
  {
    name: "Dr. Priya Sharma",
    image: "/drShreyaRathore.png",

  },
];

const Doctors = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h2 className="text-3xl font-bold font-montserrat mb-8 text-green-800 text-center">
        Meet Our Doctors
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 border"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-300"
            />
            <div className="text-xl font-semibold text-green-900 font-montserrat">
              {doc.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;