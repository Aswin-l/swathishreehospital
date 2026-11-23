"use client";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Bed, Microscope, ShieldCheck, Activity, ArrowUpRight } from "./Icons";
const items: { title: string; desc: string; Icon: typeof Bed }[] = [
 { title: "Modern clinical environment", desc: "Facilities and equipment supporting patient care.", Icon: Bed },
 { title: "Diagnostic support", desc: "Contact the hospital to confirm available investigations.", Icon: Microscope },
 { title: "Surgical care", desc: "Consultation and surgical services listed by the hospital.", Icon: ShieldCheck },
 { title: "Advanced gastro care", desc: "Endoscopy and colonoscopy services highlighted in public posts.", Icon: Activity },
];
export default function Facilities(){return <section className="section facilities" id="facilities"><div className="container"><div className="facilities-top"><SectionHeading kicker="CARE & FACILITIES" title="Designed around" accent="better care." copy="A considered healthcare experience is built from clinical capability, clear communication and attention to patient comfort."/></div><div className="facility-layout"><div className="facility-image"><Image src="/images/hospital-services-reference.jpg" alt="Hospital services reference" fill sizes="(max-width: 800px) 90vw, 55vw"/><span className="image-label">CARE · TECHNOLOGY · TRUST</span></div><div className="facility-list">{items.map(({title,desc,Icon},i)=><div className="facility-item" key={title}><span className="facility-index">0{i+1}</span><div className="facility-icon"><Icon size={21}/></div><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="facility-arrow"/></div>)}</div></div></div></section>}
