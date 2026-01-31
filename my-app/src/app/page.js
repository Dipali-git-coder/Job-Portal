import Image from "next/image";
import {jobs} from "./data/jobs";
import JobFilters from "./jobs/JobFilters";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-black">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-black">{job.title}</h2>
            <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.company}</p>
            <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
            <p className="text-gray-600 mb-1"><strong>Type:</strong> {job.type}</p>
            <p className="text-gray-600 mb-1"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-700 mb-2">{job.description}</p>
            <div>
              <strong className="text-gray-800">Requirements:</strong>
              <ul className="list-disc list-inside">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-gray-600">{req}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
