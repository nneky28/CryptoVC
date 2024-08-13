import React, { useState, useContext } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Routes/UserContext";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    walletAddress: "",
    country: "",
    phone: "",
    profilePicture: "",
    companyName: "",
    biography: "",
    projectTitle: "",
    socialMedia: "",
    userType: "startup",
  });
  console.log("formdata outside",formData)

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name',name)
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSignup = (e) => {
    e.preventDefault();
    const { fullName, email, password, ...rest } = formData; 
   console.log("formdata  inside",formData)
  
    if (!fullName || !email || !password) {
      toast.error("All fields are required.");
      return;
    }
  
    const newUser = { 
      fullName, 
      email, 
      password, 
      ...rest
    };
  console.log('new user')
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/SignIn");
    toast.success("Signup successful");
  };
  

  const { fullName, email, password, walletAddress, country, phone, profilePicture, companyName, biography, projectTitle, socialMedia } = formData;
  const values = { fullName, email, password, walletAddress, country, phone, profilePicture, companyName, biography, projectTitle, socialMedia };

  switch (step) {
    case 1:
      return <Form1 
        nextStep={nextStep} 
        handleChange={handleChange} 
        values={values} />;
    case 2:
      return <Form2 
        nextStep={nextStep} 
        prevStep={prevStep} 
        handleChange={handleChange} 
        values={values} 
        handleSignup={handleSignup} />;
    default:
    
      return null;
  }
};

export default SignUp;
