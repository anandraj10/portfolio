import React from "react";
import styles from "./Hero.module.css";

export const Hero=()=>{
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Anand Raj</h1>
            <p className={styles.description}>
                I'm a full-stack developer with a year of experience in React and NodeJS. Reach out if you'd like to learn more!
            </p>
            <a href="https://drive.google.com/file/d/1FcMByboRZW_JmlAohnL9wZyZKrGanIkX/view?usp=drive_link" className={styles.contactBtn}>Hire me</a>
        </div>
        <img src="heroImage.png" alt="Hero Image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}/>

    </section>
    )
};
