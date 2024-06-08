import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-red-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap">
            <span className= " text-red-500 ">Campus</span>
            <span className="text-gray-900">Connect</span>
          </h1>
        </Link>
        <form className="bg-red-200 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-red-500" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className=" text-gray-900 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className=" text-gray-900 hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-gray-900 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
