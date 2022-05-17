import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-16 fixed bg-emerald-700 w-full text-white z-50">
      <div className="flex justify-center items-center h-full px-4 md:px-6 gap-x-3">
        <Image src="/shopifylogo.png" width={35} height={35} />
        <span className="text-2xl font-bold">
          Fall 2022 Frontend Intern Challenge
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
