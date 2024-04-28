import React from "react";

const Content = () => {
  return (
    <div className="py-20 px-10 md:px-20 lg:px-40 ">
      <div className="p-6 pb-14">
        <h2 className="text-2xl pb-4">
          Welcome to I-Meditate: Your Gateway to Collective Consciousness
        </h2>
        <p>
          At I-Meditate, we believe in the profound potential of collective
          mindfulness to transform not only individual lives but also the world
          around us. Our flagship product, the I-Meditate app, is more than just
          a meditation tool — it's a platform for harnessing the collective
          power of our minds to cultivate inner peace, connection, and positive
          change.
        </p>
      </div>

      <div className="p-6  pb-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-center">
        <div className="p-6 bg-blue-200 content-center rounded-lg hover:shadow-2xl">
          <h2 className="text-2xl pb-2">Meet Our Visionaries</h2>
          <p>
            As the creators of I-Meditate, we are passionate about leveraging
            technology to bring people together in pursuit of well-being and
            inner harmony. With backgrounds in relevant fields, e.g.,
            psychology, technology, meditation, we understand the challenges of
            modern life and the importance of cultivating mindfulness in today's
            fast-paced world. Our vision is to create a global community united
            in purpose and intention, collectively elevating consciousness for
            the greater good.
          </p>
        </div>

        <div className="p-6 bg-blue-200 content-center rounded-lg hover:shadow-2xl">
          <h2 className="text-2xl pb-2">
            Experience the Power of Collective Meditation
          </h2>
          <p>
            I-Meditate is not just another meditation app — it's a movement. Our
            platform allows users to come together virtually and meditate on
            specific topics, concerns, or intentions, amplifying the power of
            their individual practices through collective focus and intention.
            Whether you're seeking stress relief, emotional healing, or
            spiritual growth, I-Meditate offers a diverse range of guided group
            meditations led by experienced facilitators, tailored to address a
            variety of themes and areas of interest.
          </p>
        </div>
      </div>

      <div className="p-6 pb-14">
        <h2 className="text-2xl pb-4">Why Choose I-Meditate</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 text-center">
          <li className="bg-blue-200 p-4 rounded-lg hover:shadow-2xl text-center content-center">
            <h4 className="text-xl pb-2">Community Connection</h4>
            <p>
              Experience the power of shared consciousness as you meditate
              alongside like-minded individuals from around the world, fostering
              a sense of belonging and interconnectedness.
            </p>
          </li>
          <li className="bg-blue-200 p-4 rounded-lg hover:shadow-2xl text-center content-center">
            <h4 className="text-xl pb-2">Customized Experiences</h4>
            <p>
              Choose from a variety of meditation topics and themes tailored to
              your specific needs and interests, ensuring a personalized and
              enriching practice every time.
            </p>
          </li>
          <li className="bg-blue-200 p-4 rounded-lg hover:shadow-2xl text-center content-center">
            <h4 className="text-xl pb-2">Expert Guidance</h4>
            <p>
              Our team of experienced meditation facilitators guides you through
              each session, providing expert insights and support to help you
              deepen your practice and achieve your goals.
            </p>
          </li>
          <li className="bg-blue-200 p-4 rounded-lg hover:shadow-2xl text-center content-center">
            <h4 className="text-xl pb-2">Track Your Progress</h4>
            <p>
              Monitor your meditation journey and track your progress over time,
              gaining insights into your personal growth and transformation.
            </p>
          </li>
        </ul>
      </div>

      <div className="p-6 pb-14">
        <h2 className="text-2xl pb-4">Join Us on the Journey</h2>
        <p>
          Whether you're a seasoned meditator or just beginning your mindfulness
          practice, we invite you to join us on this transformative journey
          towards collective consciousness and inner peace. Together, we can
          create a world where harmony, compassion, and unity prevail — one
          meditation at a time.
        </p>
      </div>
    </div>
  );
};

export default Content;
