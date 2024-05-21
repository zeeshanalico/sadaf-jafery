import { useState, ChangeEvent, FormEvent } from 'react';

const OptInForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', query: '' });
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', phone: '', query: '' });

    // For handleChange
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', phone: '', query: '' };
        let isValid = true;

        if (!formData.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
            isValid = false;
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        }

        if (!formData.query) {
            newErrors.query = 'Query is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Subscribe to our Newsletter</h2>
            {message && <p className="mb-4 text-green-500">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        required
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                    <label htmlFor="query" className="block text-sm font-medium text-gray-700">Your Query</label>
                    <textarea
                        id="query"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded ${errors.query ? 'border-red-500' : 'border-gray-300'}`}
                        required
                    />
                    {errors.query && <p className="text-red-500 text-sm mt-1">{errors.query}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default OptInForm;
