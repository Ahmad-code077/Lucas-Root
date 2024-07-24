import { footerLink } from '../data';
const Footer = () => {
  return (
    <footer className='bg-[#389EAD]  2xl:max-w-[1600px] 2xl:mx-auto '>
      <main className='gap-2 flex justify-between h-16 items-center mx-2 sm:mx-20'>
        <div className='flex items-center gap-1 sm:gap-4'>
          {footerLink.map((item) => {
            const { id, image, url } = item;
            return (
              <a key={id} href={url} className='align-middle' target='_'>
                {image}
              </a>
            );
          })}
        </div>
        <p className='font-Roboto text-white md:text-xl lg:text-2xl'>
          © {new Date().getFullYear()} All rights reserved | Privacy Policy
        </p>
      </main>
    </footer>
  );
};
export default Footer;
