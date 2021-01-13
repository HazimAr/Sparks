import React from 'react'
import placeholder from '../../Images/Hazimos.png'
import twomad from '../../Images/twomad.jpg'
import Andrew from '../../Images/AndrewIsGay.png'
import free_Melly from '../../Images/free_Melly.jpg'

interface staff {
    img:any,
    name:string,
    role:string,
}

const staffData: staff[] = [
  {
    img: placeholder,
    name: "Hazim",
    role: "Web Developer",
  },
  {
    img: placeholder,
    name: "Karim",
    role: "Head Coach",
  },
  {
    img: placeholder,
    name: "Kenzy",
    role: "Co-Club Director",
  },
  {
    img: Andrew,
    name: "Andrew",
    role: "Co-Club Director",
    },
  {
    img: twomad,
    name: "twomad",
    role: "Co-Club Director",
    },
  {
    img: free_Melly,
    name: "Mom",
    role: "Co-Club Director",
  },
  {
    img: placeholder,
    name: "Bevenzo",
    role: "Co-Club Director",
  },
  {
    img: placeholder,
    name: "Dice",
    role: "Co-Club Director",
  },
  {
    img: placeholder,
    name: "Clem",
    role: "Co-Club Director",
  },
];

function StaffCard(data: staff) {
  return (
    <div className='staff-div'>
      <img className='staff-img'src={data.img} alt={data.name} />
      <div>
        <h2>{data.name}</h2>
        <h4>{data.role}</h4>
      </div>
    </div>
  );
}

export default function Staff() {
    return (
      <div>
        <h1> SVBC Staff </h1>
        <div className='staff-div-div'>{staffData.map((data) => StaffCard(data))}</div>
      </div>
    );
}