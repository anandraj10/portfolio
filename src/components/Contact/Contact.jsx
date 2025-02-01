import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";
import { Phone, Mail, MapPinCheck, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [selectedService, setSelectedService] = useState('');

    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Consulting",
        "Other"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const result = await emailjs.sendForm(
                'service_6822seh', // Replace with your EmailJS service ID
                'template_y7n8poj', // Replace with your EmailJS template ID
                form.current,
                'yojg4MP90XUKJMZnX' // Replace with your EmailJS public key
            );

            if (result.text === 'OK') {
                setStatus('success');
                form.current.reset();
                setSelectedService('');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.contactContainer}>
                <div className={styles.contactBody}>
                    <div className={styles.formSection}>
                        <h3 className={styles.contactTitle}>Let's work together</h3>
                        <p className={styles.contactDescription}>
                            As a developer, I turn ideas into functional, scalable solutions.
                            From building new projects to improving existing ones, I focus on
                            clean code, efficiency, and user-centered design. Let's create
                            something exceptional together!
                        </p>

                        <form ref={form} className={styles.formContainer} onSubmit={handleSubmit}>
                            <div className={styles.inputRow}>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    id="Name"
                                    required
                                    placeholder="Your Name"
                                    name="user_name"
                                />
                                <input
                                    type="email"
                                    className={styles.formInput}
                                    id="Email"
                                    required
                                    placeholder="Email address"
                                    name="user_email"
                                />
                            </div>

                            <div className={styles.inputRow}>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    id="Phone"
                                    required
                                    placeholder="Phone number"
                                    name="user_phone"
                                />
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    id="Address"
                                    placeholder="Address"
                                    name="user_address"
                                />
                            </div>

                            <textarea
                                className={`${styles.formInput} ${styles.formTextarea}`}
                                name="message"
                                placeholder="Text here"
                                rows="5"
                                required
                            />

                            <select
                                className={styles.formSelect}
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                name="user_service"
                                required
                            >
                                <option  classname={styles.formService} value="">Select a service</option>
                                {services.map((service) => (
                                    <option key={service} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>

                            <button
                                className={styles.submitButton}
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <div className={styles.successMessage}>
                                    Message sent successfully!
                                </div>
                            )}
                            {status === 'error' && (
                                <div className={styles.errorMessage}>
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>

                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>
                                <Phone size={24} />
                            </span>
                            <div className={styles.infoContent}>
                                <h3>Phone</h3>
                                <p>(+91) 8002408842</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>
                                <Mail size={24} />
                            </span>
                            <div className={styles.infoContent}>
                                <h3>Email</h3>
                                <p>anandraj36401@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>
                                <MapPinCheck size={24} />
                            </span>
                            <div className={styles.infoContent}>
                                <h3>Address</h3>
                                <p>Malikpur,WazirGanj, Gaya, Bihar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};