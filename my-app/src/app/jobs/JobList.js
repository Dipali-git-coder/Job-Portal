"use client";

export default function JobList({ jobs }) {
  const saveJob = (id) => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (!savedJobs.includes(id)) {
      savedJobs.push(id);
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      alert("Job saved!");
    }
  };

  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            color: "black",
          }}
        >
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>
            {job.role} | {job.location}
          </p>

          <button 
          onClick={() => saveJob(job.id)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
            Save Job
          </button>
        </div>
      ))}
    </div>
  );
}
