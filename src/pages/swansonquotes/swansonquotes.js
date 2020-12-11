import { useState, useEffect } from 'react';
import Head from 'next/head';
import swansonQuotes from '@/lib/swansonQuotes';
import { motion } from 'framer-motion';

const SwansonQuote = () => {
  const { quotes } = swansonQuotes();
  const [quote, setQuote] = useState();

  const randomQuote = () => {
    const min = Math.ceil(0);
    const max = Math.floor(quotes.length - 1);
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return quotes[randomNum].text;
  };

  useEffect(() => {
    // setQuote(randomQuote(5));
    setQuote(quotes[6].text);
  }, []);

  const moreSwansonKnowledge = () => {
    setQuote(randomQuote());
  };

  return (
    <>
      <Head>
        <title>Random Ron Swanson Wisdom | lucasb.dev</title>
      </Head>

      <div className="relative flex flex-col min-h-screen p-3 font-light">
        <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 text-center rounded-lg">
          <div className="relative w-full">
            <div className="flex flex-col mb-8 rounded-sm bg-trans md:flex-row md:p-3 bg-trans-bg">
              <button
                onClick={() => moreSwansonKnowledge()}
                className="px-4 py-2 mx-4 my-4 font-bold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:bg-opacity-50"
              >
                More Swanson Knowledge
              </button>
              <div className="py-5 mx-auto prose-sm prose prose-custom sm:prose lg:prose-lg xl:prose-2xl">
                <h3>Ron Swanson Knowledge</h3>
                <motion.div
                  initial="quoteInitial"
                  animate="quoteAnimate"
                  variants={{
                    quoteInitial: {
                      opacity: 0,
                    },
                    quoteAnimate: {
                      opacity: 1,
                    },
                  }}
                >
                  <blockquote>
                    <p className="text-gray-400">{quote}</p>
                  </blockquote>
                </motion.div>
                <div className="w-32 h-40 m-auto">
                  <img className="cursor-pointer" src="/swanson.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwansonQuote;
