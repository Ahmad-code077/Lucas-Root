import { useState } from 'react';
import formImage from '../assets/FormImages/formimage.svg';

const Form = () => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData);
    console.log(dataObj);
    setText('');
  };
  return (
    <section className='mt-12 max-w-[90vw] mx-auto lg:mt-20 2xl:max-w-[1600px] 2xl:mx-auto'>
      <main className='max-h-[500px] relative text-center'>
        <div className='h-[300px] sm:h-full w-full relative'>
          <img
            src={formImage}
            alt='Form background image'
            className='object-cover h-full w-full'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-[#389EAD] opacity-50'></div>
        </div>
        <main className='absolute flex items-start justify-start text-white top-[50px] left-3 sm:top-2 md:top-[50px] lg:top-20 xl:left-28 lg:left-28'>
          <div className='flex items-start justify-center flex-col gap-1 lg:gap-5 min-[450px]:max-w-[50%] md:max-w-[65%] text-start ml-2'>
            <h1 className='uppercase text-sm tracking-[12px] lg:text-xl'>
              lorem ipsum
            </h1>
            <span className='text-lg md:text-3xl lg:text-4xl font-Abril'>
              AVAILABLE TO SPEAK
            </span>
            <h2 className='text-left font-Roboto'>
              Let’s make it an unforgettable and valuable experience for you and
              your audience.
            </h2>
            <form className='text-left' onSubmit={handleSubmit}>
              <input
                type='email'
                className='bg-[#ECF8F9] rounded-[5px] w-56 sm:w-96 text-[#202020] px-2 py-1'
                placeholder='Email Address'
                value={text}
                name='email'
                onChange={(e) => setText(e.target.value)}
              />
              <button className='mt-2 border-2 rounded-[5px] border-[#389EAD] py-1 px-4 sm:px-9 hover:bg-[#ECF8F9] hover:text-black ease-in-out duration-hover:300 hover:shadow-custom-light font-Roboto'>
                sign up and get started
              </button>
            </form>
          </div>
        </main>
      </main>
    </section>
  );
};

export default Form;
