// src/app/saved/page.js
"use client";

import dynamic from "next/dynamic";

// This disables Server-Side Rendering (SSR) for this component
const SavedJobsList = dynamic(() => import("@/app/components/SavedJobList"), { 
  ssr: false,
  loading: () => <p>Loading saved jobs...</p> // Optional loading state
});

export default function SavedJobsPage() {
  return (
    <div className="padding-20px text-black">
      <h1>Saved Jobs</h1>
      <SavedJobsList />
    </div>
  );
}