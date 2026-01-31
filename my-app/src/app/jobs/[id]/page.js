import { jobs } from "@/app/data/jobs";
import { notFound } from "next/navigation";

// ✅ SEO MAGIC HERE
export async function generateMetadata({ params }) {
  const {id} = await params
  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return {
      title: "Job Not Found",
      description: "This job does not exist",
    };
  }

  return {
    title: `${job.role} at ${job.company} | Job Portal`,
    description: `Apply for ${job.role} in ${job.location}. ${job.company} is hiring now.`,
  };
}
export default async function JobPage({ params }){
    const {id} = await params
    const job = jobs.find((job) => job.id === Number(id));

    if(!job){
        return <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-black">Job Not Found</h1>
        </div>
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-black">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        {job.company} • {job.location}
      </p>

      <div className="flex gap-4 mb-6">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
          {job.type}
        </span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
          {job.salary}
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-black">Job Description</h2>
      <p className="text-gray-700 mb-6">{job.description}</p>

      <h2 className="text-xl font-semibold mb-2 text-black">Requirements</h2>
      <ul className="list-disc list-inside space-y-1">
        {job.requirements.map((skill) => (
          <li key={skill} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>
    </div>
    )
}