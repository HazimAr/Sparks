import React from 'react'

interface staff {
    img:any,
    name:string,
    role:string,
    description:string
}

const staffData: staff[] = [
  {
    img: "",
    name: "Name",
    role: "Loram Insum",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
  },
  {
    img: "",
    name: "Karim",
    role: "Coach",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
  },
  {
    img: "",
    name: "Shymaa",
    role: "Co-Club Director",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
  },
  {
    img: "",
    name: "Moose",
    role: "Co-Club Director",
    description: "Lorem Ipsum a;fsdljkfad;sklj dfsa;lkja;dlsfkjlkjdf;sa",
  },
];

function StaffCard(data: staff) {
  return (
    <div className='staff-div'>
      <img src={data.img} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <h4>{data.role}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default function Staff() {
    return (
      <div>
        <p> hi this staff lol </p>
        <div className='staff-div-div'>{staffData.map((data) => StaffCard(data))}</div>
      </div>
    );
}