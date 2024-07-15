import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const NewsletterSubscription = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    // template_4pbavrf
    // service_q09ufjn
    // ES7H0YVzk63tZ2zyI
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_q09ufjn",
                "template_4pbavrf",
                {
                    from_name: form.name,
                    to_name: "Shakil Hossain",
                    from_email: form.email,
                    to_email: "shakil57375@gmail.com",
                    message: form.message,
                },
                "ES7H0YVzk63tZ2zyI"
            )
            .then(
                () => {
                    setLoading(false);
                    Swal.fire(
                        "Thank you. I will get back to you as soon as possible."
                    );

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    Swal.fire("Ahh, something went wrong. Please try again.");
                }
            );
    };
    return (
        <div className="w-full mx-auto my-10 p-5 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Subscribe to newsletter</h2>
            <form onSubmit={handleSubmit} ref={formRef} className="flex ">
                <label className="flex flex-col">
                    <input
                        type="email"
                        required
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="py-6 px-4 w-full lg:w-96"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4  rounded-r-lg hover:bg-orange-600 transition-colors"
                >
                    {loading ? "Subscribing..." : "Subscribed"}
                </button>
            </form>
        </div>
    );
};

export default NewsletterSubscription;
