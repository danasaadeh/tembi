import React from "react";

const WhyTermbi: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center px-6">
      {/* Content Box */}
      <div className="relative w-full max-w-5xl bg-[url('src/assets/images/about/about.svg')] bg-cover bg-center rounded-2xl shadow-md px-8 py-16 text-center">
        {/* Decorative Circles */}

        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          <span className="text-red-500 font-bold">Why </span>
          <span className="text-gray-900">
            term<span className="text-red-500">bi</span>
          </span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
          Termbi’s booking tool allows guests to check table availability in
          real time and then book a table with just a few clicks. Even outside
          of your business hours. <br />
          <br />
          <span className="font-semibold">Your effort:</span> Low.{" "}
          <span className="font-semibold">Your benefit:</span> Up to 30% more
          bookings. <br />
          <br />
          With Termbi, you are instantly listed on over 100 national and
          international platforms.
        </p>
      </div>

      {/* Logos Section */}
      <div className="mt-16 text-center">
        <h3 className="text-gray-800 text-xl md:text-2xl mb-10">
          restaurants already trust in{" "}
          <span className="text-gray-900 font-semibold">
            term<span className="text-red-500">bi</span>
          </span>
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          <img
            src="src/assets/images/about/Taverna.svg"
            alt="Taverna"
            className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-full bg-white shadow-sm"
          />
          <img
            src="src/assets/images/about/melty-way.svg"
            alt="Melty Way"
            className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-full bg-white shadow-sm"
          />
          <img
            src="src/assets/images/about/good-test.svg"
            alt="Good Taste"
            className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-full bg-white shadow-sm"
          />
          <img
            src="src/assets/images/about/sparro.svg"
            alt="Sbarro"
            className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-full bg-white shadow-sm"
          />
          <img
            src="src/assets/images/about/aldenaite.svg"
            alt="Ardenaire"
            className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-full bg-white shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyTermbi;
