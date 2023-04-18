import { BsFillPatchQuestionFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "@/styles/NavBar.module.css";
import { AiFillHome } from "react-icons/ai";
import { Poppins } from "next/font/google";
import { GrMail } from "react-icons/gr";
import Logo from "@/components/Logo";
import { useState } from "react";
import Link from "next/link";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function NavBar() {
  const [left, setLeft] = useState("-1000px");
  const handleToggle = () => {
    if (left === "-1000px") {
      setLeft("0px");
    } else {
      setLeft("-1000px");
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.toggle}>
        <label>
          <input type="checkbox" name="toggle" id="toggle" onClick={handleToggle} />
          <div className={styles.icon}>
            <GiHamburgerMenu />
          </div>
        </label>
      </div>
      <div
        style={{
          left: left,
        }}
        className={styles.links}
      >
        <ul>
          <li>
            <Link className={styles.link} style={poppins.style} href={"/"}>
              {/*<AiFillHome className={styles.icon} />*/}
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} style={poppins.style} href={"/about"}>
              {/*<Icon height={15} width={15} />*/}
              {/*<BsFillPatchQuestionFill className={styles.icon} />*/}
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} style={poppins.style} href={"/contact"}>
              {/*<GrMail className={styles.icon} />*/}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
