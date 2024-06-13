// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="bg-rose-100 shadow-md">
//       <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
//         <Link to="/">
//           <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap">
//             <span className=" text-red-500 ">Campus</span>
//             <span className="text-gray-900">Connect</span>
//           </h1>
//         </Link>
//         <form className="bg-red-200 p-2 rounded-md flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent focus:outline-none w-24 sm:w-64"
//           />
//           <FaSearch className="text-red-500" alt="Search icon" />
//         </form>
//         <ul className="flex gap-4">
//           <Link to="/">
//             <li className=" text-gray-900 hover:underline">Home</li>
//           </Link>
//           <Link to="/about">
//             <li className=" text-gray-900 hover:underline">About</li>
//           </Link>
//           <Link to="/sign-in">
//             <li className=" text-gray-900 hover:underline">Sign in</li>
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// }

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-teal-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <div className="flex items-center">
            <img
              src="\src\assets\logo.webp"
              style={{ borderRadius: "50%" }}
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap">
              <span className="text-red-500">Campus</span>
              <span className="text-gray-900">Connect</span>
            </h1>
          </div>
        </Link>
        <form className="bg-white p-2 rounded-md flex items-center shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-red-500 ml-2" alt="Search icon" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-gray-900 hover:text-red-500 transition-colors duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-900 hover:text-red-500 transition-colors duration-300">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-gray-900 hover:text-red-500 transition-colors duration-300">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
