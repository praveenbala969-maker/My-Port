import React, { useState, useEffect } from 'react';
import { CaseStudyDetail } from './components/CaseStudyDetail';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  // Check URL hash on load for direct links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#koenig' || hash === '#case-study-koenig') {
        setSelectedCaseStudy('koenig');
      } else if (!hash || hash === '#work' || hash === '#about' || hash === '#leadership' || hash === '#resume') {
        setSelectedCaseStudy(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openCaseStudy = (id: string) => {
    setSelectedCaseStudy(id);
    window.location.hash = `case-study-${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedCaseStudy === 'koenig') {
    return <CaseStudyDetail onBack={closeCaseStudy} />;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased font-sans">
      {/* Top Navigation */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 text-base sm:text-lg tracking-tight">
              <span className="font-extrabold text-black">BALA</span>
              <span className="font-normal text-neutral-800">MURUGAN</span>
            </a>

            {/* Nav items */}
            <nav className="flex items-center space-x-6 sm:space-x-10 text-xs sm:text-[13px] font-bold tracking-wider text-neutral-800">
              <a href="#work" className="hover:text-black transition-colors uppercase">
                WORK
              </a>
              <a href="#leadership" className="hover:text-black transition-colors uppercase">
                LEADERSHIP
              </a>
              <a href="#about" className="hover:text-black transition-colors uppercase">
                ABOUT
              </a>
              <a href="#resume" className="hover:text-black transition-colors uppercase">
                RESUME
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-20">
        <div className="bg-[#eff6fc] border border-sky-100/80 rounded-3xl sm:rounded-[36px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_4px_30px_rgba(186,230,253,0.15)]">
          <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-10 md:gap-14">
            {/* Circular Avatar Photo */}
            <div className="shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-neutral-200 shadow-sm border border-neutral-200/60">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                  alt="Bala Murugan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Banner Text and Actions */}
            <div className="flex-1 max-w-3xl">
              {/* Category Eyebrow */}
              <div className="text-xs sm:text-[13px] font-bold text-[#3b5bfd] tracking-wider uppercase mb-3 sm:mb-4">
                ENTERPRISE SYSTEMS, COMPLEX WORKFLOWS, END TO END DESIGN
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-5 sm:mb-6 leading-tight">
                Hi, I'm Bala.
              </h1>

              {/* Bio Description */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal mb-8 sm:mb-10">
                I am a seasoned <strong className="font-bold text-neutral-900">UX & Product Design Lead</strong> with{' '}
                <strong className="font-bold text-neutral-900">9+ years</strong> of experience designing{' '}
                <strong className="font-bold text-neutral-900">Enterprise Platforms</strong>,{' '}
                <strong className="font-bold text-neutral-900">Complex Workflows</strong>, and{' '}
                <strong className="font-bold text-neutral-900">Intuitive Web Experiences</strong>. I help teams turn sophisticated product challenges into clean, accessible, and high-impact digital solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black text-white rounded-full font-bold text-sm sm:text-[15px] hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
                >
                  <span>Jump to Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>

                <a
                  href="#leadership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black border-2 border-black rounded-full font-bold text-sm sm:text-[15px] hover:bg-neutral-50 transition-all active:scale-95"
                >
                  <span>View Leadership</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric Stat Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {/* Card 1 */}
          <div className="bg-white border border-[#bfd0fe] rounded-[26px] p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(191,208,254,0.35)] hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-black tracking-tight">
                9+
              </div>
              <div className="text-sm sm:text-[15px] font-bold text-neutral-900 mt-2">
                years of experience
              </div>
              <div className="h-px bg-neutral-100 my-4" />
              <p className="text-sm sm:text-[15px] font-semibold text-neutral-700 leading-relaxed">
                Across corporate enterprise, high-growth AI startups, and specialized design systems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#bfd0fe] rounded-[26px] p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(191,208,254,0.35)] hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-black tracking-tight">
                15+
              </div>
              <div className="text-sm sm:text-[15px] font-bold text-neutral-900 mt-2">
                websites & apps launched
              </div>
              <div className="h-px bg-neutral-100 my-4" />
              <p className="text-sm sm:text-[15px] font-semibold text-neutral-700 leading-relaxed">
                End-to-end digital solutions, web applications, and multi-platform AI tools.
              </p>
            </div>
          </div>

          {/* Card 3 (AI Impact / Measurable Outcome) */}
          <div className="bg-white border border-[#bfd0fe] rounded-[26px] p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(191,208,254,0.35)] hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-black tracking-tight">
                40%+
              </div>
              <div className="text-sm sm:text-[15px] font-bold text-neutral-900 mt-2">
                efficiency boost
              </div>
              <div className="h-px bg-neutral-100 my-4" />
              <p className="text-sm sm:text-[15px] font-semibold text-neutral-700 leading-relaxed">
                Measured user productivity gains & cost avoidance through streamlined AI workflow automation.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* UX Design Case Studies Section - Full Width Background */}
      <section className="w-full bg-[#f4f7fb] py-20 sm:py-24 border-t border-b border-[#e2e8f0]" id="work">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-xs sm:text-[13px] font-bold text-[#3b5bfd] tracking-widest uppercase mb-3">
              DESIGN
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-black tracking-tight mb-3">
              UX Design Case Studies
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-2xl mx-auto">
              Hands-on design examples highlighting process, deliverables, and impact
            </p>
          </div>

          {/* Case Studies Container - 4 Cards (2 Left, 2 Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Case Study Card 1 */}
            <div className="bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_-8px_rgba(59,91,253,0.18),0_6px_18px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Mockup Container */}
                <div className="bg-gradient-to-br from-[#f0f6ff] via-[#e8f1fd] to-[#f4f9ff] rounded-2xl p-5 sm:p-6 relative overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[250px] border border-blue-100/60 mb-6">
                  {/* Laptop Mockup Box */}
                  <div className="w-full max-w-sm bg-neutral-900 rounded-xl p-2 shadow-2xl border border-neutral-800 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700/60 aspect-[16/10] relative">
                      <div className="bg-slate-800/90 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-700">
                        <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        <div className="ml-2 bg-slate-700/80 rounded px-2 py-0.5 text-[9px] text-slate-300 flex-1 max-w-[150px] truncate">
                          koenig-solutions.com
                        </div>
                      </div>
                      <div className="p-3 bg-slate-950 h-full flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-sky-400">Koenig Learning Hub</span>
                            <span className="text-[8px] bg-sky-950 text-sky-300 px-1.5 py-0.5 rounded-full border border-sky-800">1-on-1 & Live</span>
                          </div>
                          <div className="text-[11px] font-bold text-white">Global IT Training & Certifications</div>
                          <div className="grid grid-cols-3 gap-1 pt-1">
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Cloud & DevOps</div>
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">AI & Data</div>
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Cybersecurity</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Overlay Card */}
                  <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-sm border border-neutral-200/80 rounded-xl p-2.5 shadow-lg max-w-[160px] hidden sm:block">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-wider">Live Learning</span>
                    </div>
                    <div className="text-[10px] font-bold text-neutral-900">1-on-1 Training Portal</div>
                  </div>
                </div>

                {/* Brand & Tags Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900 text-sm">
                    <span className="text-black font-extrabold text-base tracking-tight">Koenig Solutions</span>
                    <span className="text-neutral-400 font-light">•</span>
                    <span className="text-neutral-600 text-xs font-semibold">EdTech, B2B</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200/60 text-[11px] font-semibold rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      Before & After Showcase
                    </span>
                    <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-semibold rounded-full">
                      Course Discovery
                    </span>
                  </div>
                </div>

                {/* Case Study Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight leading-snug mb-2.5 group-hover:text-[#3b5bfd] transition-colors">
                  Complete Platform Redesign and Experience Architecture for Koenig Solutions
                </h3>

                {/* Case Study Description */}
                <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed mb-6">
                  Led the complete end-to-end UX redesign for a global IT training pioneer, simplifying discovery across 5,000+ certification courses, engineering 1-on-1 flexible scheduling, and streamlining lead conversion for learners in 195+ countries.
                </p>

                {/* Project Metadata Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 pb-5 border-t border-b border-neutral-100 mb-6">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      My Role
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      Lead UX Designer
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Design & Frontend
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Platform Scale
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      5,000+ Courses
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      195+ Countries
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Key Impact
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-blue-600 mt-1">
                      +44% Bookings
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      -38% Funnel Drop
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openCaseStudy('koenig')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full font-bold text-xs sm:text-sm hover:bg-neutral-800 transition-all duration-200 active:scale-95 shadow-sm"
                >
                  <span>Read Case Study</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="https://www.koenig-solutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-neutral-600 hover:text-black font-semibold text-xs sm:text-sm rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <span>Live Site</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study Card 2 */}
            <div className="bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_-8px_rgba(59,91,253,0.18),0_6px_18px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Mockup Container */}
                <div className="bg-gradient-to-br from-[#eff8ff] via-[#e1f0fe] to-[#edf6fe] rounded-2xl p-5 sm:p-6 relative overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[250px] border border-sky-100/60 mb-6">
                  {/* Laptop Mockup Box */}
                  <div className="w-full max-w-sm bg-neutral-900 rounded-xl p-2 shadow-2xl border border-neutral-800 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700/60 aspect-[16/10] relative">
                      <div className="bg-slate-800/90 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-700">
                        <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        <div className="ml-2 bg-slate-700/80 rounded px-2 py-0.5 text-[9px] text-slate-300 flex-1 max-w-[120px] truncate">
                          agentic.ai/orchestrator
                        </div>
                      </div>
                      <div className="p-3 bg-slate-950 h-full flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-indigo-400">Agentic Engine</span>
                            <span className="text-[8px] bg-indigo-950 text-indigo-300 px-1.5 py-0.5 rounded-full border border-indigo-800">Production</span>
                          </div>
                          <div className="text-[11px] font-bold text-white">Multi-Agent Workflow UI</div>
                          <div className="grid grid-cols-2 gap-1.5 pt-1">
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Prompt Optimizer</div>
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">HITL Review</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Overlay Card */}
                  <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-sm border border-neutral-200/80 rounded-xl p-2.5 shadow-lg max-w-[150px] hidden sm:block">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-wider">Autonomous</span>
                    </div>
                    <div className="text-[10px] font-bold text-neutral-900">Task Copilot</div>
                  </div>
                </div>

                {/* Brand & Tags Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900 text-sm">
                    <span className="text-black font-extrabold text-base tracking-tight">AI Systems</span>
                    <span className="text-neutral-400 font-light">•</span>
                    <span className="text-neutral-600 text-xs font-semibold">Workflow Co</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-semibold rounded-full">
                      Gen AI
                    </span>
                    <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-semibold rounded-full">
                      Agentic UX
                    </span>
                  </div>
                </div>

                {/* Case Study Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight leading-snug mb-2.5 group-hover:text-[#3b5bfd] transition-colors">
                  Designing Human-AI Collaboration for Complex Workflows
                </h3>

                {/* Case Study Description */}
                <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed mb-6">
                  Architected multi-agent orchestration interfaces and human-in-the-loop review systems, enabling seamless handover between AI tasks and specialists.
                </p>

                {/* Project Metadata Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 pb-5 border-t border-b border-neutral-100 mb-6">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      My Role
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      AI UX Lead
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      System & Flow Design
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Platform
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      SaaS / Web App
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Agentic Orchestrator
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Deliverables
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      Human-in-Loop UI
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Prompt UX Guidelines
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black rounded-full font-bold text-xs sm:text-sm text-black hover:bg-neutral-900 hover:text-white transition-all duration-200 active:scale-95"
                >
                  <span>View Work</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Case Study Card 3 */}
            <div className="bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_-8px_rgba(59,91,253,0.18),0_6px_18px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Mockup Container */}
                <div className="bg-gradient-to-br from-[#f5f3ff] via-[#ede9fe] to-[#f8f7ff] rounded-2xl p-5 sm:p-6 relative overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[250px] border border-purple-100/60 mb-6">
                  {/* Laptop Mockup Box */}
                  <div className="w-full max-w-sm bg-neutral-900 rounded-xl p-2 shadow-2xl border border-neutral-800 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700/60 aspect-[16/10] relative">
                      <div className="bg-slate-800/90 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-700">
                        <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        <div className="ml-2 bg-slate-700/80 rounded px-2 py-0.5 text-[9px] text-slate-300 flex-1 max-w-[120px] truncate">
                          copilot.ai/analytics
                        </div>
                      </div>
                      <div className="p-3 bg-slate-950 h-full flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-purple-400">GenAI Copilot</span>
                            <span className="text-[8px] bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded-full border border-purple-800">Intelligence</span>
                          </div>
                          <div className="text-[11px] font-bold text-white">Natural Language Insights</div>
                          <div className="grid grid-cols-3 gap-1 pt-1">
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Text2SQL</div>
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Chart Gen</div>
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Deep Dive</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Overlay Card */}
                  <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-sm border border-neutral-200/80 rounded-xl p-2.5 shadow-lg max-w-[150px] hidden sm:block">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-wider">Copilot AI</span>
                    </div>
                    <div className="text-[10px] font-bold text-neutral-900">Query Assistant</div>
                  </div>
                </div>

                {/* Brand & Tags Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900 text-sm">
                    <span className="text-black font-extrabold text-base tracking-tight">Intelligence AI</span>
                    <span className="text-neutral-400 font-light">•</span>
                    <span className="text-neutral-600 text-xs font-semibold">Data Systems</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-semibold rounded-full">
                      Gen AI Analytics
                    </span>
                    <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-semibold rounded-full">
                      Product UX
                    </span>
                  </div>
                </div>

                {/* Case Study Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight leading-snug mb-2.5 group-hover:text-[#3b5bfd] transition-colors">
                  Generative AI Copilot for Enterprise Data Intelligence
                </h3>

                {/* Case Study Description */}
                <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed mb-6">
                  Transformed raw SQL queries into conversational intelligence, designing intuitive prompt-guided analytics with visual feedback & explanation transparency.
                </p>

                {/* Project Metadata Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 pb-5 border-t border-b border-neutral-100 mb-6">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      My Role
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      Lead UX Designer
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Prompt-to-UI Strategy
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Platform
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      Analytics Cloud
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Responsive Web
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Deliverables
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      Data Visualizations
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Copilot UX Flows
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black rounded-full font-bold text-xs sm:text-sm text-black hover:bg-neutral-900 hover:text-white transition-all duration-200 active:scale-95"
                >
                  <span>View Work</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Case Study Card 4 */}
            <div className="bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_-8px_rgba(59,91,253,0.18),0_6px_18px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Mockup Container */}
                <div className="bg-gradient-to-br from-[#f0fdf4] via-[#e6f9ed] to-[#f4fcf7] rounded-2xl p-5 sm:p-6 relative overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[250px] border border-emerald-100/60 mb-6">
                  {/* Laptop Mockup Box */}
                  <div className="w-full max-w-sm bg-neutral-900 rounded-xl p-2 shadow-2xl border border-neutral-800 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700/60 aspect-[16/10] relative">
                      <div className="bg-slate-800/90 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-700">
                        <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        <div className="ml-2 bg-slate-700/80 rounded px-2 py-0.5 text-[9px] text-slate-300 flex-1 max-w-[120px] truncate">
                          designsystem.io/ds
                        </div>
                      </div>
                      <div className="p-3 bg-slate-950 h-full flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-emerald-400">Design System</span>
                            <span className="text-[8px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-800">Unified UI</span>
                          </div>
                          <div className="text-[11px] font-bold text-white">Tokenized Component System</div>
                          <div className="grid grid-cols-3 gap-1 pt-1">
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Design Tokens</div>
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Accessibility</div>
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-[8px] text-slate-300 font-medium">Patterns</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Overlay Card */}
                  <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-sm border border-neutral-200/80 rounded-xl p-2.5 shadow-lg max-w-[150px] hidden sm:block">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-wider">Multi-Platform</span>
                    </div>
                    <div className="text-[10px] font-bold text-neutral-900">Unified Tokens</div>
                  </div>
                </div>

                {/* Brand & Tags Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900 text-sm">
                    <span className="text-black font-extrabold text-base tracking-tight">Fintech Scale</span>
                    <span className="text-neutral-400 font-light">•</span>
                    <span className="text-neutral-600 text-xs font-semibold">Design Platform</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-semibold rounded-full">
                      Design System
                    </span>
                    <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-semibold rounded-full">
                      Service Design
                    </span>
                  </div>
                </div>

                {/* Case Study Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight leading-snug mb-2.5 group-hover:text-[#3b5bfd] transition-colors">
                  End-to-End Design System & Scalable Service Architecture
                </h3>

                {/* Case Study Description */}
                <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed mb-6">
                  Created an enterprise-wide tokenized design system and unified UX guidelines, accelerating sprint velocity by 50% across 8 product engineering squads.
                </p>

                {/* Project Metadata Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 pb-5 border-t border-b border-neutral-100 mb-6">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      My Role
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      Systems Architect
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Foundations & Tokens
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Platform
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      Multi-Platform
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      Web & Mobile SDKs
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Deliverables
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 mt-1">
                      40+ UI Components
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 mt-0.5">
                      WCAG AA Guidelines
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black rounded-full font-bold text-xs sm:text-sm text-black hover:bg-neutral-900 hover:text-white transition-all duration-200 active:scale-95"
                >
                  <span>View Work</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
