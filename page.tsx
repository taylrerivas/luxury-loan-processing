
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, Clock, FileText, Shield, Star, Zap, Phone, Mail } from "lucide-react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-luxe-charcoal">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={120} height={40} alt="Luxury Loan Processing" className="h-9 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-70">How It Works</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#why" className="hover:opacity-70">Why Us</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <a href="#contact" className="ml-4">
            <button className="rounded-2xl px-5 py-2 bg-black text-white hover:bg-black/90">Get Started</button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ring-1 ring-neutral-200 bg-white mb-4">
              Luxury Experience • Broker & LO Focused
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              The <span className="underline decoration-black/20">Luxury Experience</span> behind your pipeline.
            </h1>
            <p className="mt-5 text-neutral-600 md:text-lg">
              White‑glove contract processing for elite Loan Officers and brokerages. We handle the docs, deadlines, and disclosures—so you can stay in the money‑making seat.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact"><button className="rounded-2xl px-6 py-2 bg-black text-white hover:bg-black/90">Book an Intake Call</button></a>
              <a href="#how" className="inline-flex items-center gap-2 text-sm hover:opacity-80">
                See how it works <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/>NMLS‑aware & compliance‑minded</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4"/>Fast turn times</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4"/>Concierge communication</div>
            </div>
          </div>

          <div className="rounded-2xl shadow-soft border border-neutral-200 p-6 bg-white">
            {!submitted ? (
              <form className="grid gap-3" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}}>
                <div className="grid md:grid-cols-2 gap-3">
                  <input required placeholder="Full Name" className="border rounded-xl px-3 py-2" />
                  <input required type="email" placeholder="Work Email" className="border rounded-xl px-3 py-2" />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <input required placeholder="Company / Brokerage" className="border rounded-xl px-3 py-2" />
                  <input placeholder="NMLS # (if applicable)" className="border rounded-xl px-3 py-2" />
                </div>
                <input required placeholder="Phone" className="border rounded-xl px-3 py-2" />
                <textarea placeholder="What products do you originate? (FHA, Conv, DSCR, HELOC, SBA, etc.)" className="border rounded-xl px-3 py-2 min-h-[100px]" />
                <button type="submit" className="rounded-2xl px-4 py-2 bg-black text-white hover:bg-black/90">Submit Inquiry</button>
                <p className="text-xs text-neutral-500">By submitting, you agree to be contacted about processing services.</p>
              </form>
            ) : (
              <div className="text-center py-4">
                <h3 className="text-lg font-medium">Thanks—you're on our list!</h3>
                <p className="text-neutral-600 mt-1 text-sm">We’ll reach out shortly to schedule your intake call.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
            <p className="text-neutral-600 mt-2">A refined, repeatable pipeline designed for speed and clarity.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {n:1, t:"Onboarding", d:"Sign our LO partnership, upload your lender list & overlays, and connect your preferred POCs."},
              {n:2, t:"File Intake", d:"We gather docs, stack the file to AUS/DU/LPA standards, and flag gaps before submission."},
              {n:3, t:"Processing", d:"Disclosures, VOEs, VVOEs, titles, HOI, appraisal, and condition management—handled."},
              {n:4, t:"Clear to Close", d:"Final conditions wrapped, CD balanced, and closing coordinated with your team."}
            ].map((s)=> (
              <div key={s.n} className="rounded-2xl border border-neutral-200 p-5 bg-white">
                <div className="text-base flex items-center gap-2 font-medium"><span className="h-7 w-7 rounded-full bg-black text-white grid place-items-center text-sm">{s.n}</span>{s.t}</div>
                <div className="pt-2 text-sm text-neutral-600">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">Products we process</h2>
            <p className="text-neutral-600 mt-2">Mortgage & business‑purpose options for your book of business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Agency & Gov",
                items: ["Conventional", "FHA", "VA", "USDA"],
                note: "Disclosures + AUS aligned workflows"
              },
              {
                title: "Investor Programs",
                items: ["DSCR", "Bank Statement", "P&L Only", "Short‑Term Rentals"],
                note: "Non‑QM expertise, investor‑savvy comms"
              },
              {
                title: "Equity & Biz Funding",
                items: ["HELOC/HELOAN", "Bridge", "SBA Packaging", "Working Capital"],
                note: "Brokered partner network, clean packaging"
              },
            ].map((col, i)=> (
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <h3 className="text-lg font-medium">{col.title}</h3>
                <ul className="text-sm text-neutral-700 space-y-1 mt-2">
                  {col.items.map((x)=> (
                    <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4" /> {x}</li>
                  ))}
                </ul>
                <p className="text-xs text-neutral-500 mt-3">{col.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Why LOs choose the Luxury Experience</h2>
            <ul className="mt-5 space-y-3 text-neutral-700">
              <li className="flex gap-3"><Star className="h-5 w-5 mt-0.5"/><span><span className="font-medium">White‑glove borrower comms</span> — concierge updates without babysitting.</span></li>
              <li className="flex gap-3"><FileText className="h-5 w-5 mt-0.5"/><span><span className="font-medium">Pristine files</span> — clean stacks that underwriters respect.</span></li>
              <li className="flex gap-3"><Shield className="h-5 w-5 mt-0.5"/><span><span className="font-medium">Compliance‑minded</span> — audit‑friendly, NMLS‑aware workflows.</span></li>
              <li className="flex gap-3"><Zap className="h-5 w-5 mt-0.5"/><span><span className="font-medium">Fast turn times</span> — speed without the chaos.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h3 className="text-lg font-medium mb-3">Partnership Tiers</h3>
            <div className="text-sm text-neutral-700 space-y-4">
              <div>
                <div className="font-medium">Per‑File Processing</div>
                <p className="text-neutral-600">Pay as you go. Ideal for independent LOs and boutique teams.</p>
              </div>
              <div>
                <div className="font-medium">Dedicated Pod</div>
                <p className="text-neutral-600">A named processor + backup. Perfect for high‑volume producers.</p>
              </div>
              <div>
                <div className="font-medium">Enterprise</div>
                <p className="text-neutral-600">Custom SLAs, reporting, and brand‑aligned borrower comms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">Simple, transparent pricing</h2>
            <p className="text-neutral-600 mt-2">Choose what fits your volume today—scale anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[{
              name:"Per‑File",
              price:"$995+",
              desc:"Flat per‑file fee; add‑ons for specialty programs.",
              features:["Initial disclosures & LE support","Third‑party order management","Condition clearing & CTC prep"]
            },{
              name:"Pod",
              price:"Custom",
              desc:"Dedicated processor + backup; volume‑based.",
              features:["SLA turn times","Weekly pipeline calls","Borrower comms in your brand"]
            },{
              name:"Enterprise",
              price:"Custom",
              desc:"For branches & multi‑state teams.",
              features:["Custom reporting","QC/Audit support","Lender‑overlay mapping"]
            }].map((p)=> (
              <div key={p.name} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <div className="text-lg flex items-baseline justify-between font-medium">
                  <span>{p.name}</span>
                  <span className="text-2xl">{p.price}</span>
                </div>
                <p className="text-neutral-600 mb-3">{p.desc}</p>
                <ul className="space-y-1 text-sm">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4" />{f}</li>
                  ))}
                </ul>
                <a href="#contact"><button className="mt-4 w-full rounded-2xl px-4 py-2 bg-black text-white hover:bg-black/90">Talk to Sales</button></a>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 mt-4">* Exact pricing varies by loan type, lender requirements, and state/regulatory factors.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
            <p className="text-neutral-600 mt-2">Straight answers to common questions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[{
              q:"Do you work inside our LOS?",
              a:"Yes. We adapt to your LOS (Encompass, LendingPad, etc.) and lender‑specific portals."
            },{
              q:"Will you talk to my borrowers?",
              a:"Absolutely—white‑label or co‑branded communication per your preference."
            },{
              q:"Turn times?",
              a:"File‑ready submissions within 24–48 business hours post‑intake; conditions cleared proactively."
            },{
              q:"What about compliance?",
              a:"We follow lender overlays, document retention best practices, and NMLS‑aware workflows."
            }].map((f,i)=> (
              <div key={i} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <h3 className="text-lg font-medium">{f.q}</h3>
                <p className="text-neutral-700 text-sm mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Let’s build your luxury processing pod</h2>
            <p className="text-neutral-600 mt-2">Tell us about your volume, lenders, and target products. We’ll propose the best tier for speed + service.</p>
            <div className="mt-6 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/>Book a call: <span className="font-medium">(###) ###‑####</span></div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/>Email: <span className="font-medium">intake@luxurylendingtx.com</span></div>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            {!submitted ? (
              <form className="grid gap-3" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}}>
                <input required placeholder="Full Name" className="border rounded-xl px-3 py-2" />
                <input required type="email" placeholder="Work Email" className="border rounded-xl px-3 py-2" />
                <input placeholder="Phone (optional)" className="border rounded-xl px-3 py-2" />
                <textarea placeholder="Tell us about your pipeline + target products" className="border rounded-xl px-3 py-2 min-h-[100px]" />
                <button type="submit" className="rounded-2xl px-4 py-2 bg-black text-white hover:bg-black/90">Send</button>
                <p className="text-xs text-neutral-500">We’ll reply within one business day.</p>
              </form>
            ) : (
              <div className="text-center py-4">
                <h3 className="text-lg font-medium">Message received</h3>
                <p className="text-neutral-600 mt-1 text-sm">Our team will reach out shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Luxury Loan Processing. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
