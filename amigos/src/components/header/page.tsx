import Image from "next/image";
import Link from "next/link";
import {FiSearch} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci';

const Header = () => {
    return (
        <>
        <header className=" bg-[#EEE]">
            <div className=" flex mt-3 justify-around  items-center text-sm">
                <Image src="/assets/Log.png" width={120} height={120} alt="logo" className="  ml-20 mt-2"/>
                <Link href='/marijuana'>MARIJUANA</Link>
                <Link href='/mushroom'>MUSHROOM</Link>
                <div className="searchbar relative">
              <input type="text" className=" w-56 h-6  bg-white rounded-md"/>
                    <FiSearch className=" text-orange-500 absolute top-1 right-3   "/>
                </div>
                <div className="flex">
                <div className=" bg-black text-white flex h-6 px-5 items-center rounded-md  justify-center">
                <CiUser />
                <Link href="/signin" className="ml-1 ">Sign in</Link>
                </div>
                    <div className=" bg-orange-500 w-5 h-5  text-white mx-2 rounded-md flex justify-center items-center">
                     <AiOutlineHeart/>
                    </div>
                    <div  className="bg-orange-500 w-5 h-5 text-white rounded-md flex justify-center items-center ">
                    <BsCart2/>
                    </div>
</div>



            </div>
        </header>

        </>
     );
}

export default Header;