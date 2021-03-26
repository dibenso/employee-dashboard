import { useEffect, useState } from "react";
import Error from "./Error";
import "tailwindcss/tailwind.css";
import "./App.css";

async function fetchEmployees({ success, fail }) {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    success(data);
  } catch(error) {
    fail(error);
  }
}

function App() {
  const [employees, setSemployees] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!employees) {
      setFetching(true);
      fetchEmployees({
        success: data => {
          setSemployees(data);
          setFetching(false);
          setError(null);
        },
        fail: () => {
          setError({ message: "Unable to fetch employees" });
          setFetching(false);
        }
      });
    }
  }, [employees]);

  return (
    <div className="App">
      <h1>Employee Dashboard</h1>
      {error && <Error error={error} />}
      {fetching && "fetching..."}
    </div>
  );
}

export default App;
