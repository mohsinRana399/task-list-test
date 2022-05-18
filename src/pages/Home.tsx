import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/list-tasks");
  }, [navigate]);
  return <p> Redirecting...</p>;
};

export default Home;
