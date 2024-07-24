import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { clientsData } from '../data';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const w = window.innerWidth;
  const handleNext = () => {
    if (w > 1080) {
      currentIndex < 1 && setCurrentIndex(currentIndex + 1);
    } else if (w < 400) {
      currentIndex < 6 && setCurrentIndex(currentIndex + 1);
    } else if (w > 400 && w < 550) {
      currentIndex < 5 && setCurrentIndex(currentIndex + 1);
    } else if (w > 550 && w < 670) {
      currentIndex < 4 && setCurrentIndex(currentIndex + 1);
    } else if (w > 670 && w < 900) {
      currentIndex < 3 && setCurrentIndex(currentIndex + 1);
    } else if (w > 900 && w < 1080) {
      currentIndex < 2 && setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className='mt-12 max-w-[90vw] mx-auto lg:mt-20 2xl:max-w-[1600px] 2xl:mx-auto bg-[#202020]'>
      <main className='pt-12 md:pt-20 '>
        <div className='flex flex-col items-center'>
          <h1 className='uppercase text-sm tracking-[12px] lg:text-xl text-center text-white'>
            Testimonials
          </h1>
          <span className='text-lg md:text-3xl lg:text-4xl font-Abril text-center text-[#50C1CF]'>
            See what clients are saying about Lucas
          </span>
        </div>
        {/* client move section */}
        <main className='flex items-center mt-8'>
          <div className='flex flex-col gap-4  mx-2 lg:mx-16'>
            <button
              className='text-[#50C1CF] text-xl md:text-2xl'
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className='text-[#50C1CF] text-xl md:text-2xl'
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
          <div className='relative overflow-hidden w-full px-4 py-9'>
            <div
              className='flex transition-transform duration-500 gap-9'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {clientsData.map((item, index) => {
                const { id, image, ClientName, company, para } = item;
                return (
                  <div
                    key={id}
                    className='bg-white p-4 rounded-lg shadow-lg w-72 flex-none font-Roboto'
                  >
                    <div className='w-28 h-28 border-4 border-[#50C1CF] rounded-full mx-auto mb-4 overflow-hidden'>
                      <img
                        src={image}
                        alt={`${ClientName} image`}
                        className='object-cover w-full h-full'
                      />
                    </div>
                    <h1 className='text-center font-bold'>{ClientName}</h1>
                    <h2 className='text-center text-sm text-[#389EAD]'>
                      {company}
                    </h2>
                    <p className='text-center text-gray-700 mt-2'>{para}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </main>
    </section>
  );
};

export default Clients;
