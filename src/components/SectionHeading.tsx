"use client";
export default function SectionHeading({kicker,title,accent,copy,light=false}:{kicker:string;title:string;accent:string;copy:string;light?:boolean}) {
 return <div className={`section-heading ${light?"light":""}`}><span className="eyebrow"><i className="eyebrow-dot"/>{kicker}</span><h2>{title} <em>{accent}</em></h2><p>{copy}</p></div>;
}
