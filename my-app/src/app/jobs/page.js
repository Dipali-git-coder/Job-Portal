import { jobs } from "../data/jobs";
import JobFilters from "./JobFilters";

export default function JobsPage() {
  return (
    <div className="padding-20px text-black">
      <h1>Job Listings</h1>

      {/* Server → Client */}
      <JobFilters jobs={jobs} />
    </div>
  );
}
