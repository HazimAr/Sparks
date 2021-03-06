
import placeholder from '../../Images/Hazimos.png'

interface staff {
    img:any,
    name:string,
    role:string,
}

const staffData: staff[] = [
  {
    img: placeholder,
    name: "Hazim",
    role: "Web Designer",
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
    img: placeholder,
    name: "Shymaa",
    role: "Co-Club Director",
    },
  {
    img: placeholder,
    name: "Mom",
    role: "Co-Club Director",
    },
  {
    img: placeholder,
    name: "Mom",
    role: "Co-Club Director",
  },
  {
    img: placeholder,
    name: "Mom",
    role: "Co-Club Director",
  },
  {
    img: placeholder,
    name: "Mom",
    role: "Co-Club Director",
  },
  {
    img: placeholder,
    name: "Mom",
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