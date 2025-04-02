import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile2, profile3,profile4,profile5,
         panel,turbine,batteries, member1, member2, member3, member4} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Contact",id:'contact'},
];

export const services = [
  {
    name:"Solar Panels",
    image:panel,
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Magni debitis expedita dolor`,
  },
  {
    name:"Wind Turbines",
    image:turbine,
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Magni debitis expedita dolor`,
  },
  {
    name:"Battery Storage Solutions",
    image:batteries,
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Magni debitis expedita dolor`,
  },
]

export const teams = [
  {
    name:"Kendrick Lamar",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Chester Bennington",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"LeBron James",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Michael Scofield",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Solar system massive installation",
    image:"https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg",
    category:"Solar Panel",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Empowering Communities: Solar Solutions for a Sustainable Future",
    image:"https://www.solarpowerworldonline.com/wp-content/uploads/2019/07/ips1.jpg",
    category:"Solar Panel",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Harvesting Sunshine: The Green Energy Initiative Project",
    image:"https://www.biscaynetimes.com/downloads/2317/download/6.jpg",
    category:"Solar Panel",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Wind and Solar Synergy: Hybrid Power Solutions for Tomorrow",
    image:"https://cdn.britannica.com/75/114975-159-38AE7632/Wind-turbines-Tehachapi-Calif.jpg",
    category:"Wind Turbine",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Power Vault: Solar Battery Storage Solutions",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd_ThhlfShBjbodGPZOKZR2v_IvCIMc1FRu8t9VFNAmGZttNxdVlMX87FUZ4Rk7m6eGS3OLKep06Fbr_IGpdN4zVJR1pPUKH5z2fiC9J3ThLwWotIn5PPBW3H_ezvr3xlPpDD30lD8JyGSFyDzkOEbgXHUEhXgiY1_hR93mwHQCzhKXPkyOWJ-FRbBHg/s1000/mumti%20power.jpg",
    category:"Solar Battery",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Eclipse Reserve: Innovative Solar Battery Integration",
    image:"https://energymall.ng/wp-content/uploads/2020/12/sunfit-solar-scaled.jpg",
    category:"Solar Battery",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Electric cars charging station",
    image: "https://i0.wp.com/calmatters.org/wp-content/uploads/2020/10/electric-vehicle-charging-stations.jpg",
    category: "Charging Station",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Electric cars charging station",
    image: "https://th.bing.com/th/id/OIP.ve4ZBC00S2I7wU3uVIm47wHaEK?rs=1&pid=ImgDetMain",
    category: "Charging Station",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Electric cars charging station",
    image: "https://www.motorbiscuit.com/wp-content/uploads/2021/08/Electric-Car-Charging-Stations.jpg",
    category: "Charging Station",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
 
];

export const contacts = [
  {
    name:"Email",
    value:"123@123gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+78045780112",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"CN Tower, Toronto, Canada",
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Home",id:'header'},
        {name:"About Us",id:'about'},
        {name:"Services",id:'services'},
        {name:"Team",id:'team'},
        {name:"Project",id:'project'},
        {name:"Clients",id:'testimonial'},
        {name:"FAQ",id:'faq'},
        {name:"Contact",id:'contact'},
      ]
    },
    {
        name:"Gallery",
        routes:[
          {name:"Privacy Policy"},
          {name:"Terms and Conditions"},
          {name:"Cookie Policy"},
        ]
      },
]


