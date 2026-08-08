import { img } from "./theme"
import type { PersonData } from "../types"

export const MISSING_DATA: PersonData[] = [
  { photo: img("photo-1606386666595-d135abc1e3b2"), name: "Ahmed Mohamed",   age: "12 years old", gender: "Male",   location: "Alexandria",            dateLabel: "Last seen", dateValue: "2 days ago",  badge: "missing"  },
  { photo: img("photo-1566616213894-2d4e1baee5d8"), name: "Fatima Ali",      age: "67 years old", gender: "Female", location: "Cairo, Maadi",           dateLabel: "Last seen", dateValue: "5 days ago",  badge: "missing"  },
  { photo: img("photo-1613061886834-92a52edf31f0"), name: "Omar Hassan",     age: "34 years old", gender: "Male",   location: "Giza",                   dateLabel: "Last seen", dateValue: "1 week ago",  badge: "missing"  },
  { photo: img("photo-1497881807663-38b9a95b7192"), name: "Nour Ibrahim",    age: "8 years old",  gender: "Female", location: "Cairo, Heliopolis",      dateLabel: "Last seen", dateValue: "3 days ago",  badge: "missing" },
  { photo: img("photo-1646640871753-c4d33814aa7b"), name: "Khaled Mahmoud",  age: "45 years old", gender: "Male",   location: "Alexandria, Sidi Gaber", dateLabel: "Last seen", dateValue: "2 weeks ago", badge: "missing"  },
  { photo: img("photo-1553913861-3d2464de0f41"),    name: "Youssef Ramadan", age: "22 years old", gender: "Male",   location: "Cairo, Nasr City",       dateLabel: "Last seen", dateValue: "4 days ago",  badge: "missing"  },
]

export const FOUND_DATA: PersonData[] = [
  { photo: img("photo-1497881807663-38b9a95b7192"), name: "Ahmed",           age: "Approx. 8–10 years old",  gender: "Female", location: "Giza, Dokki",         dateLabel: "Found", dateValue: "Yesterday",  badge: "found"    },
  { photo: img("photo-1642807490029-85a6a97a2716"), name: "Mohamed",  age: "Approx. 28 years old",    gender: "Male",   location: "Cairo, Downtown",     dateLabel: "Found", dateValue: "3 days ago", badge: "found"      },
  { photo: img("photo-1566616213894-2d4e1baee5d8"), name: "Ali",           age: "Approx. 65–70 years old", gender: "Female", location: "Alexandria, Montaza", dateLabel: "Found", dateValue: "1 week ago", badge: "found"    },
  { photo: img("photo-1618403714739-7827a3d780b8"), name: "Sara",        age: "Approx. 25 years old",    gender: "Female", location: "Cairo, Nasr City",    dateLabel: "Found", dateValue: "4 days ago", badge: "found" },
]