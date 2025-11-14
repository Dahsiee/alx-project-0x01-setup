import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <PostCard />
      </main>
      <Footer />
    </div>
  );
};

export default Posts;
