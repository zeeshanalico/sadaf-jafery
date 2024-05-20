import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';

const OptInForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');

    // For handleChange
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
            {message && <p className="mb-4 text-green-500">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-blue-700"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default OptInForm;


// tsconfig.js
// {
//     "compilerOptions": {
//       "target": "es5",
//       "lib": ["dom", "dom.iterable", "esnext"],
//       "allowJs": true,
//       "skipLibCheck": true,
//       "strict": true,
//       "forceConsistentCasingInFileNames": true,
//       "noEmit": true,
//       "esModuleInterop": true,
//       "module": "esnext",
//       "moduleResolution": "node",
//       "resolveJsonModule": true,
//       "isolatedModules": true,
//       "jsx": "preserve",
//       "incremental": true
//     },
//     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
//     "exclude": ["node_modules"]
//   }
  