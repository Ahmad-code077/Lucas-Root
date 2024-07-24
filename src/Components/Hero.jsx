import Navbar from '../Components/Navbar';
import heroImage from '../assets/HeroSectionImg/HeroImage.svg';
import PersonImage from '../assets/HeroSectionImg/Person1.svg';
import { SponsorImg } from '../data';
import Button from './Button';
const Hero = () => {
  return (
    <section>
      <main className='relative min-h-[600px]  '>
        <img
          src={heroImage}
          alt='Hero section image'
          className='w-full h-full object-cover absolute top-0 left-0 -z-10 	'
        />
        <Navbar />
        <main className='text-[#FFFFFF] max-w-lg flex flex-col gap-8 items-start sm:absolute sm:right-24 sm:top-48 2xl:mx-auto mx-4 mt-16 2xl:left-[650px]'>
          <h1 className='text-5xl font-Abril'>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Proin orci euismod
            pellentesque etiam et. Varius convallis proin dictum nulla. Cursus
            gravida scelerisque proin pellentesque lectus eros turpis.
          </p>
          <div className='flex gap-7 sm:max-w-96'>
            <Button text={'Button 1'} />
            <button className=' border-2 rounded-[5px] border-[#389EAD] px-4 sm:px-9 hover:bg-[#ECF8F9] hover:text-black  ease-in-out duration-hover:300 hover:shadow-custom-light'>
              Button 2
            </button>
          </div>
        </main>
      </main>
      <div className='flex items-center justify-center bg-[#50C1CF] flex-wrap gap-3 md:gap-8 py-2'>
        {SponsorImg.map((item) => {
          return <img key={item.id} src={item.image} alt='sponsor images' />;
        })}
      </div>

      <main className='flex mx-2 md:mx-8 max-[884px]:flex-wrap  lg:flex-nowrap items-end 2xl:max-w-[1600px] 2xl:mx-auto overflow-hidden lg:items-start'>
        <div className='max-w-[920px] flex flex-col gap-8 px-0 lg:px-16 lg:pt-4'>
          <div className='mt-10 lg:mt-5'>
            <h1 className='uppercase tracking-[12px]'>why hire</h1>
            <span className='text-[#50C1CF] text-4xl font-Abril'>Lucas</span>
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
            <br />
            <br />
            Platea senectus placerat nisi orci. Nisl cras nulla odio scelerisque
            praesent nibh. Convallis sit maecenas etiam consequat viverra
            ultrices faucibus. Faucibus habitasse tellus est et amet malesuada.
            Morbi morbi ac quisque hendrerit risus viverra quam risus id. Morbi
            aliquam id proin integer sed cursus bibendum consequat.
          </p>
          <div className='max-w-52'>
            <Button text={'Get Started'} />
          </div>
        </div>
        <div className='mt-0  max-[884px]:mt-10 w-[884px] lg:w-auto min-[550px]:hidden lg:block'>
          <img
            src={PersonImage}
            alt='Person'
            className='object-cover h-50 md:min-w-[400px] w-full'
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
