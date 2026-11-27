import Card from "./Components/Card";

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    salary: "$35/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    salary: "$45/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    salary: "$40/hr",
    location: "Hydrabad, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    salary: "$50/hr",
    location: "Kolkata, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Application Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    salary: "$38/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    salary: "$55/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "7 days ago",
    post: "AI / Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    salary: "$48/hr",
    location: "NCR, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "UI / UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    salary: "$32/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "5 days ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    salary: "$42/hr",
    location: "Bangluru, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    companyName: "IBM",
    datePosted: "3 days ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Senior Level",
    salary: "$46/hr",
    location: "Mumbai, India",
  },
];

  return (
    <div className="Parent">
      {jobOpenings.map(function (elem) {
        return <Card company={elem.companyName} datePosted={elem.datePosted} post= {elem.post} tag ={elem.tag1} tags={elem.tag2}
        salary={elem.salary} location={elem.location} logo={elem.brandLogo}/>
      })}
    </div>
  );
};

export default App;
