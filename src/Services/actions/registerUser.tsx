"use server"
type Inputs = {
    name: string;
    email: string;
    password: any;
  };
export const registerUser = async(userData:Inputs) => {
    
    const res = await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  };
