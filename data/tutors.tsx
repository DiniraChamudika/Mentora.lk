// data/tutors.ts
export interface Tutor {
  id: string;
  title: string;
  teacher: string;
  rating: string;
  image: string;
  qualification: string;
  location: string;
  subject: string;
}

// Tutor data
export const tutors: Tutor[] = [
  {
    id: "t1",
    title: "Advanced Level : Physics",
    teacher: "Thilak Perera",
    rating: "4.8",
    image: "/images/Physics.jpg",
    qualification: "BSc (Hons) in Physics",
    location: "Colombo",
    subject: "Physics",
  },
  {
    id: "t2",
    title: "Advanced Level : Mathematics",
    teacher: "Nimal Silva",
    rating: "4.5",
    image: "/images/Maths.jpg",
    qualification: "BSc in Mathematics",
    location: "Kandy",
    subject: "Mathematics",
  },
  {
    id: "t3",
    title: "Advanced Level : ICT",
    teacher: "Kamal Fernando",
    rating: "4.7",
    image: "/images/ICT.jpg",
    qualification: "BSc in IT",
    location: "Galle",
    subject: "ICT",
  },
  {
    id: "t4",
    title: "Advanced Level : Maths",
    teacher: "Sunil Perera",
    rating: "4.9",
    image: "/images/Maths2.jpg",
    qualification: "MSc in Mathematics",
    location: "Colombo",
    subject: "Maths",
  },
  {
            id:"t5",

      title: "Ordinary Level : Science",
      teacher: "Isuru Lakdinu",
      rating: "4.8",
      image: "/images/Science.jpg",
      qualification: "BSc (Hons) in Science – University of Peradeniya",
      location: "Kandy",
          subject: "Science",

    },
    {
            id:"t6",

      title: "Advanced Level : Chemistry",
      teacher: "Sithum Perera",
      rating: "4.8",
      image: "/images/chemistry.jpg",
      qualification: "BSc (Hons) in Chemistry – University of Colombo",
      location: "Colombo",
          subject: "Chemistry",

    },
    {
            id:"t7",

      title: "Advanced Level : Business Studies",
      teacher: "Dinura Halwitige",
      rating: "4.8",
      image: "/images/Business Studies.jpg",
      qualification:
        "BSc (Hons) in Business Studies – University of Moratuwa",
      location: "Kandy",
          subject: "Business Studies",

    },
    {
            id:"t8",

      title: "Advanced Level : Web Development",
      teacher: "Chirath Esandu",
      rating: "4.8",
      image: "/images/webdev.jpg",
      qualification:
        "BSc (Hons) in Computer Science – University of Moratuwa",
      location: "Colombo",
          subject: "Web Development",

    },
];

// Dropdown options
export const subjects = ["All", "Maths", "Physics", "ICT"];