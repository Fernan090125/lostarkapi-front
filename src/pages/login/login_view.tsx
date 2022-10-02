import Link from "next/link";
import styles from "../../styles/Login.module.scss";


export default function Login_view() {
  return (
    <div className={styles.Login}>
      <div className={styles.prueba}>
      </div>
      <video src='/videobg.mp4' typeof='video/mp4' autoPlay loop muted></video>
      <div className={styles.card_login}>
        <h1>Gubulos</h1>
        <form method="GET">
          <div className={styles.form_element}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Ingrese su email"
            />
          </div>

          <div className={styles.form_element}>
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className={styles.forgot}>
            <Link href={"/login"}>
              <a>¿Olvidaste tu contraseña?</a>
            </Link>
          </div>
          <button type="submit" className={styles.submit}>
            Ingresar
          </button>
        </form>
      </div>
      
    </div>
  );
}
