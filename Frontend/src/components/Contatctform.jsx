import React from 'react';
import { useState } from 'react';
import styles from '../style';
import axios from "axios";

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });


    
    const handleSubmit =async(e) => {
        e.preventDefault();
    
        // Check if all fields are filled
        if (!form.name || !form.email || !form.message) {
            alert("Please fill in all fields before submitting.");
            return;
        }
    
        // If all fields are filled, proceed with the submission
        console.log(form);
        try {
            await axios.post("http://localhost:8080/contact",{
                ...form
            })
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            console.log(error);
        }
        alert("Submitted");
    };
    

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section id='contactus' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-xl mx-auto bg-text-gradient shadow-md rounded-md p-6">
                        
                        <h1 className=" font-bold text-white mb-4 text-gradient text-5xl">Contact Us</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 font-poppins text-white">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>    
                            <div>
                                <label htmlFor="email" className="font-poppins block mb-1 text-white">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 font-poppins text-white">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> 
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 transition duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    );
};

export default ContactForm;