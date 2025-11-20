import { useState, useEffect } from "react";


export function useUserName() {
  const [name, setName] = useState(() =>{
    return localStorage.getItem("username") || "";
  });

  useEffect(() => {
    if (name.trim() !== "") {
      localStorage.setItem("username", name);
    }
  }, [name]);

  return [name, setName] as const;
}

