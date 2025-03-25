"use client"
import React,{useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";
import Cookies from "js-cookie"

export default function Home() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); 

  const [loading, setLoading] = useState(true); 

  const router = useRouter();

  useEffect(() => {
    const auth = Cookies.get("auth");

    if (auth) {
      router.replace("/dashboard"); 
    } else {
      setLoading(false)
    }
  }, [router]);

  
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setTimeout(() => {
        Cookies.set("auth", JSON.stringify({ email }), { expires: 1 });
        router.push("/dashboard");
      }, 1000);
    }
  };

  if (loading) {
    return <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</div>;
  }

  return (
    <div className={styles.signin}>
      <Image src="/images/logo.svg" alt="Logo" width={173} height={36} className={styles.logo} />

      <div className={styles.signinLeft}>

        <div className={styles.signinImage}>
          <Image src="/images/signin.png" alt="Signin" width={800} height={350} />
        </div>
      </div>


      <div className={styles.signinRight}>

          <h1 className={styles.welcome}>Welcome!</h1>
          <p>Enter details to login.</p>
          
          <form onSubmit={handleSubmit} className={styles.signinForm}>

            <div className={styles.emailWrapper}>
              <input 
              type="text" 
              placeholder="Email"             
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? styles.inputError : ""}/>

              {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </div>

            <div>
              <div className={styles.inputWrapper}>
                <input 
                type={showPassword ? "text" : "password"}
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? styles.inputError : ""}/>

                <span
                  className={styles.showPassword}
                  onClick={() => setShowPassword((prev) => !prev)} 
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </span>
              </div>

              {errors.password && <p className={styles.errorText}>{errors.password}</p>}


            </div>

            <p style={{fontSize: "12px", color: "#39CDCC", fontWeight: "600", cursor: "pointer"}}>FORGOT PASSWORD?</p>

            <button type="submit">LOG IN</button>
          </form>
        
      </div>
    </div>
  );
}
