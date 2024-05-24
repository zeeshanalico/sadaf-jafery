'use client'
import React, { useState } from 'react';
import blogs from '../data/blogs';
export interface BlogPost {
    date_label: string;
    author: string;
    post_date: string;
    title: string;
    excerpt: string;
    link: string;
    thumbnail: string ;
}


const BlogList = ({ posts }: { posts: BlogPost[] }) => {

    const handleClick = () => {
        const whatsappUrl = `https://wa.me/${'+923001712141'.replace(/\D/g, '')}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="container mx-auto p-4 ">
            {posts.map((post, index) => (
                <div key={index} className="relative bg-white shadow-md rounded-lg p-6 mb-16 flex flex-col lg:flex-row lg:items-center">
                    {post.thumbnail === '' ? (
                        <div className="mb-2 lg:mb-0 lg:mr-4 lg:w-1/3">
                            <img
                                src='/no-image.png'
                                alt={post.title}
                                width={500}
                                height={300}
                                className="rounded-xl w-full hover:transition-all hover:scale-105"
                            />
                        </div>
                    ) : (
                        <div className="mb-2 lg:mb-0 lg:mr-4 lg:w-1/3">
                            <img
                                src={post.thumbnail}
                                alt={post.title}
                                width={500}
                                height={300}
                                className="rounded-xl w-full hover:transition-all hover:scale-105"
                            />
                        </div>
                    )}
                    <div className="lg:w-2/3">
                        <div className='text-2xl my-2 font-bold text-purple-600'>
                            {post.title}
                        </div>
                        <p className="text-gray-800 mb-4 text-balance">{post.excerpt}</p>
                        <div className="text-gray-600 text-sm flex justify-between items-center flex-wrap ">
                            <div>
                                <span>Published by <a href="#" className="text-purple-500 hover:underline">{post.author}</a></span>
                                <span> on {post.post_date}</span>
                            </div>
                            <div className="flex items-center space-x-2 my-2">
                                <a href={``} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                                </a>
                                <a href={`tel:+923000051248`} className="text-blue-500 hover:text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </a>
                                +92 300 0051248
                            </div>
                            <div className="flex items-center space-x-2 my-2">
                                <a href={``} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                                </a>
                                <div onClick={handleClick} className="text-blue-500 hover:text-blue-600">
                                    <span className="[&>svg]:h-7 [&>svg]:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                    </span>
                                </div>
                                +92 300 1712141
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Main Page Component
const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(blogs.length / postsPerPage);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination Handlers
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div className='bg-gray-50'>
            <div className='text-center text-4xl py-10 font-bold text-gray-500'>
                Blogs
            </div>

            <BlogList posts={currentPosts} />

            <div className="flex justify-center my-6">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`mx-2 px-4 py-2 border rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'bg-purple-500 text-white hover:bg-purple-700'}`}
                >
                    Previous
                </button>
                <span className="mx-2 px-4 py-2 border rounded">{currentPage} / {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`mx-2 px-4 py-2 border rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'bg-purple-500 text-white hover:bg-purple-700'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Page;
