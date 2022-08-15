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
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
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
    <div className={styles.searchBar}>
      <input type='text' placeholder='Search' />
      <div className={styles.search}>
        <SearchIcon className={styles.navIcon} />
      </div>
    </div>
    </>
  );
};

export default Navbar;
