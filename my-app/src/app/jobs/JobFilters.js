"use client";

import { useState } from "react";
import JobList from "./JobList";

export default function JobFilters({ jobs }) {
  const [role, setRole] = useState("All");
  const [location, setLocation] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const roleMatch = role === "All" || job.role === role;
    const locationMatch =
      location === "All" || job.location === location;

    return roleMatch && locationMatch;
  });

  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <select onChange={(e) => setRole(e.target.value)}>
          <option>All</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Full Stack</option>
        </select>

        <select onChange={(e) => setLocation(e.target.value)}>
          <option>All</option>
          <option>Remote</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Delhi</option>
        </select>
      </div>

      <JobList jobs={filteredJobs} />
    </>
  );
}
