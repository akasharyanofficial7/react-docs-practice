import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/second");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h1>First Page</h1>
      <p>Redirecting to Second Page in 3 seconds...</p>
    </div>
  );
};

export default FirstPage;
