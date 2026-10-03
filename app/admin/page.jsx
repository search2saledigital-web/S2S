"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Edit, Trash2 } from "lucide-react";
import Sidebar from "./../compoents/admin/Sidebar";

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/blog", {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error(`API Error: ${res.status}`);
                }

                const data = await res.json();

                console.log("Blog API Response:", data);

                // Handle both array and object API responses
                const blogList = Array.isArray(data)
                    ? data
                    : Array.isArray(data.blogs)
                        ? data.blogs
                        : Array.isArray(data.data?.blogs)
                            ? data.data.blogs
                            : [];

                setBlogs(blogList);

            } catch (error) {
                console.error("Fetch blogs error:", error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Delete this blog?")) return;

        try {
            const res = await fetch(`/api/blog/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setBlogs((prev) =>
                    prev.filter((b) => b._id !== id)
                );
            } else {
                alert("Failed to delete");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex text-black">

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex-1 flex flex-col">

                <header className="bg-white shadow-sm p-4 flex items-center justify-between md:justify-end">
                    <button
                        className="md:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>

                    <h1 className="text-2xl font-bold text-yellow-400">
                        Admin Dashboard
                    </h1>
                </header>

                {loading ? (
                    <p className="p-6 text-center text-gray-500 text-4xl">
                        Loading...
                    </p>
                ) : (
                    <main className="p-4">

                        <h2 className="md:text-3xl text-xl font-bold text-center mb-6">
                            Manage Blogs
                        </h2>

                        {blogs.length === 0 ? (
                            <p className="p-6 text-center text-gray-500 text-2xl">
                                No Data Found
                            </p>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                                {blogs.map((item) => (
                                    <div
                                        key={item._id}
                                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
                                    >

                                        <div className="relative">
                                            <img
                                                src={item.thumbnail || "/placeholder.png"}
                                                alt={item.title || "Blog"}
                                                className="h-48 w-full object-cover"
                                            />
                                        </div>

                                        <div className="p-4 flex flex-col">

                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                                {item.title}
                                            </h3>

                                            <div className="mt-auto pt-4 flex justify-between items-center">

                                                <Link
                                                    href={`/our-blogs/${item.slug}`}
                                                    className="text-sm font-medium text-yellow-500 hover:underline"
                                                >
                                                    Read More →
                                                </Link>

                                                <div className="flex gap-2">

                                                    <Link
                                                        href={`/admin/edit-blog/${item._id}`}
                                                        className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600"
                                                    >
                                                        <Edit size={16} />
                                                    </Link>

                                                    <button
                                                        onClick={() => handleDelete(item._id)}
                                                        className="bg-red-500 p-3 rounded-full text-white hover:bg-red-600"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}

                    </main>
                )}
            </div>
        </div>
    );
}