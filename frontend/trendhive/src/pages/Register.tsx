import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import type { RootState, AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleRegister = (data: { email: string; password: string }) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (user) {
      navigate("/login"); 
    }
  }, [user, navigate]);

  return <AuthForm onSubmit={handleRegister} loading={loading} error={error} isLogin={false} />;
};

export default Register;
