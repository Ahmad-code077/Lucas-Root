import Button from './Button';
import helpSectionImage from '../assets/HeroSectionImg/Help.svg';
import hoverImg from '../assets/HeroSectionImg/HoverImg.svg';

const Help = () => {
  return (
    <>
      <main className='flex flex-col lg:flex-row 2xl:max-w-[1600px] 2xl:mx-auto mt-12 max-w-[90vw] mx-auto'>
        <div className='lg:flex-1 lg:order-1 order-2 mt-0 max-[884px]:mt-10 w-full lg:w-auto min-[550px]:hidden lg:block'>
          <img
            src={helpSectionImage}
            alt='Help section image'
            className='object-cover h-50 md:min-w-[400px] w-full h-full'
          />
        </div>

        <div className='lg:flex-1 lg:order-2 order-1 flex flex-col gap-8 xl:max-w-[50vw] 2xl:max-w-[920px] lg:pl-12'>
          <div className='flex flex-col gap-2'>
            <h1 className='uppercase tracking-[12px]'>HOW CAN I</h1>
            <span className='text-[#50C1CF] text-4xl font-Abril'>
              Help You Succeed?
            </span>
          </div>
          <p className='font-Roboto'>
            Lorem ipsum dolor sit amet consectetur. Viverra aliquam id nunc a
            volutpat aliquet sit faucibus. Volutpat donec in libero aliquam
            adipiscing. Tellus odio posuere at tempor sagittis nunc tincidunt.
            Aliquam pellentesque viverra dolor interdum vulputate id elit amet
            vitae. Vestibulum est sollicitudin enim cras sollicitudin.
            Pellentesque pellentesque facilisi urna dictum fames diam sit. Metus
            ac pharetra sed justo euismod ut at ipsum sit. Aenean nulla
            scelerisque sit auctor sit nibh sed amet nunc.
          </p>
          <div className='max-w-52'>
            <Button text={'Get Started'} />
          </div>
        </div>
      </main>
      <main className='relative mt-10 flex items-center justify-center 2xl:max-w-[1600px] 2xl:mx-auto'>
        <div className='relative w-full bg-black h-52 md:h-full overflow-hidden group'>
          <img
            src={hoverImg}
            alt='Hover the image'
            className='w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-150'
            style={{ filter: 'contrast(1.6) brightness(1.2)' }}
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center gap-0 md:gap-2 child'>
            <p className='hidden md:block tracking-normal font-Roboto sm:tracking-[12px] uppercase text-white'>
              lorem ipsum dolor sit
            </p>
            <h1 className='text-sm min-[400px]:text-base font-Abril md:text-3xl text-white flex flex-col'>
              DISCOVER HOW TO DESIGN A STRATEGY THAT{' '}
              <span className='hidden md:block'>
                ACTUALLY SETS YOU UP FOR SUCCESS
              </span>
            </h1>
            <button className='bg-[#50C1CF] rounded-[5px] px-2 py-1 sm:px-9 sm:py-2 hover:bg-[#389EAD] ease-in-out duration-300 text-white hover:text-[#ffffff] hover:shadow-custom-light'>
              Click Here to Book Lucas
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Help;
