const Button = ({ text }) => {
  return (
    <button className=' bg-[#50C1CF] rounded-[5px] py-2 px-6 sm:px-9 hover:bg-[#389EAD] ease-in-out duration-300 text-white hover:text-[#ffffff] hover:shadow-custom-light'>
      {text}
    </button>
  );
};
export default Button;
