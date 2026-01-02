"use client";

import { useEffect, useState, FormEvent } from "react";
import { usePopup } from "../Context/PopupContext";

// TODO: Replace this with your Google Apps Script Web App URL after deployment
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFonlljxnOQKF1Htxcb3lg3BABgZ0S4dZyniOAqfYndLFhuu2i6BhzCdsLIfe_ygXZ/exec";

interface FormData {
    name: string;
    email: string;
    phone: string;
    school: string;
    grade: string;
}

export default function PopupForm() {
    const { isOpen, closePopup } = usePopup();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Reset form state when popup opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setError(null);
        }
    }, [isOpen]);

    // Disable background scrolling when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formElement = e.currentTarget;
        const formData: FormData = {
            name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
            email: (formElement.elements.namedItem('email') as HTMLInputElement).value,
            phone: (formElement.elements.namedItem('phone') as HTMLInputElement).value,
            school: (formElement.elements.namedItem('school') as HTMLInputElement).value,
            grade: (formElement.elements.namedItem('grade') as HTMLSelectElement).value,
        };

        try {
            // Send data to Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // With no-cors mode, we can't read the response, so we assume success
            // If you need to handle errors, you'll need to configure CORS in your Apps Script
            setIsSubmitted(true);
        } catch (err) {
            console.error('Form submission error:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60 ">
            <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[45%] flex flex-col gap-5 p-6 md:p-10 bg-white rounded-2xl shadow-lg max-h-[90vh] overflow-y-auto">
                <div className="relative flex flex-col items-center gap-0 md:gap-2">
                    <button onClick={closePopup} type="button" className="absolute -top-3 -right-3 md:-top-5 md:-right-5  text-secondary  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {isSubmitted ? (
                        <>
                            <h2 className="text-lg mlg:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans gradient-text text-center">Thank You!</h2>
                            <p className="text-xs mlg:text-sm sm:text-base text-center">Your registration has been submitted successfully.</p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-lg mlg:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans gradient-text text-center">Student Registration</h2>
                            <p className="text-xs mlg:text-sm sm:text-base text-center">Fill out the form to enroll in our program</p>
                        </>
                    )}
                </div>

                {isSubmitted ? (
                    <div className="flex flex-col items-center gap-6 py-8">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <p className="text-center text-gray-600 max-w-sm">
                            We have received your registration. Our team will contact you shortly with further details.
                        </p>
                        <button
                            onClick={closePopup}
                            type="button"
                            className="mt-4 px-8 py-3 text-sm md:text-base text-white font-open-sans font-semibold rounded-full primary cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5"
                        onSubmit={handleSubmit}
                    >
                        {error && (
                            <div className="col-span-1 sm:col-span-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-lato font-semibold">Student Name <span className="text-red-500">*</span></label>
                            <input type="text" name="name" placeholder="Student Name" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" disabled={isSubmitting} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-lato font-semibold">Email <span className="text-red-500">*</span></label>
                            <input type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" disabled={isSubmitting} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-lato font-semibold">WhatsApp Number <span className="text-red-500">*</span></label>
                            <input type="number" name="phone" placeholder="WhatsApp Number" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" disabled={isSubmitting} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="school" className="font-lato font-semibold">Student School <span className="text-red-500">*</span></label>
                            <input type="text" name="school" placeholder="Student School" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" disabled={isSubmitting} />
                        </div>
                        <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
                            <label htmlFor="grade" className="font-lato font-semibold">Select Grade <span className="text-red-500">*</span></label>
                            <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary bg-white" name="grade" defaultValue="" required disabled={isSubmitting}>
                                <option value="" disabled>Select Grade</option>
                                <option value="grade-6">Grade 6</option>
                                <option value="grade-7">Grade 7</option>
                                <option value="grade-8">Grade 8</option>
                                <option value="grade-9">Grade 9</option>
                                <option value="grade-10">Grade 10</option>
                                <option value="grade-11">Grade 11</option>
                                <option value="grade-12">Grade 12</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="col-span-1 sm:col-span-2 mt-4 md:mt-2 xxl:mt-4 px-5 py-3 md:px-11 md:py-4 text-sm md:text-base xxl:text-lg text-white font-open-sans font-semibold rounded-full primary cursor-pointer hover:shadow-lg transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : 'Submit'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}