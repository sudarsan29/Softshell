import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        license: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', company: '', license: '', message: '' });
            setErrors({});
        }
    };

    return (
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="contact">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                focus:border-transparent transition duration-300 ease-in-out 
                                transform focus:-translate-y-1 focus:shadow-lg"
                            />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                focus:border-transparent transition duration-300 ease-in-out 
                                transform focus:-translate-y-1 focus:shadow-lg"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                focus:border-transparent transition duration-300 ease-in-out 
                                transform focus:-translate-y-1 focus:shadow-lg"
                        />
                    </div>
                    <div>
                        <select
                            value={formData.license}
                            onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select License Type</option>
                            <option value="Office Suite">Office Suite</option>
                            <option value="Antivirus">Antivirus</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <textarea rows="4" placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                focus:border-transparent transition duration-300 ease-in-out 
                                transform focus:-translate-y-1 focus:shadow-lg"
                            />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
