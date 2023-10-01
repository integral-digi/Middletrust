"use client"
import Link from "next/link";
import { useState } from "react"

const SignUpForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, if needed
      console.log('Submitted value: ' + inputValue);
    };
    return (
        <div className="w-80 space-y-8 mx-auto py-16">
            <div className="left-0 block pb-8">
                <img src="midicon.svg" alt="logo" className="h-12 w-auto" />
            </div>
            <div className="w-max h-20 relative space-y-4">
                <h2 className="text-gray-600 text-4xl font-black leading-10">Get Started!</h2>
                <p className="text-gray-500 text-base font-book leading-tight">create an account in minutes</p>   
            </div>
            <div className="space-y-4">
                <div className="space-y-4">
                    <div className="w-full space-y-4">
                        <p className="font-secondary text-slate-600 text-sm">Email Address</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded border border-gray-300" id="mobile" type="email" />
                            <img src="mailicon.svg" className="h-4 w-4 absolute right-6 top-4" alt="mail" />
                        </div>
                    </div>                    
                    <div className="w-full space-y-4">
                        <p className="font-secondary text-slate-600 text-sm">Mobile Number</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded border border-gray-300" id="mobile" type="number" />
                            <img src="dialpad.svg" className="h-4 w-4 absolute right-6 top-4" alt="dial" />
                        </div>
                    </div>
                    <div className="w-full space-y-4">
                        <p className="font-secondary text-slate-600 text-sm">Password</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded border border-gray-300" id="password" type="password" />
                            <img src="Eye-open.svg" className="h-4 w-4 absolute right-6 top-4" alt="eye" />
                        </div>    
                    </div>
                    <div className="w-full space-y-4">
                        <p className="font-secondary text-slate-600 text-sm">Confirm Password</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded border border-gray-300" id="password" type="password" />
                            <img src="Eye-open.svg" className="h-4 w-4 absolute right-6 top-4" alt="eye" />
                        </div>    
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="w-full h-12 bg-indigo-500 rounded">
                    <p className="w-max text-white text-center text-base font-secondary justify-center mx-auto">Login</p>
                </button>
                <div className="w-full flex items-center mx-auto justify-center">
                    <p className="text-slate-600 text-center text-base font-primary">Have an account?</p><p className="text-indigo-500 text-base font-primary">&nbsp; Sign in</p>
                </div>
            </div>
            <div className="space-y-8 w-full">
                <div className="flex items-center space-x-1">
                    <hr className="w-1/3 bg-neutral-100" />
                    <p className="text-gray-500 text-sm font-book leading-tight w-1/3">Or Sign up With</p>
                    <hr className="w-1/3 bg-neutral-100" />
                </div>
                <button type="button" className="w-full h-12 relative bg-transparent rounded border border-gray-300">
                    <div className="flex items-center space-x-5 justify-center"> 
                        <img src="GoogleIcon.svg" className="w-6 h-6" alt="google" />
                        <p className="text-gray-600 text-center text-base font-primary leading-tight">
                            Sign up with Google
                        </p>
                    </div>
                </button>
                <button type="button" className="w-full justify-center h-12 relative bg-transparent flex items-center space-x-5 rounded border border-gray-300">
                    <img src="FBicon.svg" className="w-6 h-6" alt="facebook" />
                    <p className="text-gray-600 text-center text-base font-primary leading-tight">
                        Sign up with Facebook
                    </p>
                </button>
            </div>
        </div>
    );
};

export default SignUpForm;