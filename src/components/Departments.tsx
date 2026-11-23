"use client";
import SectionHeading from "./SectionHeading";
import { Activity, HeartPulse, Microscope, Stethoscope, Baby, ShieldCheck, ArrowUpRight } from "./Icons";
const departments = [
 {n:"01",icon:HeartPulse,title:"General Medicine",desc:"Assessment, diagnosis and ongoing support for everyday health concerns."},
 {n:"02",icon:Activity,title:"General Surgery",desc:"Surgical consultation and care with a focus on safety and recovery."},
 {n:"03",icon:Microscope,title:"Gastroenterology",desc:"Advanced gastro care, endoscopy and colonoscopy services as listed by the hospital."},
 {n:"04",icon:Stethoscope,title:"Orthopaedics",desc:"Care for bones, joints, mobility and musculoskeletal concerns."},
 {n:"05",icon:Baby,title:"Obstetrics & Gynaecology",desc:"Supportive women’s health, maternity and gynaecological care."},
 {n:"06",icon:ShieldCheck,title:"Diabetology",desc:"Guidance and monitoring to support long-term diabetes management."},
];
export default function Departments() { return <section className="section departments" id="departments"><div className="container"><SectionHeading kicker="OUR AREAS OF CARE" title="Expertise for" accent="every chapter." copy="Explore key specialties and services highlighted across Swathi Shree Hospital’s public information. Contact the hospital to confirm availability and appointment details."/><div className="department-grid">{departments.map(d=><article className="department-card" key={d.n}><div className="card-top"><span>{d.n}</span><d.icon size={26}/></div><h3>{d.title}</h3><p>{d.desc}</p><a href="#contact" aria-label={`Enquire about ${d.title}`}><ArrowUpRight/></a></article>)}</div></div></section> }
