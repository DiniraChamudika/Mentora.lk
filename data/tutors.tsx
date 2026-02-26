export interface Tutor {
  id: string;
  title: string;
  teacher: string;
  rating: string;
  image: string;
  qualification: string;
  location: string;
}

export const tutors: Tutor[] = [
  {
    id: "t1",
    title: "Advanced Level : Physics",
    teacher: "Thilak Perera",
    rating: "4.8",
    image: "/images/Physics.jpg",
    qualification: "BSc (Hons) in Engineering – University of Colombo",
    location: "Colombo",
  },
  {
    id: "t2",
    title: "Advanced Level : Biology",
    teacher: "Nadeesha Silva",
    rating: "4.6",
    image: "/images/biology.jpg",
    qualification: "BSc (Hons) in Science – University of Kelaniya",
    location: "Kandy",
  },
  {
    id: "t3",
    title: "Advanced Level : Mathematics",
    teacher: "Kasun Fernando",
    rating: "4.9",
    image: "/images/maths.jpg",
    qualification: "BSc (Hons) in Engineering – University of Peradeniya",
    location: "Gampaha",
  },
  {
    id: "t4",
    title: "Advanced Level : ICT",
    teacher: "Eshan Dias",
    rating: "4.8",
    image: "/images/ictol.jpg",
    qualification:
      "BSc (Hons) in Information Technology – University of Moratuwa",
    location: "Colombo",
  },
  {
    id: "t5",
    title: "Ordinary Level : Science",
    teacher: "Isuru Lakdinu",
    rating: "4.8",
    image: "/images/Science.jpg",
    qualification: "BSc (Hons) in Science – University of Peradeniya",
    location: "Kandy",
  },
  {
    id: "t6",
    title: "Advanced Level : Chemistry",
    teacher: "Sithum Perera",
    rating: "4.8",
    image: "/images/chemistry.jpg",
    qualification: "BSc (Hons) in Chemistry – University of Colombo",
    location: "Colombo",
  },
  {
    id: "t7",
    title: "Advanced Level : Business Studies",
    teacher: "Dinura Halwitige",
    rating: "4.8",
    image: "/images/Business Studies.jpg",
    qualification:
      "BSc (Hons) in Business Studies – University of Moratuwa",
    location: "Kandy",
  },
  {
    id: "t8",
    title: "Advanced Level : Web Development",
    teacher: "Chirath Esandu",
    rating: "4.8",
    image: "/images/webdev.jpg",
    qualification:
      "BSc (Hons) in Computer Science – University of Moratuwa",
    location: "Colombo",
  },
];