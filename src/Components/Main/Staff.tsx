import React from 'react'
import placeholder from '../../Images/Hazimos.png'

interface staff {
    img:any,
    name:string,
    role:string,
    description:string
}

const staffData: staff[] = [
  {
    img: placeholder,
    name: "Hazim",
    role: "Web Developer",
    description: "Designer and Developer for the Sparks website",
  },
  {
    img: placeholder,
    name: "Karim",
    role: "Head Coach",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
  },
  {
    img: placeholder,
    name: "Kenzy",
    role: "Co-Club Director",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
  },
  {
    img: placeholder,
    name: "Tameem",
    role: "Co-Club Director",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
    },
  {
    img: placeholder,
    name: "Tameem",
    role: "Co-Club Director",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
    },
  {
    img: placeholder,
    name: "Tameem",
    role: "Co-Club Director",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
  },
];

function StaffCard(data: staff) {
  return (
    <div className='staff-div'>
      <img src={data.img} alt={data.name} />
      <div>
        <h2>{data.name}</h2>
        <h4>{data.role}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default function Staff() {
    return (
      <div>
        <h1> SVC Staff </h1>
        <div className='staff-div-div'>{staffData.map((data) => StaffCard(data))}</div>
      </div>
    );
}