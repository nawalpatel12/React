import React from "react";
import Card from "./Components/Card.jsx";

const avatarFor = (studentId) =>
  `https://api.dicebear.com/9.x/avataaars/svg?seed=student-${studentId}`;

const App = () => {
  const students = [
    {
      id: 1,
      image: avatarFor(1),
      name: "Aarav Sharma",
      class: "Class 10",
      schoolName: "Delhi Public School",
      rollNo: "101",
      contactNo: "+91 9876543210",
      address: "Mumbai, Maharashtra, India",
    },
    {
      id: 2,
      image: avatarFor(2),
      name: "Ananya Patel",
      class: "Class 9",
      schoolName: "St. Xavier's High School",
      rollNo: "102",
      contactNo: "+91 9876543211",
      address: "Ahmedabad, Gujarat, India",
    },
    {
      id: 3,
      image: avatarFor(3),
      name: "Rohan Verma",
      class: "Class 8",
      schoolName: "Kendriya Vidyalaya",
      rollNo: "103",
      contactNo: "+91 9876543212",
      address: "New Delhi, India",
    },
    {
      id: 4,
      image: avatarFor(4),
      name: "Priya Singh",
      class: "Class 12",
      schoolName: "Ryan International School",
      rollNo: "104",
      contactNo: "+91 9876543213",
      address: "Jaipur, Rajasthan, India",
    },
    {
      id: 5,
      image: avatarFor(5),
      name: "Rahul Gupta",
      class: "Class 7",
      schoolName: "DAV Public School",
      rollNo: "105",
      contactNo: "+91 9876543214",
      address: "Patna, Bihar, India",
    },
    {
      id: 6,
      image: avatarFor(6),
      name: "Sneha Joshi",
      class: "Class 11",
      schoolName: "Modern Public School",
      rollNo: "106",
      contactNo: "+91 9876543215",
      address: "Pune, Maharashtra, India",
    },
    {
      id: 7,
      image: avatarFor(7),
      name: "Aditya Kumar",
      class: "Class 6",
      schoolName: "Army Public School",
      rollNo: "107",
      contactNo: "+91 9876543216",
      address: "Lucknow, Uttar Pradesh, India",
    },
    {
      id: 8,
      image: avatarFor(8),
      name: "Kavya Reddy",
      class: "Class 10",
      schoolName: "Oakridge International School",
      rollNo: "108",
      contactNo: "+91 9876543217",
      address: "Hyderabad, Telangana, India",
    },
    {
      id: 9,
      image: avatarFor(9),
      name: "Arjun Mehta",
      class: "Class 9",
      schoolName: "The Heritage School",
      rollNo: "109",
      contactNo: "+91 9876543218",
      address: "Kolkata, West Bengal, India",
    },
    {
      id: 10,
      image: avatarFor(10),
      name: "Ishita Das",
      class: "Class 8",
      schoolName: "Delhi Public School",
      rollNo: "110",
      contactNo: "+91 9876543219",
      address: "Bhubaneswar, Odisha, India",
    },
    {
      id: 11,
      image: avatarFor(11),
      name: "Vikram Yadav",
      class: "Class 12",
      schoolName: "St. Mary's School",
      rollNo: "111",
      contactNo: "+91 9876543220",
      address: "Bhopal, Madhya Pradesh, India",
    },
    {
      id: 12,
      image: avatarFor(12),
      name: "Meera Nair",
      class: "Class 5",
      schoolName: "Loyola High School",
      rollNo: "112",
      contactNo: "+91 9876543221",
      address: "Kochi, Kerala, India",
    },
    {
      id: 13,
      image: avatarFor(13),
      name: "Karan Malhotra",
      class: "Class 7",
      schoolName: "Amity International School",
      rollNo: "113",
      contactNo: "+91 9876543222",
      address: "Gurugram, Haryana, India",
    },
    {
      id: 14,
      image: avatarFor(14),
      name: "Pooja Mishra",
      class: "Class 11",
      schoolName: "Sunbeam School",
      rollNo: "114",
      contactNo: "+91 9876543223",
      address: "Varanasi, Uttar Pradesh, India",
    },
    {
      id: 15,
      image: avatarFor(15),
      name: "Dev Shah",
      class: "Class 6",
      schoolName: "Podar International School",
      rollNo: "115",
      contactNo: "+91 9876543224",
      address: "Surat, Gujarat, India",
    },
    {
      id: 16,
      image: avatarFor(16),
      name: "Simran Kaur",
      class: "Class 10",
      schoolName: "Sacred Heart School",
      rollNo: "116",
      contactNo: "+91 9876543225",
      address: "Amritsar, Punjab, India",
    },
    {
      id: 17,
      image: avatarFor(17),
      name: "Manish Thapa",
      class: "Class 9",
      schoolName: "Mount Everest School",
      rollNo: "117",
      contactNo: "+977 9800000001",
      address: "Birgunj, Nepal",
    },
    {
      id: 18,
      image: avatarFor(18),
      name: "Riya Choudhary",
      class: "Class 8",
      schoolName: "Bright Future Academy",
      rollNo: "118",
      contactNo: "+91 9876543227",
      address: "Indore, Madhya Pradesh, India",
    },
    {
      id: 19,
      image: avatarFor(19),
      name: "Siddharth Rao",
      class: "Class 12",
      schoolName: "National Public School",
      rollNo: "119",
      contactNo: "+91 9876543228",
      address: "Bengaluru, Karnataka, India",
    },
    {
      id: 20,
      image: avatarFor(20),
      name: "Neha Kumari",
      class: "Class 5",
      schoolName: "Cambridge International School",
      rollNo: "120",
      contactNo: "+91 9876543229",
      address: "Ranchi, Jharkhand, India",
    },
  ];

  return (
    <div className="Parent">
      {students.map(function (elem) {
        return (
          <Card
            name={elem.name}
            class={elem.class}
            schoolname={elem.schoolName}
            image={elem.image}
            rollNo={elem.rollNo}
            contactNo={elem.contactNo}
            address={elem.address}
          />
        );
      })}
    </div>
  );
};

export default App;
