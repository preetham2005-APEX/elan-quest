"use client";

import Image from "next/image";

const EXAM_DETAILS_ROWS = [
  {
    label: "Exam Organizing Body",
    value: "Elan & nVision, IIT Hyderabad",
  },
  {
    label: "Eligibility",
    value: "Students from classes 6 - 12",
  },
  {
    label: "Application Process",
    value: "Via Unstop",
  },
  {
    label: "Exam Dates",
    value: (
      <div className="space-y-0.5 sm:space-y-1">
        <p>Round 1: December 05, 2026</p>
        <p>Round 2: To Be Announced</p>
      </div>
    ),
  },
  {
    label: "Exam Mode",
    value: (
      <div className="space-y-0.5 sm:space-y-1">
        <p>Round 1: Online</p>
        <p>Round 2: Offline</p>
      </div>
    ),
  },
  {
    label: "Fee of registration",
    value: "₹ 350",
  },
  {
    label: "Objective",
    value:
      "To identify young academic talent by promoting conceptual learning, logical reasoning and creative problem solving",
  },
  {
    label: "Duration",
    value: (
      <div className="space-y-0.5 sm:space-y-1">
        <p>90 minutes ( for classes 6th - 10th)</p>
        <p>120 minutes ( for classes 11th, 12th)</p>
      </div>
    ),
  },
];

export default function Results() {
  return (
    <div className="relative flex min-h-screen md:h-screen w-full flex-col md:overflow-hidden bg-[#F0ECCF] font-['Nexa_Text'] text-[#092B55]">
      {/* Pattern Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url('/pics/pattern.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Hero Header Banner (Pinned / Stays in place) */}
      <header className="relative z-30 w-full shrink-0 overflow-hidden shadow-[0_12px_24px_-6px_rgba(0,0,0,0.12)]">
        {/* USER FIGMA HERO BANNER BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/pics/exam-hero-bg.png"
            alt="Exam Details Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* HERO CONTAINER */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-16">
          <h1
            className="
              shrink-0
              font-['Nexa_Text']
              text-[28px]
              sm:text-[38px]
              md:text-[56px]
              lg:text-[64px]
              font-black
              uppercase
              tracking-tight
              text-[#092B55]
              leading-none
            "
          >
            EXAM DETAILS
          </h1>

          <div
            className="
              relative
              h-[110px]
              w-[110px]
              shrink-0
              sm:h-[150px]
              sm:w-[150px]
              md:h-[220px]
              md:w-[220px]
              lg:h-[250px]
              lg:w-[250px]
            "
          >
            <Image
              src="/pics/exam.png"
              alt="Exam details"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area (Scrolls independently) */}
      <main className="relative z-10 w-full flex-1 md:overflow-y-auto">
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 space-y-10 sm:space-y-14 pb-28">
          {/* Introductory section */}
          <section className="space-y-3">
            <p className="font-['Nexa_Text'] text-[15px] sm:text-[18px] md:text-[22px] font-normal leading-relaxed text-[#092B55]">
              The competition will be conducted in two rounds—an online Round 1,
              followed by an offline Round 2. The top performers from each class
              will be selected for Round 2 which will be an offline exam at the
              IIT Hyderabad campus. These students can enjoy exclusive campus
              experiences, including a detailed campus tour.
            </p>
          </section>

          {/* Table section */}
          <section className="w-full">
            <div className="w-full overflow-hidden border-2 border-[#092B55] font-['Nexa_Text'] text-[#092B55]">
              {EXAM_DETAILS_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[42%_58%] sm:grid-cols-[38%_62%] md:grid-cols-[450px_1fr] text-[13px] sm:text-[16px] md:text-[22px] ${
                    idx !== EXAM_DETAILS_ROWS.length - 1
                      ? "border-b-2 border-[#092B55]"
                      : ""
                  }`}
                >
                  <div className="border-r-2 border-[#092B55] px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 font-bold flex items-center">
                    {row.label}
                  </div>
                  <div className="px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 font-normal flex items-center leading-relaxed">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DATES section */}
          <section className="space-y-5">
            <h2 className="font-['Nexa_Text'] text-[32px] sm:text-[44px] md:text-[56px] font-bold uppercase leading-none text-[#092B55]">
              DATES
            </h2>
            <div className="space-y-2 sm:space-y-3 font-['Nexa_Text'] text-[14px] sm:text-[18px] md:text-[26px] font-bold text-black">
              <p>Registration Opens: October 29, 2026</p>
              <p>Registration Closes: November 30, 2026</p>
              <p>Quest Olympiad Round 1: December 05, 2026</p>
              <p>Quest Olympiad Round 2: (Date To Be Announced)</p>
              <p>Prize Distribution: (Date To Be Announced)</p>
            </div>
          </section>

          {/* ELIGIBILITY section */}
          <section className="space-y-5">
            <h2 className="font-['Nexa_Text'] text-[32px] sm:text-[44px] md:text-[56px] font-bold uppercase leading-none text-[#092B55]">
              ELIGIBILITY
            </h2>
            <div className="space-y-4 font-['Nexa_Text'] text-[14px] sm:text-[18px] md:text-[24px] font-normal leading-relaxed text-[#0F2851]">
              <p>
                Students currently enrolled in Classes 6th to 12th from any
                recognized school are eligible to participate in Nexus QUEST.
              </p>
              <p>
                Students from all educational boards (CBSE, ICSE, State boards)
                within the specified grade range can apply for the examination.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
