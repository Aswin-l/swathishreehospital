"use client";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/lib/store";
import { updateDraft, markEnquiryPrepared } from "@/features/enquiries/enquirySlice";
import { ArrowUpRight, Check } from "./Icons";
export default function EnquiryForm(){
 const dispatch=useDispatch<AppDispatch>(); const draft=useSelector((s:RootState)=>s.enquiries.draft); const [sent,setSent]=useState(false);
 const change=(field:keyof typeof draft,value:string)=>dispatch(updateDraft({[field]:value}));
 const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();dispatch(markEnquiryPrepared());const phone=(process.env.NEXT_PUBLIC_HOSPITAL_WHATSAPP||"918686863147").replace(/\D/g,"");const msg=`Hello Swathi Shree Hospital, I would like to enquire.\\nName: ${draft.name}\\nPhone: ${draft.phone}\\nDepartment: ${draft.department}\\nMessage: ${draft.message}`;window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank","noopener,noreferrer");setSent(true);};
 return <form className="enquiry-form" onSubmit={submit}><div className="form-row"><label>Your name<input required value={draft.name} onChange={e=>change("name",e.target.value)} placeholder="Enter your name"/></label><label>Phone number<input required inputMode="tel" pattern="[0-9+() -]{8,18}" value={draft.phone} onChange={e=>change("phone",e.target.value)} placeholder="Your contact number"/></label></div><label>Area of enquiry<select value={draft.department} onChange={e=>change("department",e.target.value)}>{["General enquiry","General Medicine","General Surgery","Gastroenterology","Orthopaedics","Obstetrics & Gynaecology","Diabetology","Other"].map(x=><option key={x}>{x}</option>)}</select></label><label>How can we help?<textarea rows={4} value={draft.message} onChange={e=>change("message",e.target.value)} placeholder="Share a little about your enquiry"/></label><button className="button button-primary form-submit" type="submit">Continue on WhatsApp <ArrowUpRight size={18}/></button>{sent&&<p className="form-success"><Check size={16}/> WhatsApp has been opened with your enquiry details. Please send the message there.</p>}<small className="privacy-note">Please do not include sensitive medical records or urgent emergency details in this form.</small></form>;
}
