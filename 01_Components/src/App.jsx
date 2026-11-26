import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./Components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      salary: "$35 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "2 days ago",
      post: "Software Development Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      salary: "$45 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "1 day ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      salary: "$40 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      salary: "$50 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "6 days ago",
      post: "iOS Application Developer",
      tag1: "Part-time",
      tag2: "Junior Level",
      salary: "$38 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      salary: "$55 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "7 days ago",
      post: "AI / Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      salary: "$48 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "UI / UX Designer",
      tag1: "Part-time",
      tag2: "Junior Level",
      salary: "$32 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "5 days ago",
      post: "Cloud Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      salary: "$42 / hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      companyName: "IBM",
      datePosted: "3 days ago",
      post: "Data Scientist",
      tag1: "Full-time",
      tag2: "Senior Level",
      salary: "$46 / hr",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="Parent">
      {jobOpenings.map(function () {
        return <Card />;
      })}
    </div>
  );
};

export default App;
