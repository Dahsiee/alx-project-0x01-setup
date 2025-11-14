import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Users Page</h1>
        <p>List of users will appear here...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Users;
