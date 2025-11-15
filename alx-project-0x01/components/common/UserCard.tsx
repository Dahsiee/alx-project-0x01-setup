import { UserProps } from "@/interfaces";
import Link from "next/link";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) =>  {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name} ({username })</h2>
      </div>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">Website: {website}</p>
      <div className="mt-4 text-sm text-gray-500">
        <h3 className="font-semibold">Address:</h3>
        <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        <h3 className="font-semibold mt-2">Company:</h3>
        <p>{company.name} - {company.catchPrase}</p>
      </div>
       <div className="mt-4">
        <Link href={`/users/${id}`} className="text-blue-600 underline">
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserCard;