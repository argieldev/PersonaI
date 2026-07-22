import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    async function loadWorkspace() {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3000/loadWs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);
    }

    loadWorkspace();
  }, []);

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
}

export default Dashboard;