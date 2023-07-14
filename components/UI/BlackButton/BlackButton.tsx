import { ReactNode } from "react";
import styles from "./BlackButton.module.scss";

interface Props {
    children: ReactNode;
  }

const BlackButton = ({ children }: Props) => {
    return (
        <button className={styles.button}>{ children }</button>
    )
}

export default BlackButton
