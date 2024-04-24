"use server";
export const loginUser = async (data: { email: string; password: any }) => {
  const res = await fetch("http://localhost:5000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();
  return userInfo;
};
