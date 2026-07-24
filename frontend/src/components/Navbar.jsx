function Navbar({ name }) {
  return (
    <>
      <header className="flex items-center justify-between pb-8">
        <div className="flex gap-8">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="48"
              height="48"
            >
              <rect
                x="32"
                y="32"
                width="192"
                height="192"
                rx="34"
                fill="#181818"
              />

              <rect
                x="62"
                y="62"
                width="132"
                height="132"
                rx="18"
                fill="#F5F3EF"
              />

              <path
                d="M128 88L135 121 L168 128 L135 135 L128 168 L121 135 L88 128 L121 121 Z"
                fill="#181818"
              />
            </svg>
          </a>
          <div>
            <h1 className="text-2xl font-semi-light">{`Hello, ${name}!`}</h1>
            <p className="font-light">All important information in one place</p>
          </div>
        </div>

        <nav>
          <ul></ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
