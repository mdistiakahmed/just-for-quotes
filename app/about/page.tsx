import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-4">
          Welcome to justforquotes.com! We are dedicated to bringing you the
          best motivational quotes, jokes, memes, and riddles. Our mission is to
          inspire, entertain, and bring a smile to your face every day.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is simple: to provide a platform where people can find
          daily inspiration, humor, and thought-provoking content. Whether you
          are looking for a boost of motivation, a good laugh, or a fun riddle
          to solve, we have something for everyone.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <p className="mb-4">
          At justforquotes.com, you will find a wide variety of content:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Motivational Quotes: Uplifting and inspiring quotes to keep you
            motivated throughout the day.
          </li>
          <li>
            Jokes: A collection of funny jokes to bring a smile to your face.
          </li>
          <li>Memes: Hilarious memes that are sure to entertain.</li>
          <li>Riddles: Challenging and fun riddles to test your mind.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          justforquotes.com was founded with the idea of creating a space where
          people can come to find daily joy and inspiration. We believe in the
          power of words and laughter to uplift and connect people. Since our
          launch, we have grown into a community of like-minded individuals who
          share a love for quotes, jokes, memes, and riddles.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-4">
          We invite you to join our community by subscribing to our newsletter,
          following us on social media, and sharing your favorite quotes, jokes,
          memes, and riddles with your friends and family. Together, we can
          spread positivity and laughter far and wide.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions, suggestions, or feedback, please feel free
          to contact us at <strong>justforquotes@gmail.com</strong> . We would
          love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
