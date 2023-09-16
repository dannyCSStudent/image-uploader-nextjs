import { styles } from "../app/styles";
import { logo } from '../public/assets';
import Image from "next/image";

const Navbar = () => {

      return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >
                                    <Image 
                                      src={logo} 
                                      alt='logo' 
                                      className='w-9 h-9 object-contain' 
                                    />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        
                        <span className='sm:block hidden'>Image &nbsp; </span>
                         Uploader &nbsp; 
                    </p>

          </div>

        </nav>
    )
}

export default Navbar;