import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.item}>
        <Link href='/' passHref >
          <HomeIcon className={styles.navIcon} />
        </Link>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default Navbar;
