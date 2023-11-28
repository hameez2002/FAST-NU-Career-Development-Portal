import React from "react";

export const About = () => {
  return (
    <div className=" bg-[#f3f1ec] w-auto mx-auto p-6">
      <h1 className="text-gray-800 text-3xl font-bold mb-6 text-center">
        About Us
      </h1>
      <div className=" bg-[#f3f1ec] rounded-lg overflow-hidden w-auto mx-auto">
        <div className="p-6">
          <div className="text-gray-700">
            <p className="mb-4">
              Welcome to the Career Services and Industrial Liaison Office
              Portal of FAST National University Karachi, your trusted gateway
              to career success! Here, we are passionate about connecting
              talented individuals with their dream careers and empowering
              organizations to find the perfect fit for their teams.
            </p>

            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              Our mission is simple: to bridge the gap between job seekers and
              employers, fostering mutually beneficial connections that lead to
              personal and professional growth. We're committed to helping job
              seekers find meaningful employment opportunities that align with
              their skills, goals, and values.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">How We Help</h2>
            <p>
              Simultaneously, we assist employers in identifying top talent to
              drive their businesses forward. Whether you're taking the first
              step on your career journey or looking to take it to the next
              level, FAST National University Career Services and Industrial
              Liaison Office is here to support you every step of the way.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Partner with Us</h2>
            <p>
              Thank you for choosing us as your partner in career growth. We
              look forward to helping you achieve your aspirations and connect
              you with the opportunities that will shape your future.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Get Started</h2>
            <p>
              Ready to embark on your career journey with us?{" "}
              <span className="text-blue-500">[Sign Up / Log In]</span> today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
