"use client"

import axios from "axios";
import { useState } from "react";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/user", {
                username,
                password
            });
            console.log("✅ Success:", res.data);
        } catch (err) {
            console.err("❌ Axios Error:", err.response?.data || err.message);
        }
        
    };

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">Sign up</div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput
                            onChange={(e) => setUsername(e.target.value)}
                            label="Username"
                            placeholder="example@gmail.com"
                        />
                        <LabelledInput
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            type="password"
                            placeholder="123456"
                        />
                        <button
                            type="button"
                            className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                            onClick={handleSignup}
                        >
                            Sign in
                        </button>
                        {message && <p className="text-center text-sm pt-2">{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

function LabelledInput({ label, placeholder, type = "text", onChange }) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input
                onChange={onChange}
                type={type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
