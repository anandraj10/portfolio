import React from "react";
import styles from "./Contact.module.css";
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>

            <div className={styles.text}>
                <h2 >Contact</h2>
                <p>Feel free to reach out!</p>
            </div >
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="assets/contact/emailIcon.png" alt="Email Icon" />
                    <a href="mailto:anandraj36401@gamil.com">email anandraj36401</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/anand-raj-030646249/">linkedin-anand-raj</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/githubIcon.png" alt="Github Icon" />
                    <a href="https://github.com/anandraj10">github-anand-raj</a>
                </li>

            </ul>
        </footer>
    )
};