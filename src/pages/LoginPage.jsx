
import { useState } from "react";

import Servicesapi from "../services/Servicesapi";
import Input from "../compoents/Input";
import Button from "../compoents/Button";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { useNavigate } from "react-router-dom";




export default function LoginPage({onLogin}) {
  const [email, setEmail] = useState("Teacher@gmail.com");
  const [password, setPassword] = useState("Teacher@123");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Servicesapi.login({ email, password });
      onLogin();
      navigate("/students");
    } catch {console.error("error");
    }
  };

  return (
    
    <div className="h-screen flex items-center justify-center bg-cyan-900">
      <form 
        onSubmit={handleSubmit}
        className="bg-slate-50 p-6 rounded-xl  shadow-2xl w-96">
        <h1 className="text-xl font-bold mb-5 text-red-600">Teacher Login</h1>
        <div className="flex items-center border rounded-md px-3 py-2 mb-4 bg-white">
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full outline-none bg-transparent"
      />
      <MdAlternateEmail className="text-gray-500 text-xl mr-2" />
    </div>
        
         <div className="flex items-center border rounded-md px-3 py-2 mb-4 bg-white">
      
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full outline-none bg-transparent"
      />
      <TbPasswordUser className="text-gray-500 text-xl mr-2" />
    </div>  
        <Button label="Sign In" type="submit" />
      </form>
    </div>
  );
}
