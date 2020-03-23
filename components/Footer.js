const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-400 shadow">
    <div className="container mx-auto flex py-8">
      <div className="w-full mx-auto flex flex-wrap">
        <div className="flex w-full">
          <div className="px-8">
            <h3 className="font-bold font-bold text-gray-100">Resource</h3>
            <ul className="list-reset items-center text-sm pt-3">
              <li>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1"
                  href="https://www.worldometers.info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Worldometers Coronavirus
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1"
                  href="https://coronavirus.jhu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coronavirus COVID-19 Global Cases by the Center for Systems
                  Science and Engineering (CSSE)
                </a>
              </li>
              <br />
              <li>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1"
                  href="https://www.alfieqashwa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The site is created by Alfie Qashwa, Indonesia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
