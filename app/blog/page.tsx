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
    thumbnail: string | null;
}

// BlogList Component
const BlogList = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <div className="container mx-auto p-4 ">
            {posts.map((post, index) => (
                <div key={index} className="relative bg-white shadow-md rounded-lg p-6 mb-16 flex flex-col lg:flex-row lg:items-center">
                    {post.thumbnail && (
                        <div className="mb-2 lg:mb-0 lg:mr-4 lg:w-1/3">
                            <img src={post.thumbnail} alt={post.title} className="rounded-xl w-full hover:transition-all hover:scale-105"/>
                        </div>
                    )}
                    <div className="lg:w-2/3">
                        <div className='text-2xl my-2 font-bold text-purple-600'>
                            {post.title}
                        </div>
                        <p className="text-gray-800 mb-4 text-balance">{post.excerpt}</p>
                        <div className="text-gray-600 text-sm">
                            <span>Published by <a href="#" className="text-purple-500 hover:underline">{post.author}</a></span>
                            <span> on {post.post_date}</span>
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
