import { Button } from "../utilities/Button";
import Footer from "../utilities/Footer";
import Menu from "../utilities/Menu";
import teamImage from "/images/team.jpg";
import { useState } from "react";

export const AboutUsPage = () => {
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p
          className="text-2m text-primary cursor-pointer flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
        </p>
        {isOpen && <p className="mt-4 text-dark font-light">{answer}</p>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-light font-sans">
      <Menu />
      <header
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-light">
            <h1 className="text-4xl font-bold font-serif">About Us</h1>
          </div>
        </div>
      </header>

      <section className="px-4 py-8 md:py-16 lg:px-32 xl:px-64">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Mission</h2>
          <p className="mt-2 md:mt-4 text-lg text-dark">
            We aim to support and empower individuals with ADHD by providing a
            safe space and understanding community
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Values</h2>
          <p className="mt-2 md:mt-4 text-lg text-dark">
            We believe in inclusivity, empathy, and the power of community. Our
            value guide us in creating a welcoming environment for everyone
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Team</h2>
          <p className="mt-2 md:mt-4 text-lg text-dark">
            Our team is dedicated to providing resources, support, and events
            that cater to the unique needs of those with ADHD.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 md:py-16 md:px-16 lg:px-32 xl:px-64">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Join Our Community</h2>
          <p className="mt-2 md:mt-4 text-lg text-dark">
            Become part of our community and connect with others who understand
            your journey. Toghether, we can achieve more.
          </p>
          <div className="mt-8">
            <Button text="Join Us Now" link="/signup" varian="primary" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-8 md:py-16 md:px-16 lg:px-32 xl:px-64">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-dark">FAQs</h2>
          <div className="mt-8 space-y-4">
            <FAQItem
              question="What is ADHD?"
              answer="ADHD stands for Attention Deficit Hyperactivity Disorder. It is a neurodevelopmental disorder that affects both children and adults, characterized by symptoms of inattention, hyperactivity, and impulsivity."
            />
            <FAQItem
              question="How can I join an ADHD support group?"
              answer="You can join our ADHD support group by registering for our upcoming events. We have regular meetings and activities designed to help individuals with ADHD connect and support each other."
            />
            <FAQItem
              question="What kind of events do you organize?"
              answer="We organize a variety of events including workshops on planning and organization, social activities, mindfulness sessions, and support group meetings. Check our events page for the latest schedule."
            />
            <FAQItem
              question="Are the events free?"
              answer="Some of our events are free, while others may have a small fee to cover costs. Details about event fees can be found on the event registration pages."
            />
            <FAQItem
              question="How can I volunteer or support the ADHD community?"
              answer="We welcome volunteers and supporters! Please contact us through our website or join our events to learn more about how you can get involved."
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8 md:py-16 md:px-16 lg:px-32 xl:px-64">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-dark">
            Contact Us
          </h2>
          <p className="mt-2 md:mt-4 text-lg text-dark">
            If you have any questions or need support, feel free to reach out to
            us at{" "}
            <a
              href="mailto:support@adhdcommunity.com"
              className="text-primary underline"
            >
              support@adhdcommunity.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
