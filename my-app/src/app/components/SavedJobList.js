"use client";

import { useState } from "react";
import { jobs } from "../data/jobs";

export default function SavedJobsPage() {
  const [savedJobs] = useState(() => {

    const savedIds =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    return jobs.filter((job) =>
      savedIds.includes(job.id)
    );
    });
    if (savedJobs.length === 0) return <p>No saved jobs</p>

  return (
    <div className="padding-20px">


      {savedJobs.map((job) => (
        <div
          key={job.id}
          className="
            border-1px solid ccc
            padding-10px
            marginBottom-10px
          "
        >
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>
            {job.role} | {job.location}
          </p>
        </div>
      ))}
    </div>
  );
}
