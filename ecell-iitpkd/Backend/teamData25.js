// import Aashutosh from "../src/assets/team25/Aashutosh.jpeg";
// import Abhiraj from "../src/assets/team25/Abhiraj_raje.HEIC";
// import Aman from "../src/assets/team25/Aman_Meena.jpg";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";
// import Aashutosh from "../src/assets/team25";

const imageModules = import.meta.glob('../src/assets/team25/*.jpg', { eager: true });

// Convert to simpler key format like 'alice.jpg'
const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const filename = path.split('/').pop(); // 'alice.jpg'
    return [filename, mod.default];
  })
);

const teamData = [
    {
        name:'Aryan Mathur',
        role:'Mentor',
        image:images['ARYAN_MATHUR.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Joy',
        role:'Mentor',
        image:images['JOY.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Ananthakrishnan',
        role:'Deputy Head',
        image:images['Ananthakrishnan.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Emmanuel',
        role:'Deputy Head',
        image:images['Emmanuel_Johnson.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Shreyas',
        role:'Event Coordinator',
        image:images['Shreyas_vadthya.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Abhiraj',
        role:'Event Coordinator',
        image:images['Abhiraj_raje.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Priyam Sahu',
        role:'PG Lead',
        image:images['PRIYAM.jpg'],
        mail:'',
        linkedin:''
    },

    {
        name:'Likhith',
        role:'Content Creator & Media Publicity Head',
        image:images['Likhith.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Mithil Reddy',
        role:'Content Creator & Media Publicity Head',
        image:images['MITHIL.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Aashutosh',
        role:'Hospitality Team Lead',
        image:images['Aashutosh.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Ashish Kumar',
        role:'Hospitality Team Lead',
        image:images['Ashish_Kumar.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Aman Meena',
        role:'Hospitality Team Lead',
        image:images['Aman_Meena.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Thirunahari Milind ',
        role:'Outreach and Internal Lead',
        image:images['Milind.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Sai Lakshmi Harshitha',
        role:'Outreach and Internal Lead',
        image:images['Harshitha.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Parv Patel',
        role:'Outreach and Internal Lead',
        image:images['Parv.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Technical Team Lead',
        role:'Aryan',
        image:images['Aryan.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Jugdeep Roy',
        role:'Design Head',
        image:images['Jugdeep.jpg'],
        mail:'',
        linkedin:''
    },
    {
        name:'Aashish Ev',
        role:'Design Head',
        image:'',
        mail:'',
        linkedin:''
    }
]

export default teamData;