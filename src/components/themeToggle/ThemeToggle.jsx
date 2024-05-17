"use client"
import Image from 'next/image';
import styles from "./themToggle.module.css";
import { useContext } from 'react';
import {ThemeContext} from "@/context/ThemeContext";


export const ThemToggle = () =>{
    const {toggle ,theme} = useContext(ThemeContext);
   console.log(theme);
    return (
        <div className={styles.container} onClick={toggle}
        style={
            theme === "dark" ? {background: "white"} : {background: "#0f172a"}
        }>
            <Image src="/moon.png" alt ="not found" width={14} height={14} />
            <div className={styles.ball} style={theme === "dark" ? {left:1, background:"#0f172a"} : {right:1,background: "white"}}></div>
            <Image src="/sun.png" alt ="not found" width={14} height={14} />
        </div>
    )
}