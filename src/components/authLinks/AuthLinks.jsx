"use client"
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import styles from "./authLinks.module.css";
import Link from "next/link";
const  AuthLink = ()=>{
    const [open , setOpen] = useState();
    const {status} = useSession();
    return <>
    {status === "unauthenticated" ? (<Link href={"/login"}>Login</Link>) : (<><Link href="/blogwrite">Write</Link><span className={styles.link} onClick={()=>signOut()}>Logout</span></>)}
    </>
};
export default AuthLink;