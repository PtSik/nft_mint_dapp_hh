import avatar from '../assets/owner5.jpg';
import github from '../assets/github_icon.png';
import facebook from '../assets/facebook_icon.png';
import twitter from '../assets/twitter_logo.png';
import linkedIn from '../assets/linkedIn_icon.png';
import medium from '../assets/medium_icon.png';

const Hero = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <h1 className="text-white text-5xl font-bold text-center">
          A.I Arts <br />
          <span className="text-gradient">NFTs</span>Collection
        </h1>

        <p className="text-white font-semibold text-sm mt-3">Mint and collect the hottest NFTs around</p>

        <button
          className="shadow-xl shadoww-black text-white bg-[#e32970] 
                hover:bg-[#bd255f] p-2 rounded-full
                 cursor-pointer my-4"
        >
          Mint Now
        </button>

        <a
          className="flex justify-center space-x-2 items-center bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          href="https://github.com/PtSik"
          target="_blank "
        >
          <img className="w-11 h-11 object-contain rounded-full" src={avatar} alt="Avatar" />
          <div className="flex flex-col text-white text-sm">
            <span>0x62...12956 </span>
            <span className="text-[#e32970]">PtSik</span>
          </div>
        </a>

        <p className="text-white text-sm font-medium text-center">
          Hubert "CryptoOgr" Kuźniar rozpoczął swoją karierę jako analityk giełdowy, odnosząc wieloletnie sukcesy w tej
          dziedzinie. <br /> Przez lata zdobył głęboką wiedzę w analizie rynków finansowych, a obecnie specjalizuje się
          w technologii blockchain, <br /> łącząc swoje umiejętności analityczne z nowoczesnymi technologiami.
        </p>

        <ul className="flex flex-row justify-center space-x-2 items-center my-4">
          <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
            <img className="w-7 h-7" src={github} alt="Github" />
          </a>
          <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
            <img className="w-7 h-7" src={facebook} alt="facebook" />
          </a>
          <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
            <img className="w-7 h-7" src={linkedIn} alt="linkedIn" />
          </a>
          <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
            <img className="w-7 h-7" src={twitter} alt="twitter" />
          </a>
          <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
            <img className="w-7 h-7" src={medium} alt="medium" />
          </a>
        </ul>
        <div className="shadow-xl shadow-black flex justify-center items-center w-10 h-10 rounded-full  bg-white cursor-pointer p-3 ml-4 text-black hover:bg-[#bd255f] hover:text-white transition-all duration-75 delay-100">
          <span className='text-sm font-bold'>99</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
