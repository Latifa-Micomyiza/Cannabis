import Image from "next/image";
import Link from "next/link";
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';

const Header = () => {
  return (
    <header className="bg-[#EEE] p-4 md:flex md:justify-between md:items-center">
      <div className="flex items-center space-x-4">
        <Link href='/'>
          <Image src="/assets/Log.png" width={120} height={120} alt="logo" />
        </Link>
        <Link href='/marijuana' className="hidden md:inline">MARIJUANA</Link>
        <Link href='/mushroom' className="hidden md:inline">MUSHROOM</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="searchbar relative">
          <input type="text" className="w-36 md:w-56 h-8 bg-white rounded-md" />
          <FiSearch className="text-orange-500 absolute top-1 right-3" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-black text-white flex h-8 px-4 items-center rounded-md">
            <CiUser />
            <Link href="/signin" className="ml-2">Sign in</Link>
          </div>
          <div className="bg-orange-500 w-8 h-8 text-white rounded-full flex justify-center items-center">
            <AiOutlineHeart />
          </div>
          <div className="bg-orange-500 w-8 h-8 text-white rounded-full flex justify-center items-center">
            <BsCart2 />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
