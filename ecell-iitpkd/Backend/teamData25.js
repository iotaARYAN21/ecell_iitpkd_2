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
        name:'Siddharth Bharti',
        role:'Head',
        image:'',
        mail:'',
        linkedin:''
    },
    {
        name:'Aryan Mathur',
        role:'Mentor',
        image:images['ARYAN_MATHUR.jpg'],
        mail:'122201017@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aryannmathur/'
    },
    {
        name:'Joy Patel',
        role:'Mentor',
        image:images['JOY.jpg'],
        mail:'132201022@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/joy-patel-7174a6250/'
    },
    {
        name:'Ananthakrishnan',
        role:'Deputy Head',
        image:images['Ananthakrishnan.jpg'],
        mail:'122301003@smail.iitpdk.ac.in',
        linkedin:'www.linkedin.com/in/anantha-krishnan-thulasiraman-647b621b1'
    },
    {
        name:'Emmanuel',
        role:'Deputy Head',
        image:images['Emmanuel_Johnson.jpg'],
        mail:'122401015@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/emmanuel-johnson-618598332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Shreyas',
        role:'Event Coordinator',
        image:images['Shreyas_vadthya.jpg'],
        mail:'112201038@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/shreyas-vadthya-788928250/'
    },
    {
        name:'Abhiraj',
        role:'Event Coordinator',
        image:images['Abhiraj_raje.jpg'],
        mail:'112401001@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/abhiraj-raje-a28828278?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdYkNmT8iSGeO7A28FKz9aw%3D%3D'
    },
    {
        name:'Priyam Sahu',
        role:'PG Lead',
        image:images['PRIYAM.jpg'],
        mail:'222405012@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/priyam-sahu-211b99268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
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
        mail:'142401037@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/mithil-reddy-67ab22366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Aashutosh',
        role:'Hospitality Team Lead',
        image:images['Aashutosh.jpg'],
        mail:'102201025@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aashutosh-kr-ray-9b505b312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
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
        mail:'122401004@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aman-gahlot-886712331?trk=contact-info'
    },
    {
        name:'Thirunahari Milind ',
        role:'Outreach and Internal Lead',
        image:images['Milind.jpg'],
        mail:'102401035@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/milind-thirunahari-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Lakshmi Harshitha',
        role:'Outreach and Internal Lead',
        image:images['Harshitha.jpg'],
        mail:'132201004@smail.iitpkd.ac.in',
        linkedin:'https://in.linkedin.com/in/harshitha-gandluru'
    },
    {
        name:'Parv Patel',
        role:'Outreach and Internal Lead',
        image:images['Parv.jpg'],
        mail:'142301041@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/parv-patel-5422b3282'
    },
    {
        name:'Aryan',
        role:'Technical Team Lead',
        image:images['Aryan.jpg'],
        mail:'112301041@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aryan-b34639288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Jugdeep Roy',
        role:'Design Head',
        image:images['Jugdeep.jpg'],
        mail:'122301017@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/jugdeep-roy-a6a012368'
    },
    
]

export default teamData;