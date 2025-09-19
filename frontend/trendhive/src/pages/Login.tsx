import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import type { RootState, AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, user, token } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleLogin = (data: { email: string; password: string }) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (token && user) {
      navigate("/"); 
    }
  }, [token, user, navigate]);

  return <AuthForm onSubmit={handleLogin} loading={loading} error={error} isLogin={true} />;
};

export default Login;
