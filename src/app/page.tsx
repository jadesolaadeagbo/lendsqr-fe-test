import Image from "next/image";
import styles from "./page.module.scss";
import Form from "next/form"

export default function Home() {
  return (
    <div className={styles.signin}>
      <Image src="/images/logo.svg" alt="Logo" width={173} height={36} className={styles.logo} />

      <div className={styles.signinLeft}>

        <div className={styles.signinImage}>
          <img src="/images/signin.png" alt="Signin" style={{ width: "100%", height: "350px" }} />
        </div>
      </div>


      <div className={styles.signinRight}>

          <h1 className={styles.welcome}>Welcome!</h1>
          <p>Enter details to login.</p>
          
          <Form action="/" className={styles.signinForm}>
            <input type="text" placeholder="Email"/>
            <div className={styles.inputWrapper}>
              <input type="password" placeholder="Password" />
              <span className={styles.showPassword}>SHOW</span>
            </div>

            <p style={{fontSize: "12px", color: "#39CDCC", fontWeight: "600", cursor: "pointer"}}>FORGOT PASSWORD?</p>

            <button>LOG IN</button>
          </Form>
        
      </div>
    </div>
  );
}
