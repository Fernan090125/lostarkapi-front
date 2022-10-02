import styles from '../../styles/Navbar.module.scss';
import Image from 'next/image';
import logo from '../../Assets/Lost_Ark_Logo.png';
import Link from 'next/link';

function Navbar(){
    return(<>
       <nav className={styles.navbar} >
            <div className={styles.subHeader}>
               
            </div>
            <div className={styles.subHeader_main}>
                <div className={styles.img}>
                <Image src={logo} alt="Lost_Ark_Logo" />
                </div>
                <div className={styles.navbar_links}>
                    <ul>
                        <li><Link href="/Home"><a href="">Home</a></Link></li>
                        <li><Link href="/login"><a href="">Mis Builds</a></Link></li>
                        <li><a href="#">Mis Personajes</a></li>
                        <li><a href="#">Mi perfil</a></li>
                    </ul>
                </div>
            </div>
       </nav>
    </>)
}

export default Navbar;