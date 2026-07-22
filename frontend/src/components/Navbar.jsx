import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <>
      <header>
        <a>Logo</a>

        <nav>
          <ul>
            <li>Profile</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;