export default function Footer() {
  return (
    <footer
      className="bg-white sticky top-full rounded-lg shadow m-4 dark:bg-gray-800 left-0 right-0 bottom-0 drop-shadow-lg">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <a href="https://raofin.net"
                  className="hover:underline"> Raofin</a>. All Rights Reserved.
    </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://raofin.net" className="mr-4 hover:underline md:mr-6 ">raofin.net</a>
          </li>
          <li>
            <a href="https://github.com/Raofin" className="mr-4 hover:underline md:mr-6">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}