import ethlogo from '../assets/ethlogo.png';

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer ">
      <div className="w-full flex flex-col justify-between items-center my-4">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center">
          <p className="mx-2 cursor-pointer"> Explore</p>
          <p className="mx-2 cursor-pointer"> Features</p>
          <p className="mx-2 cursor-pointer"> Community</p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <img className="w-8" src={ethlogo} alt="EthLogo" />
          <span className="text-white text-sm">CryptoOgr copyright 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
