import React, { useState, useEffect } from 'react';
import { BeforeAfterShowcase } from './BeforeAfterShowcase';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Users,
  Target,
  Layers,
  Sparkles,
  Calendar,
  Clock,
  TrendingUp,
  BarChart3,
  Award,
  BookOpen,
  Search,
  Check,
  ChevronRight,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Quote,
  Zap,
  Filter,
  Sliders,
  CheckCheck,
  AlertCircle,
  HelpCircle,
  GitBranch,
  Laptop,
  CheckSquare,
  Globe,
  FileText,
  MousePointerClick,
  User,
  Briefcase,
  Building2,
  GraduationCap
} from 'lucide-react';

interface CaseStudyDetailProps {
  onBack: () => void;
  onSelectProject?: (id: string) => void;
}

export function CaseStudyDetail({ onBack, onSelectProject }: CaseStudyDetailProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeIAPath, setActiveIAPath] = useState<'b2c' | 'b2b'>('b2c');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'research', label: 'Research' },
    { id: 'architecture', label: 'Information Architecture' },
    { id: 'showcase', label: 'Before & After' },
    { id: 'solutions', label: 'Design Solutions' },
    { id: 'testing', label: 'Usability Testing' },
    { id: 'delivery', label: 'Handoff Specs' },
    { id: 'impact', label: 'Business Impact' },
    { id: 'learnings', label: 'Reflections' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 px-4 sm:px-8 py-3.5 transition-all shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-700 hover:text-blue-700 hover:bg-blue-50 border border-neutral-200 hover:border-blue-200 transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-xs text-neutral-400 font-medium">
              <span>/</span>
              <span className="text-neutral-900 font-semibold truncate max-w-[240px]">
                Koenig Solutions UX Redesign
              </span>
            </div>
          </div>

          {/* Quick jump navigation on tablet & desktop */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto max-w-xl py-1 scrollbar-none">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-full whitespace-nowrap transition-colors ${
                  activeSection === sec.id
                    ? 'bg-[#0694D1] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          <a
            href="https://www.koenig-solutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#3b5bfd] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm active:scale-95"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Content Article Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16">
        
        {/* Project Header / Hero Section (Clean Mild Blue Themed Card) */}
        <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200/60 uppercase tracking-wider">
              Case Study
            </span>
            <span className="px-3 py-1 bg-blue-50/60 text-blue-800 text-xs font-bold rounded-full border border-blue-100">
              EdTech / B2B Enterprise
            </span>
            <span className="px-3 py-1 bg-blue-50/60 text-blue-800 text-xs font-bold rounded-full border border-blue-100">
              Global Platform
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
            Complete Platform Redesign & Experience Architecture for Koenig Solutions
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal max-w-4xl">
            How I led the comprehensive end-to-end UX transformation for Koenig Solutions—a global IT training leader with over 30+ years of excellence—simplifying discovery and scheduling across 5,000+ certification courses and driving a 44% increase in qualified bookings.
          </p>

          {/* Project Metadata Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 bg-blue-50/30 border border-blue-100/80 rounded-2xl sm:rounded-3xl mt-6">
            <div className="border-r border-blue-100 pr-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60">
                My Role
              </div>
              <div className="text-sm sm:text-base font-bold text-neutral-900 mt-1">
                Lead UX Designer
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Research, IA, UI, Strategy & Frontend
              </div>
            </div>

            <div className="border-r border-blue-100 pr-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60">
                Timeline & Scope
              </div>
              <div className="text-sm sm:text-base font-bold text-neutral-900 mt-1">
                6 Months
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Global Platform Rollout
              </div>
            </div>

            <div className="border-r border-blue-100 pr-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60">
                Company Scale
              </div>
              <div className="text-sm sm:text-base font-bold text-neutral-900 mt-1">
                5,000+ Courses
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                195+ Countries • 350+ Trainers
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60">
                Key Outcomes
              </div>
              <div className="text-sm sm:text-base font-bold text-blue-600 mt-1">
                +44% Bookings
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                -38% Funnel Drop-off
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Executive Summary */}
        <section className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                1
              </span>
              Executive Summary
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/70">
              The Context
            </span>
          </div>

          <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>Koenig Solutions</strong> is a global IT training and certification pioneer founded in 1993, serving learners and corporate enterprises across <strong>195+ countries</strong> with an extensive catalog of <strong>5,000+ IT certification courses</strong> across official vendor authorizations including Microsoft, AWS, Cisco, Oracle, Google Cloud, CompTIA, and PMI.
            </p>
            <p>
              Despite delivering world-class 1-on-1 personalized training and maintaining a 99.1% on-time batch execution rate with 350+ certified instructors, the legacy web experience suffered from catalog overwhelm, confusing delivery modality choices, and an opaque booking process that led to high drop-offs among both individual IT professionals and enterprise procurement managers.
            </p>
            <p>
              As <strong>Lead UX Designer</strong>, I reimagined the digital ecosystem from the ground up: restructuring the massive catalog into a structured 3-tier taxonomy, engineering Koenig's signature 1-on-1 flexible scheduler, creating an interactive Course Detail Page (CDP), and designing a frictionless 3-field syllabus lead capture flow.
            </p>
          </div>

          {/* Key Pillars Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100/80 shadow-xs">
              <div className="text-xs font-bold text-neutral-900 mb-1">5,000+ Course Catalog</div>
              <div className="text-xs text-neutral-600">Restructured into vendor-authorized tiers and domain facets</div>
            </div>
            <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100/80 shadow-xs">
              <div className="text-xs font-bold text-neutral-900 mb-1">1-on-1 & FMAT Modalities</div>
              <div className="text-xs text-neutral-600">4-hour & 8-hour daily tracks with auto-synced timezone matrix</div>
            </div>
            <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100/80 shadow-xs">
              <div className="text-xs font-bold text-neutral-900 mb-1">Dual B2C / B2B Funnels</div>
              <div className="text-xs text-neutral-600">Frictionless syllabus dispatch + enterprise group quote routing</div>
            </div>
          </div>
        </section>

        {/* Section 2: The Challenge & Problem Space (Consistent Mild Blue Theme) */}
        <section id="challenge" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                2
              </span>
              The Challenge & Problem Space
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/70">
              Audit & Discovery
            </span>
          </div>

          <p className="text-neutral-600 text-base leading-relaxed">
            Through data telemetry audits, session recordings, and stakeholder interviews, we uncovered four critical bottlenecks paralyzing the user experience:
          </p>

          {/* 4 Consistent Mild Blue Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="p-5 border border-blue-200/80 bg-blue-50/30 rounded-2xl space-y-2.5 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-blue-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  Catalog Paralysis (5,000+ Courses)
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                  Friction #1
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                With 5,000+ courses across dozens of authorized vendors, users struggled to differentiate between overlapping certifications (e.g., Azure Fundamentals vs Azure Administrator), resulting in high bounce rates.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 border border-blue-200/80 bg-blue-50/30 rounded-2xl space-y-2.5 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-blue-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  Ambiguous Delivery Formats
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                  Friction #2
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Koenig's unique value proposition, flexible 1-on-1 training and custom time zones, was buried under generic marketing copy rather than presented as an interactive scheduling tool.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 border border-blue-200/80 bg-blue-50/30 rounded-2xl space-y-2.5 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-blue-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  Dense, Text-Heavy Course Pages
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                  Friction #3
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Course detail pages were walls of unformatted text. Critical decision factors like prerequisites, exam codes, and syllabus modules required excessive vertical scrolling.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-5 border border-blue-200/80 bg-blue-50/30 rounded-2xl space-y-2.5 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-blue-950 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  Disjointed B2B vs B2C Journeys
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                  Friction #4
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Enterprise buyers needing team quotes faced the exact same rigid cart funnel as individual students seeking a single certification, creating severe friction in corporate sales.
              </p>
            </div>
          </div>

          {/* Before vs After Friction Diagram */}
          <div className="p-5 bg-[#0a1128] border border-[#1e2d5a] text-white rounded-2xl space-y-3 mt-4">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-blue-400" />
              Journey Friction Transformation
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                <div className="text-slate-400 font-bold">Legacy Experience:</div>
                <div className="text-slate-300">Wall of text → Unclear schedule → Manual email inquiries → High cart abandonment (68%)</div>
              </div>
              <div className="p-3 bg-blue-950/60 border border-blue-800/80 rounded-xl space-y-1">
                <div className="text-sky-300 font-bold">Redesigned Experience:</div>
                <div className="text-slate-200">Smart Search → Instant 1-on-1 calendar slot → Clear syllabus preview → 2-step direct checkout (38% drop reduction)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Research & User Personas (Mild Blue Themed Cards) */}
        <section id="research" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                3
              </span>
              User Research & Target Archetypes
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/70">
              18 Interviews & 2,000+ Chat Logs
            </span>
          </div>

          <p className="text-neutral-600 text-base leading-relaxed">
            I synthesized behavioral telemetry and qualitative interviews to formulate two primary archetypes with divergent needs, budgets, and approval processes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Persona 1 */}
            <div className="p-6 border border-blue-200/90 bg-blue-50/40 rounded-2xl space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs border border-blue-200">
                    <User className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-neutral-900">David, Cloud Engineer</div>
                    <div className="text-xs font-semibold text-blue-700">Individual Upskiller (B2C)</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-white text-blue-800 px-2 py-1 rounded-full border border-blue-200">
                  Career Growth
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                <div className="bg-white p-3 rounded-xl border border-blue-100 space-y-1">
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-blue-600" />
                    Primary Motivation:
                  </div>
                  <p>Pass the AWS Solutions Architect exam within 3 weeks without taking full days off corporate work.</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-blue-100 space-y-1">
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                    Key Roadblock:
                  </div>
                  <p>Fixed full-day batch schedules clash with daytime job shifts. Needs flexible evening 4-hour slots and instant verification of official course materials.</p>
                </div>
              </div>
            </div>

            {/* Persona 2 */}
            <div className="p-6 border border-blue-200/90 bg-blue-50/40 rounded-2xl space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs border border-blue-200">
                    <Briefcase className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-neutral-900">Sarah, Enterprise L&D Lead</div>
                    <div className="text-xs font-semibold text-blue-700">Corporate Training Buyer (B2B)</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-white text-blue-800 px-2 py-1 rounded-full border border-blue-200">
                  Team Upskilling
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                <div className="bg-white p-3 rounded-xl border border-blue-100 space-y-1">
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-blue-600" />
                    Primary Motivation:
                  </div>
                  <p>Upskill a team of 35 engineers in Kubernetes & Security with customized dates, PO billing, and attendance tracking.</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-blue-100 space-y-1">
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                    Key Roadblock:
                  </div>
                  <p>Lacked an easy way to request customized bulk quotes or download formatted syllabi for internal management approval.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Information Architecture & Taxonomy */}
        <section id="architecture" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                4
              </span>
              Information Architecture & Navigation Overhaul
            </h2>
            <div className="flex items-center gap-1.5 bg-blue-50/80 p-1 rounded-full border border-blue-100">
              <button
                onClick={() => setActiveIAPath('b2c')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  activeIAPath === 'b2c' ? 'bg-blue-600 text-white shadow-xs' : 'text-blue-800 hover:text-blue-950'
                }`}
              >
                Individual Flow
              </button>
              <button
                onClick={() => setActiveIAPath('b2b')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  activeIAPath === 'b2b' ? 'bg-blue-600 text-white shadow-xs' : 'text-blue-800 hover:text-blue-950'
                }`}
              >
                Enterprise Flow
              </button>
            </div>
          </div>

          <p className="text-neutral-600 text-base leading-relaxed">
            To solve catalog overwhelm across Koenig's 5,000+ course offerings, I restructured the hierarchy into a clear 3-tiered taxonomy aligned with Koenig's authorized vendor relationships: <strong>Authorized Technology Vendor → Core Technology Domain → Certification Level</strong>, paired with Koenig's signature 4 delivery modalities.
          </p>

          {/* Visual Hierarchy Tree Diagram */}
          <div className="p-6 bg-[#0a1128] text-white rounded-2xl border border-[#1e2d5a] space-y-6">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-400" />
                Structured Taxonomy Architecture
              </span>
              <span className="text-[10px] text-sky-300 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                Level 1 to 3 Tiering
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-extrabold text-sky-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  Tier 1: Authorized Technology Vendors
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Microsoft, AWS, Cisco, Oracle, Google Cloud, VMware, CompTIA, Red Hat, EC-Council, PMI, ITIL, Scrum
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-extrabold text-sky-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  Tier 2: Core Technology Domains
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Cloud Computing, Cybersecurity, Data & AI, Networking & Infrastructure, DevOps & Agile, Project Management
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-extrabold text-sky-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  Tier 3: Certification Track & Level
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Fundamentals / Beginner → Associate Level → Professional / Expert → Specialty Lab Tracks
                </p>
              </div>
            </div>

            {/* Koenig's 4 Core Delivery Formats */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-3">
                Koenig Signature Delivery Modalities (Faceted Attributes)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-[11px]">1-on-1 Online Training</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Flexible start date • 4h/8h daily • Custom timezone</div>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-[11px]">Live-Online (ILO / LVC)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Guaranteed to run • Real-time interactive lab batches</div>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-[11px]">Classroom Training</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">In-person immersion across 50+ global hubs</div>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                  <div className="font-bold text-white text-[11px]">Fly-Me-a-Trainer (FMAT)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Certified instructor on-site at client enterprise HQ</div>
                </div>
              </div>
            </div>

            {/* Path visualization based on active toggle */}
            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
              <div className="text-xs font-bold text-white mb-2">
                {activeIAPath === 'b2c' ? 'Individual Learner Path: 3 Steps to Booking' : 'Enterprise & L&D Buyer Path: 3 Steps to Cohort Quote'}
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                  {activeIAPath === 'b2c' ? '1. Vendor & Domain Faceted Search' : '1. Corporate Catalog & FMAT Explorer'}
                </span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                  {activeIAPath === 'b2c' ? '2. Course Page (Syllabus & Quick Facts)' : '2. Team Size & Prerequisite Verification'}
                </span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-blue-600 text-white font-bold rounded">
                  {activeIAPath === 'b2c' ? '3. 1-on-1 Date Slot Selection / Demo' : '3. Corporate Group Quote & Billing Invoice'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Before & After Interface Evolution (Interactive Showcase) */}
        <section id="showcase" className="scroll-mt-20">
          <BeforeAfterShowcase />
        </section>

        {/* Section 6: Core Design Solutions (Consistent Mild Blue Theme) */}
        <section id="solutions" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-20">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                6
              </span>
              Key Design Solutions & Interactive Features
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/70">
              Core UX Deliverables
            </span>
          </div>

          {/* 4 Feature Solution Cards in Mild Blue Consistency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Solution 1 */}
            <div className="p-6 border border-blue-200/90 bg-blue-50/30 rounded-2xl space-y-4 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                  <Search className="w-4 h-4 text-blue-600" />
                  Solution 01
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Faceted Engine
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-950">
                Smart Catalog Explorer with Real-Time Facets
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Designed a fluid, instant search directory allowing learners to filter by Vendor, Delivery Mode (1-on-1 vs Group), Daily Pace (4hr/day vs 8hr/day), and Exam Voucher Inclusion with zero page reloads.
              </p>

              <div className="bg-white p-3.5 rounded-xl border border-blue-200 text-xs text-neutral-800 font-medium space-y-1 shadow-xs">
                <div className="text-blue-700 font-bold">Usability Outcome:</div>
                <p>Reduced average course discovery time from <strong>4.2 minutes to under 45 seconds</strong>.</p>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="p-6 border border-blue-200/90 bg-blue-50/30 rounded-2xl space-y-4 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  Solution 02
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Timezone Sync
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-950">
                1-on-1 Dynamic Scheduling Matrix
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Created an interactive calendar widget that auto-detects user time zones, displays live instructor capacity, and provides customizable 4-hour daily micro-batch options.
              </p>

              <div className="bg-white p-3.5 rounded-xl border border-blue-200 text-xs text-neutral-800 font-medium space-y-1 shadow-xs">
                <div className="text-blue-700 font-bold">Usability Outcome:</div>
                <p>Eliminated manual back-and-forth emails, increasing direct booking confirmations by <strong>52%</strong>.</p>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="p-6 border border-blue-200/90 bg-blue-50/30 rounded-2xl space-y-4 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Solution 03
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200">
                  High-Converting CDP
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-950">
                Structured Course Detail Page (CDP)
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Re-architected the course page layout into structured sticky sections: At-a-glance highlights (Course Code, Prerequisites, Exam Prep, Official Badge), interactive syllabus accordion, and 1-click Free Demo scheduling.
              </p>

              <div className="bg-white p-3.5 rounded-xl border border-blue-200 text-xs text-neutral-800 font-medium space-y-1 shadow-xs">
                <div className="text-blue-700 font-bold">Usability Outcome:</div>
                <p>Users can evaluate complete syllabus modules without losing their place in the booking workflow.</p>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="p-6 border border-blue-200/90 bg-blue-50/30 rounded-2xl space-y-4 transition-all hover:bg-blue-50/60 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                  <Users className="w-4 h-4 text-blue-600" />
                  Solution 04
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200">
                  B2B Fast-Track
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-950">
                Course Eligibility Check & Corporate Group Inquiries
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Separated individual learner booking from corporate team inquiries. Added instant prerequisite eligibility checks and dedicated corporate group discount enquiry channels for enterprise teams.
              </p>

              <div className="bg-white p-3.5 rounded-xl border border-blue-200 text-xs text-neutral-800 font-medium space-y-1 shadow-xs">
                <div className="text-blue-700 font-bold">Usability Outcome:</div>
                <p>Enterprise lead qualification and corporate group inquiries improved by <strong>34%</strong> in the first 90 days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Usability Testing & Iterative Validation */}
        <section id="testing" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                7
              </span>
              Usability Testing & Iterative Validation
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/70">
              3 Testing Rounds • 24 Users
            </span>
          </div>

          <p className="text-neutral-600 text-base leading-relaxed">
            To ensure the revamped architecture solved real-world learner friction, I conducted <strong>3 iterative testing rounds with 24 participants</strong> (14 individual engineers, 10 enterprise L&D leads) spanning North America, EMEA, and APAC.
          </p>

          {/* Usability Testing Scoreboard in Mild Blue */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-blue-50/30 border border-blue-100/80 rounded-2xl">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60">System Usability Scale (SUS)</div>
              <div className="text-2xl font-black text-blue-600">58 → 86.5 <span className="text-xs font-semibold text-blue-800">(+49%)</span></div>
              <div className="text-xs text-neutral-500">Jumped from marginal to top-tier "Excellent" rating</div>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60">Task Completion Rate</div>
              <div className="text-2xl font-black text-blue-600">95.8%</div>
              <div className="text-xs text-neutral-500">Up from 62% on the legacy catalog structure</div>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900/60">Average Time on Task</div>
              <div className="text-2xl font-black text-neutral-900">42s <span className="text-xs font-semibold text-blue-600">(-83%)</span></div>
              <div className="text-xs text-neutral-500">Drastically reduced from 4.2 minutes</div>
            </div>
          </div>

          {/* Key Iteration Findings */}
          <div className="space-y-3 pt-2">
            <div className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Key Usability Insights & Design Iterations
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50/40 border border-blue-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-950">
                  <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-[10px] font-bold">1</span>
                  <span>Time Zone Clarity</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Finding:</strong> International learners hesitated when booking due to UTC/GMT confusion.<br/>
                  <strong>Iteration:</strong> Added automatic browser geolocation detection with an instant time zone switch toggle right above the schedule picker.
                </p>
              </div>

              <div className="p-4 bg-blue-50/40 border border-blue-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-950">
                  <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-[10px] font-bold">2</span>
                  <span>Get Course Content (Lead Capture Modal)</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Finding:</strong> The syllabus download modal needed to capture essential qualified lead IDs without creating friction or abandonment.<br/>
                  <strong>Iteration:</strong> Designed the high-converting "Get the Course Content" modal with 3 core fields (Full Name, Email Address, Country dropdown), clear email dispatch confirmation, reCAPTCHA protection, and anti-spam guarantee.
                </p>
              </div>

              <div className="p-4 bg-blue-50/40 border border-blue-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-950">
                  <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-[10px] font-bold">3</span>
                  <span>Eligibility & Group Inquiry</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Finding:</strong> Learners and team leads were often unsure if they met strict technical prerequisites or qualified for corporate group pricing.<br/>
                  <strong>Iteration:</strong> Integrated an intuitive "Check Eligibility & Group Discount" module on course pages, giving instant prerequisite clarity and a fast-track inquiry channel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Delivery & Implementation - Handoff to Engineering */}
        <section id="delivery" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-12 scroll-mt-20">
          {/* Top Handoff Specs Header & Annotation Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                  DELIVERY & IMPLEMENTATION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                Handoff to Engineering
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                I prepared and led the comprehensive engineering handoff, translating high-level experience goals into rigorous design system specs, responsive layout matrices, and interactive behavior rules.
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                The handoff documented user flows across all four platform learning levels, component token usage, design decision rationale (not just pixel dimensions), and micro-interaction guidance for state changes, asynchronous course filters, and multi-step form validation.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full border border-blue-100">
                  GT Walsheim Pro Typography
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full border border-blue-100">
                  #0694D1 Primary Token Matrix
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full border border-blue-100">
                  16px Card Elevation System
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full border border-blue-100">
                  Interactive Button States
                </span>
              </div>
            </div>

            {/* Right Column: Exact Koenig Style Guide & Component Specification Card */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-lg space-y-5">
              {/* Style Guide Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black tracking-tight text-[#0694D1]">KOENIG</span>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">step forward</span>
                </div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                  Style Guide & Specs
                </div>
              </div>

              {/* 1. Official Color Palette Swatches */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Primary & Secondary Palette
                </div>
                <div className="grid grid-cols-5 gap-2">
                  <div className="space-y-1 text-center">
                    <div className="h-10 rounded-lg shadow-xs border border-slate-200 bg-[#0694D1]" />
                    <div className="text-[9px] font-mono text-slate-700 font-bold">#0694D1</div>
                    <div className="text-[8px] text-slate-400">Primary Blue</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="h-10 rounded-lg shadow-xs border border-slate-200 bg-[#485058]" />
                    <div className="text-[9px] font-mono text-slate-700 font-bold">#485058</div>
                    <div className="text-[8px] text-slate-400">Slate Charcoal</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="h-10 rounded-lg shadow-xs border border-slate-200 bg-[#22262A]" />
                    <div className="text-[9px] font-mono text-slate-700 font-bold">#22262A</div>
                    <div className="text-[8px] text-slate-400">Dark Onyx</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="h-10 rounded-lg shadow-xs border border-slate-200 bg-[#F0F4FF]" />
                    <div className="text-[9px] font-mono text-slate-700 font-bold">#F0F4FF</div>
                    <div className="text-[8px] text-slate-400">Ice Tint</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="h-10 rounded-lg shadow-xs border border-slate-200 bg-[#083146]" />
                    <div className="text-[9px] font-mono text-slate-700 font-bold">#083146</div>
                    <div className="text-[8px] text-slate-400">Deep Navy</div>
                  </div>
                </div>
              </div>

              {/* 2. Typography Token Scale (GT Walsheim Pro) */}
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <span>Typography: GT Walsheim Pro</span>
                  <span className="text-[10px] text-[#0694D1] font-mono">Type • Weight • Size</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                  <div className="p-1.5 bg-white rounded border border-slate-200">
                    <div className="font-bold text-slate-900">Headline 1 / 2</div>
                    <div className="text-slate-500 text-[9px]">Medium/Bold • 60 / 40px</div>
                  </div>
                  <div className="p-1.5 bg-white rounded border border-slate-200">
                    <div className="font-bold text-slate-900">Headline 3</div>
                    <div className="text-slate-500 text-[9px]">Medium • 38px</div>
                  </div>
                  <div className="p-1.5 bg-white rounded border border-slate-200">
                    <div className="font-bold text-slate-900">Title 1 / 2</div>
                    <div className="text-slate-500 text-[9px]">Medium • 28 / 22px</div>
                  </div>
                  <div className="p-1.5 bg-white rounded border border-slate-200">
                    <div className="font-bold text-slate-900">Body 1 / 2 / 3</div>
                    <div className="text-slate-500 text-[9px]">Regular • 18 / 16 / 14px</div>
                  </div>
                </div>
              </div>

              {/* 3. Interactive Component States & Elevation Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Button States Matrix */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Button States (40px/48px)
                  </div>
                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Default:</span>
                      <span className="px-3 py-1 bg-[#0694D1] text-white font-semibold rounded-full shadow-xs">
                        More Webinars
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Hover:</span>
                      <span className="px-3 py-1 bg-[#083146] text-white font-semibold rounded-full shadow-xs">
                        More Webinars
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Outline:</span>
                      <span className="px-3 py-0.5 border border-[#0694D1] text-[#0694D1] font-semibold rounded-full">
                        Register
                      </span>
                    </div>
                  </div>
                </div>

                {/* Drop Shadows & Form Field Specs */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Shadow & Elevation Matrix
                  </div>
                  <div className="space-y-1 text-[9px] text-slate-600 font-mono">
                    <div className="p-1.5 bg-white rounded border border-slate-200 shadow-[0px_4px_16px_rgba(104,131,151,0.25)]">
                      <div className="font-bold text-slate-800">Primary Default:</div>
                      <div>radius: 16px • 0px 4px 16px rgba(104,131,151,0.25)</div>
                    </div>
                    <div className="p-1.5 bg-white rounded border border-slate-200 shadow-[0px_8px_32px_rgba(104,131,151,0.35)]">
                      <div className="font-bold text-slate-800">Secondary Hover:</div>
                      <div>radius: 16px • 0px 8px 32px rgba(104,131,151,0.35)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Responsive Multi-Device Lineup Banner */}
          <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#e2e8f0] p-6 sm:p-10 lg:p-14 overflow-hidden border border-blue-100 shadow-xl">
            {/* Directional Chevron Background Backdrop (Mild Blue Tint) */}
            <div className="absolute inset-0 flex items-center justify-between opacity-15 pointer-events-none overflow-hidden select-none">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="text-blue-500 font-black text-4xl sm:text-6xl tracking-tighter transform -skew-x-12">
                  &gt;&gt;
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center mb-8 sm:mb-12">
              <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">
                Responsive Cross-Platform Lineup
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Fluid Experience Architecture Across Desktop, Tablet & Mobile
              </h3>
            </div>

            {/* 5-Device Stage: Mobile Phone, Tablet, Laptop (Center), Tablet, Mobile Phone */}
            <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-4 lg:gap-6 max-w-6xl mx-auto pt-4">
              {/* 1. Far Left: Mobile Smartphone Mockup */}
              <div className="w-20 sm:w-28 lg:w-36 shrink-0 bg-neutral-950 p-1.5 sm:p-2 rounded-[22px] sm:rounded-[30px] shadow-2xl border-2 border-neutral-800 transition-transform hover:-translate-y-2 duration-300">
                <div className="bg-slate-900 rounded-[18px] sm:rounded-[24px] overflow-hidden p-2 text-white text-[7px] sm:text-[9px] space-y-1">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                    <span className="font-bold text-sky-400">Koenig</span>
                    <span className="text-[6px] sm:text-[8px] bg-blue-600 px-1 rounded">1-on-1</span>
                  </div>
                  <div className="bg-slate-800 p-1.5 rounded space-y-0.5">
                    <div className="font-bold text-white">Book Expert</div>
                    <div className="text-[6px] text-slate-400">Select date & slot</div>
                  </div>
                  <div className="bg-blue-600 text-white font-bold text-center py-1 rounded text-[7px]">
                    Confirm Slot
                  </div>
                </div>
              </div>

              {/* 2. Left Center: Tablet / iPad Mockup */}
              <div className="hidden sm:block w-36 lg:w-48 shrink-0 bg-neutral-950 p-2 sm:p-2.5 rounded-[24px] sm:rounded-[32px] shadow-2xl border-2 border-neutral-800 transition-transform hover:-translate-y-2 duration-300">
                <div className="bg-slate-900 rounded-[20px] sm:rounded-[26px] overflow-hidden p-2.5 text-white text-[8px] sm:text-[10px] space-y-1.5">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                    <span className="font-bold text-sky-400">Koenig Help Center</span>
                    <span className="text-[7px] text-slate-400">Live Support</span>
                  </div>
                  <div className="bg-slate-800/90 p-2 rounded space-y-1">
                    <div className="text-[8px] font-bold text-white">Talk to a Lead Instructor</div>
                    <div className="grid grid-cols-2 gap-1 text-[7px] text-slate-300">
                      <div className="bg-slate-700/60 p-1 rounded">Cloud Track</div>
                      <div className="bg-slate-700/60 p-1 rounded">Security Track</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Center: MacBook / Laptop Main Frame */}
              <div className="w-56 sm:w-80 lg:w-[460px] shrink-0 bg-neutral-900 p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-neutral-700 transition-transform hover:-translate-y-3 duration-300">
                {/* Screen Top Bar */}
                <div className="flex items-center gap-1.5 pb-1.5 border-b border-neutral-800 px-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <div className="ml-2 bg-neutral-800 rounded px-2 py-0.5 text-[8px] sm:text-[10px] text-neutral-300 font-mono flex-1 text-center truncate">
                    koenig-solutions.com/portal
                  </div>
                </div>

                {/* Laptop Screen UI */}
                <div className="bg-slate-950 p-2.5 sm:p-4 rounded-xl text-white space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-black text-xs sm:text-sm text-sky-400 tracking-tight">KOENIG</div>
                    <div className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[8px] sm:text-[10px] text-slate-300">
                      🔍 Search 5,000+ IT Certifications...
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/60 to-slate-900 p-2 sm:p-3 rounded-lg border border-blue-800/40">
                    <div className="text-[10px] sm:text-xs font-bold text-white">
                      Accelerate Your Tech Career with 1-on-1 Training
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-blue-200 mt-0.5">
                      Authorized official training for AWS, Microsoft, Cisco & Google Cloud
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-center">
                      <div className="text-[8px] sm:text-[9px] font-bold text-sky-400">Cloud & DevOps</div>
                      <div className="text-[7px] text-slate-400">140+ Courses</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-center">
                      <div className="text-[8px] sm:text-[9px] font-bold text-sky-400">Cybersecurity</div>
                      <div className="text-[7px] text-slate-400">85+ Courses</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-1.5 rounded text-center">
                      <div className="text-[8px] sm:text-[9px] font-bold text-sky-400">Data & AI</div>
                      <div className="text-[7px] text-slate-400">60+ Courses</div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="w-20 sm:w-32 h-1 sm:h-1.5 bg-neutral-600 mx-auto mt-1 rounded-full" />
              </div>

              {/* 4. Right Center: Tablet / iPad Mockup */}
              <div className="hidden sm:block w-36 lg:w-48 shrink-0 bg-neutral-950 p-2 sm:p-2.5 rounded-[24px] sm:rounded-[32px] shadow-2xl border-2 border-neutral-800 transition-transform hover:-translate-y-2 duration-300">
                <div className="bg-slate-900 rounded-[20px] sm:rounded-[26px] overflow-hidden p-2.5 text-white text-[8px] sm:text-[10px] space-y-1.5">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                    <span className="font-bold text-sky-400">Course Detail</span>
                    <span className="text-[7px] text-slate-400">Syllabus PDF</span>
                  </div>
                  <div className="bg-slate-800/90 p-2 rounded space-y-1">
                    <div className="text-[8px] font-bold text-white">AWS Solutions Architect</div>
                    <div className="text-[7px] text-sky-400">✓ Exam Voucher Included</div>
                    <div className="bg-blue-600 text-white text-center py-0.5 rounded text-[7px] font-bold">
                      Book Free Demo
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Far Right: Mobile Smartphone Mockup */}
              <div className="w-20 sm:w-28 lg:w-36 shrink-0 bg-neutral-950 p-1.5 sm:p-2 rounded-[22px] sm:rounded-[30px] shadow-2xl border-2 border-neutral-800 transition-transform hover:-translate-y-2 duration-300">
                <div className="bg-slate-900 rounded-[18px] sm:rounded-[24px] overflow-hidden p-2 text-white text-[7px] sm:text-[9px] space-y-1">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                    <span className="font-bold text-sky-400">Success!</span>
                    <span className="text-[6px] sm:text-[8px] text-slate-400">#KNG-4892</span>
                  </div>
                  <div className="bg-slate-800 p-1.5 rounded space-y-0.5 text-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 text-sky-400 flex items-center justify-center mx-auto text-[8px]">✓</div>
                    <div className="font-bold text-white text-[7px]">Booking Confirmed</div>
                    <div className="text-[6px] text-slate-400">Calendar invite sent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Measurable Business & User Impact (Dark Brand Blue Style) */}
        <section id="impact" className="bg-[#040816] border border-[#1e2d5a] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 scroll-mt-20">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                9
              </span>
              Measurable Results & Business Impact
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-900/60 text-sky-300 rounded-full border border-blue-700">
              Verified Post-Launch Metrics
            </span>
          </div>

          <p className="text-slate-300 text-base leading-relaxed">
            Following the worldwide phased rollout of the redesigned platform, Koenig Solutions experienced record improvements across all core user engagement and revenue metrics:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 bg-[#0a1128] border border-[#1e2d5a] rounded-2xl text-center space-y-1.5 shadow-md hover:border-[#3b5bfd] transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-[#60a5fa]">+44%</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Qualified Inquiries</div>
              <div className="text-xs text-slate-300 pt-1">Direct online course registrations and lead form submissions</div>
            </div>

            <div className="p-6 bg-[#0a1128] border border-[#1e2d5a] rounded-2xl text-center space-y-1.5 shadow-md hover:border-[#3b5bfd] transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-[#60a5fa]">-38%</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Funnel Drop-Off</div>
              <div className="text-xs text-slate-300 pt-1">Reduced friction in scheduling selection & checkout steps</div>
            </div>

            <div className="p-6 bg-[#0a1128] border border-[#1e2d5a] rounded-2xl text-center space-y-1.5 shadow-md hover:border-[#3b5bfd] transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-[#60a5fa]">4.8 / 5</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Learner CSAT</div>
              <div className="text-xs text-slate-300 pt-1">High satisfaction score on new course navigation & booking</div>
            </div>
          </div>

          <div className="p-6 bg-[#0b132b] border border-[#1e2d5a] rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <Quote className="w-4 h-4 text-blue-400" />
              Stakeholder Feedback
            </div>
            <p className="text-sm text-slate-300 italic leading-relaxed">
              "The new experience completely transformed how corporate clients and individual students perceive Koenig. Our courses are easier to discover, booking a 1-on-1 slot is instantaneous, and our sales team spends significantly less time on manual inquiries."
            </p>
          </div>
        </section>

        {/* Section 10: Key Learnings & Retrospective (Consistent Mild Blue Theme) */}
        <section id="learnings" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                10
              </span>
              Key Learnings & Retrospective
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/70">
              Reflections
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-blue-50/40 border border-blue-200/80 rounded-2xl space-y-2.5 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                1
              </div>
              <div className="font-bold text-neutral-900 text-sm">Massive Catalogs Need Strict Hierarchy</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                When a catalog spans 5,000+ courses, users do not browse linearly; they query and filter. Investing in faceted taxonomy and vendor-aligned paths generated the greatest UX return.
              </p>
            </div>

            <div className="p-5 bg-blue-50/40 border border-blue-200/80 rounded-2xl space-y-2.5 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                2
              </div>
              <div className="font-bold text-neutral-900 text-sm">Transparency Builds Enterprise Trust</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Displaying official vendor badges, syllabus PDFs, and transparent refund guarantees eliminated purchasing hesitation among B2B managers.
              </p>
            </div>

            <div className="p-5 bg-blue-50/40 border border-blue-200/80 rounded-2xl space-y-2.5 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <div className="font-bold text-neutral-900 text-sm">Cross-Functional Alignment</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Co-designing the live time zone scheduler with engineering early prevented technical constraints from diluting the final booking experience.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA / Navigation */}
        <section className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-900 text-neutral-900 font-bold text-sm rounded-full hover:bg-neutral-900 hover:text-white transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          <a
            href="https://www.koenig-solutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b5bfd] text-white font-bold text-sm rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            <span>Visit Live Website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>
      </main>
    </div>
  );
}
