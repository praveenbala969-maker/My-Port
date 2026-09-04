import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MoveHorizontal,
  Columns2,
  ToggleLeft,
  Upload,
  Info,
  CheckCircle2,
  AlertCircle,
  FileImage,
  Trash2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  HelpCircle,
  RefreshCw,
  Eye,
  Sliders,
  ArrowRight,
  X
} from 'lucide-react';

export type ScreenKey = 'course' | 'tech' | 'home';
export type ViewMode = 'slider' | 'side-by-side' | 'toggle';

interface Hotspot {
  id: string;
  title: string;
  category: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  legacyProblem: string;
  redesignSolution: string;
  impactMetric: string;
}

interface ScreenConfig {
  id: ScreenKey;
  label: string;
  fileName: string;
  altFileNames: string[];
  pageTitle: string;
  url: string;
  summary: string;
  hotspots: Hotspot[];
}

const SCREENS: ScreenConfig[] = [
  {
    id: 'course',
    label: 'Course Detail Page',
    fileName: 'Course.png',
    altFileNames: ['course.png', 'Course_after.png', 'Course_before.png', 'course_redesign.png'],
    pageTitle: 'AZ-104: Microsoft Azure Administrator Certification',
    url: 'koenig-solutions.com/course/az-104-microsoft-azure-administrator',
    summary:
      'Transformed dense walls of unformatted text into a high-converting course overview with sticky 1-on-1 scheduling, clear syllabus modules, and verified Microsoft credentials.',
    hotspots: [
      {
        id: 'c1',
        title: 'Trust Signals & Official Partner Badges',
        category: 'Trust & Credibility',
        x: 13,
        y: 18,
        legacyProblem: 'Hidden vendor credentials; users questioned whether certification training was authorized and official.',
        redesignSolution: 'Prominently badged Official Microsoft Learning Partner logo, exam voucher inclusion pill, and instructor verification.',
        impactMetric: '+28% trust perception rating in user surveys'
      },
      {
        id: 'c2',
        title: 'Sticky Pricing & Dual Modality Selector',
        category: 'Conversion Optimization',
        x: 87,
        y: 35,
        legacyProblem: 'Confusing pricing table with ambiguous 1-on-1 vs group rates; buried "Request Quote" buttons with slow response times.',
        redesignSolution: 'Sticky sidebar booking card with 1-click switcher between 1-on-1 Personalized and Group Batches, transparent pricing, and instant "Book Free Demo" CTA.',
        impactMetric: '+44% direct course registration submissions'
      },
      {
        id: 'c3',
        title: '1-on-1 Calendar & Time Zone Auto-Detect',
        category: 'Scheduling Usability',
        x: 87,
        y: 62,
        legacyProblem: 'Learners had to email back and forth across different time zones to confirm instructor availability dates.',
        redesignSolution: 'Interactive scheduling widget with local browser time zone auto-detection, live capacity slots, and 4h vs 8h daily pace selector.',
        impactMetric: '52% reduction in booking coordination time'
      },
      {
        id: 'c4',
        title: 'Modular Syllabus Accordion & Exam Outline',
        category: 'Information Architecture',
        x: 30,
        y: 58,
        legacyProblem: 'Wall of unformatted, unsearchable syllabus text that overwhelmed mobile and desktop users.',
        redesignSolution: 'Modular tabbed sections (Overview, 5 Syllabus Modules, Prerequisites, Exam Guide) with expandable module topics and download option.',
        impactMetric: '83% faster syllabus evaluation time (42s vs 4.2m)'
      }
    ]
  },
  {
    id: 'tech',
    label: 'Tech & Catalog Listing',
    fileName: 'Tech.png',
    altFileNames: ['tech.png', 'Tech_after.png', 'Tech_before.png', 'Catalog.png', 'catalog.png'],
    pageTitle: 'Microsoft Certification Catalog & Learning Paths',
    url: 'koenig-solutions.com/microsoft-training-certifications',
    summary:
      'Replaced an unpaginated directory of blue hyperlinks with a faceted catalog engine allowing filtering by vendor, skill level, and delivery format.',
    hotspots: [
      {
        id: 't1',
        title: 'Faceted Multi-Attribute Filtering Engine',
        category: 'Search & Filtering',
        x: 8,
        y: 28,
        legacyProblem: 'Primitive keyword search with zero facet filtering across 5,000+ courses, causing high bounce rates.',
        redesignSolution: 'Dynamic sidebar with instant filters: Vendor, Delivery Mode (1-on-1, ILO, Classroom, FMAT), Pace (4h vs 8h), and Exam Prep inclusion.',
        impactMetric: '-48% catalog bounce rate within 60 days'
      },
      {
        id: 't2',
        title: 'Visual Course Cards with Modality Tags',
        category: 'Visual Hierarchy',
        x: 66,
        y: 36,
        legacyProblem: 'Dense text lists with no visual differentiation between beginner fundamentals and advanced expert lab tracks.',
        redesignSolution: 'Scannable cards with vendor logos, duration badges, skill level indicators, and 1-click preview triggers.',
        impactMetric: '+3.4x more course cards inspected per session'
      },
      {
        id: 't3',
        title: 'B2B Cohort vs Individual Learner Switch',
        category: 'B2B Qualification',
        x: 50,
        y: 12,
        legacyProblem: 'Enterprise buyers needing corporate group pricing were forced into individual checkout flows.',
        redesignSolution: 'Dedicated "Enterprise Team Training" toggle at the top of the catalog for direct quote calculation and custom syllabus curation.',
        impactMetric: '+34% increase in qualified corporate group leads'
      }
    ]
  },
  {
    id: 'home',
    label: 'Koenig Homepage',
    fileName: 'Home.png',
    altFileNames: ['home.png', 'Home_after.png', 'Home_before.png', 'homepage.png'],
    pageTitle: 'Koenig Solutions: Global IT Training Leader',
    url: 'koenig-solutions.com',
    summary:
      'Transformed an outdated carousel-heavy portal into a modern discovery hub with instant course search, authorized vendor credentials, and live webinar access.',
    hotspots: [
      {
        id: 'h1',
        title: 'Predictive Global Course Search Bar',
        category: 'Core Navigation',
        x: 50,
        y: 25,
        legacyProblem: 'Buried generic search box with sluggish, unindexed results that failed on exam codes like "AZ-104" or "SC-200".',
        redesignSolution: 'High-contrast central hero search with instant typeahead suggestions, categorized by Course Name, Exam Code, and Vendor.',
        impactMetric: '72% of users reach target course in <2 clicks'
      },
      {
        id: 'h2',
        title: 'Authorized Vendor Credibility Wall',
        category: 'Brand Equity',
        x: 50,
        y: 48,
        legacyProblem: 'Random partner logos tucked away in footer links with no context about official authorizations.',
        redesignSolution: 'Prominent interactive carousel of official partner badges: Microsoft Gold Partner, AWS Authorized Training, Cisco, Oracle, Google Cloud.',
        impactMetric: '+41% lift in new user trust attribution'
      },
      {
        id: 'h3',
        title: 'Upcoming Live Free Webinars Strip',
        category: 'Lead Engagement',
        x: 50,
        y: 75,
        legacyProblem: 'Webinars were siloed on a separate, hidden sub-page with minimal registrations.',
        redesignSolution: 'Curated upcoming instructor-led sessions with countdown timer, speaker credentials, and 1-click Google Calendar reservation.',
        impactMetric: '+125% increase in monthly webinar signups'
      }
    ]
  }
];

const STORAGE_KEY = 'koenig_showcase_screenshots_v3';
const STORAGE_KEY_FALLBACK = 'koenig_showcase_screenshots_v2';

export const DEFAULT_SCREENSHOTS: Record<
  ScreenKey,
  { before: string; after: string; beforeName: string; afterName: string }
> = {
  course: {
    before: '/projects/koenig/Before-Course.webp',
    after: '/projects/koenig/After-Course.webp',
    beforeName: 'Before-Course.webp',
    afterName: 'After-Course.webp'
  },
  tech: {
    before: '/projects/koenig/Before-Tech-Course.webp',
    after: '/projects/koenig/After-Tech.webp',
    beforeName: 'Before-Tech Course.webp',
    afterName: 'After-Tech.webp'
  },
  home: {
    before: '/projects/koenig/Home-Navigation.webp',
    after: '/projects/koenig/After-Home.webp',
    beforeName: 'Home - Navigation.webp',
    afterName: 'After-Home.webp'
  }
};

export function BeforeAfterShowcase() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('course');
  const [viewMode, setViewMode] = useState<ViewMode>('slider');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [toggleState, setToggleState] = useState<'before' | 'after'>('after');
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [zoomFit, setZoomFit] = useState<'contain' | 'cover' | 'actual'>('contain');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxLayer, setLightboxLayer] = useState<'before' | 'after'>('after');

  // Screenshots data store: pre-populate with DEFAULT_SCREENSHOTS
  const [screenshots, setScreenshots] = useState<
    Record<string, { before?: string; after?: string; beforeName?: string; afterName?: string }>
  >(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY_FALLBACK);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          course: { ...DEFAULT_SCREENSHOTS.course, ...(parsed.course || {}) },
          tech: { ...DEFAULT_SCREENSHOTS.tech, ...(parsed.tech || {}) },
          home: { ...DEFAULT_SCREENSHOTS.home, ...(parsed.home || {}) }
        };
      }
    } catch {
      // ignore
    }
    return { ...DEFAULT_SCREENSHOTS };
  });

  // Active target for modal or quick upload: 'before' | 'after'
  const [uploadTargetLayer, setUploadTargetLayer] = useState<'before' | 'after'>('after');
  const [showUploadDrawer, setShowUploadDrawer] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentScreenConfig = SCREENS.find((s) => s.id === activeScreen) || SCREENS[0];

  // Save to localStorage whenever screenshots change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(screenshots));
    } catch {
      // localStorage may be quota-limited if user uploads very large raw images
    }
  }, [screenshots]);

  // Attempt automatic detection of local static files in /public
  useEffect(() => {
    SCREENS.forEach((scr) => {
      const checkCandidate = (url: string, layer: 'after' | 'before') => {
        // Only probe if not already set or if using default placeholder
        const img = new Image();
        img.onload = () => {
          setScreenshots((prev) => ({
            ...prev,
            [scr.id]: {
              ...prev[scr.id],
              [layer]: url,
              [`${layer}Name`]: url.split('/').pop() || url
            }
          }));
        };
        img.src = url;
      };

      const afterNameMap: Record<ScreenKey, string[]> = {
        course: ['After-Course.webp', 'Course.webp', 'After-Course.png', 'Course.png'],
        tech: ['After-Tech.webp', 'Tech.webp', 'After-Tech.png', 'Tech.png'],
        home: ['After-Home.webp', 'Home.webp', 'After-Home.png', 'Home.png']
      };

      const beforeNameMap: Record<ScreenKey, string[]> = {
        course: ['Before-Course.webp', 'Course_before.webp', 'Before-Course.png', 'Course_before.png'],
        tech: ['Before-Tech-Course.webp', 'Before-Tech Course.webp', 'Tech_before.webp', 'Before-Tech Course.png'],
        home: ['Home-Navigation.webp', 'Before-Home.webp', 'Home_before.webp', 'Home - Navigation.webp']
      };

      afterNameMap[scr.id].forEach((fn) => {
        checkCandidate(`/projects/koenig/${fn}`, 'after');
      });

      beforeNameMap[scr.id].forEach((fn) => {
        checkCandidate(`/projects/koenig/${fn}`, 'before');
      });
    });
  }, []);

  // Update selected hotspot when screen changes
  useEffect(() => {
    setSelectedHotspot(currentScreenConfig.hotspots[0] || null);
  }, [activeScreen]);

  // Handle Dragging for comparison slider
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const updateSliderPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPos(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      updateSliderPos(e.touches[0].clientX);
    };

    const handleStop = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleStop);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleStop);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStop);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStop);
    };
  }, [isDragging, updateSliderPos]);

  // File Upload Handler (FileReader -> base64 data URL)
  const processImageFile = (file: File, targetScreen: ScreenKey, layer: 'before' | 'after') => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setScreenshots((prev) => ({
          ...prev,
          [targetScreen]: {
            ...prev[targetScreen],
            [layer]: dataUrl,
            [`${layer}Name`]: file.name
          }
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  // Smart matcher for the user's files:
  // Before-Tech Course.png, Before-Course.png, Before-Home - Navigation.png, After-Course.png, After-Home.png, After-Tech.png
  const matchFileToScreenAndLayer = (name: string): { screen: ScreenKey; layer: 'before' | 'after' } | null => {
    const lower = name.toLowerCase();
    let screen: ScreenKey | null = null;
    if (lower.includes('course') && !lower.includes('tech')) {
      screen = 'course';
    } else if (lower.includes('tech')) {
      screen = 'tech';
    } else if (lower.includes('home')) {
      screen = 'home';
    }

    if (!screen) return null;
    const layer: 'before' | 'after' = lower.includes('before') || lower.includes('legacy') ? 'before' : 'after';
    return { screen, layer };
  };

  const processBatchFiles = (fileList: File[]) => {
    fileList.forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const match = matchFileToScreenAndLayer(file.name);
      const targetScreen = match ? match.screen : activeScreen;
      const targetLayer = match ? match.layer : uploadTargetLayer;
      processImageFile(file, targetScreen, targetLayer);
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    if (files.length > 1) {
      processBatchFiles(Array.from(files));
    } else {
      const match = matchFileToScreenAndLayer(files[0].name);
      if (match) {
        processImageFile(files[0], match.screen, match.layer);
      } else {
        processImageFile(files[0], activeScreen, uploadTargetLayer);
      }
    }
    e.target.value = '';
  };

  // Drag and Drop into stage or banner
  const handleDropIntoStage = (e: React.DragEvent, layer: 'before' | 'after') => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (e.dataTransfer.files.length > 1) {
        processBatchFiles(Array.from(e.dataTransfer.files));
      } else {
        const file = e.dataTransfer.files[0];
        const match = matchFileToScreenAndLayer(file.name);
        if (match) {
          processImageFile(file, match.screen, match.layer);
        } else {
          processImageFile(file, activeScreen, layer);
        }
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Clear Screenshot
  const clearScreenshot = (screen: ScreenKey, layer: 'before' | 'after') => {
    setScreenshots((prev) => {
      const updated = { ...prev };
      if (updated[screen]) {
        delete updated[screen][layer];
        delete (updated[screen] as any)[`${layer}Name`];
      }
      return { ...updated };
    });
  };

  // Active layer screenshots
  const activeAfterImage = screenshots[activeScreen]?.after;
  const activeAfterName = screenshots[activeScreen]?.afterName || currentScreenConfig.fileName;
  const activeBeforeImage = screenshots[activeScreen]?.before;
  const activeBeforeName = screenshots[activeScreen]?.beforeName || `Legacy_${currentScreenConfig.fileName}`;

  return (
    <div className="bg-white border border-blue-100 rounded-3xl p-4 sm:p-8 shadow-xs space-y-7 scroll-mt-20">
      {/* Hidden File Input (supports multiple file selection) */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        multiple
        className="hidden"
      />

      {/* Top Header Section */}
      <div className="border-b border-blue-100/80 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0694D1] text-xs font-bold rounded-full border border-blue-200/60 mb-2">
          <Sliders className="w-3.5 h-3.5" />
          <span>Interactive UX Showcase • Screen-by-Screen Evolution</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
          Before & After: Interface Evolution
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
          Direct visual comparison of Koenig Solutions' legacy pages against the redesigned UX system.
          Explore the transformation with annotated UX rationale pins in side-by-side view.
        </p>
      </div>

      {/* Clean Screen Switcher Tabs - Directly above the screens */}
      <div className="flex items-center justify-between gap-3 pt-1">
        {/* Screen Tabs */}
        <div className="inline-flex items-center gap-1 bg-neutral-100/90 p-1.5 rounded-2xl border border-neutral-200/80 overflow-x-auto max-w-full shadow-xs">
          {SCREENS.map((scr) => {
            const isSelected = activeScreen === scr.id;
            return (
              <button
                key={scr.id}
                onClick={() => setActiveScreen(scr.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0694D1] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/80'
                }`}
              >
                <span>{scr.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen Metadata Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-neutral-50 px-4 py-2.5 rounded-xl border border-neutral-200 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-neutral-900">{currentScreenConfig.pageTitle}</span>
          <span className="text-[11px] font-mono text-neutral-400">
            https://{currentScreenConfig.url}
          </span>
        </div>
        <p className="text-neutral-600 text-[11px] max-w-xl truncate">
          {currentScreenConfig.summary}
        </p>
      </div>

      {/* Main Comparison Canvas Frame */}
      <div className="space-y-3">
        {/* Browser Top Window Chrome Bar */}
        <div className="bg-slate-900 text-slate-300 rounded-t-2xl px-4 py-2.5 flex items-center justify-between text-xs border border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="ml-3 text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-md">
              https://{currentScreenConfig.url}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-slate-400 font-medium hidden sm:inline-flex items-center gap-1.5">
              <Columns2 className="w-3 h-3 text-[#0694D1]" />
              Side-by-Side Dual Pane
            </span>
          </div>
        </div>

        {/* The Comparison Stage Container - Side-by-Side Only with reduced height and right-hand scrolling */}
        <div
          ref={containerRef}
          className="relative w-full rounded-b-2xl border-x border-b border-neutral-800 bg-neutral-950 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800 h-[380px] sm:h-[420px] md:h-[460px]">
            {/* Left Column: BEFORE (Legacy Experience) */}
            <div className="relative bg-neutral-950 flex flex-col h-full overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between py-2 px-3 text-xs border-b border-neutral-800 bg-neutral-900/90 shrink-0 z-10">
                <span className="font-bold text-rose-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Legacy Experience (Before)
                </span>
              </div>

              {/* Scrollable image area with scrollbar on right */}
              <div className="relative flex-1 overflow-y-auto overflow-x-hidden p-0 custom-scrollbar">
                {activeBeforeImage ? (
                  <img
                    src={activeBeforeImage}
                    alt="Legacy Screenshot"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-top block"
                  />
                ) : (
                  <div className="p-3">
                    <LegacyWireframeFallback
                      screen={activeScreen}
                      fileName={currentScreenConfig.fileName}
                      onUploadClick={() => {
                        setUploadTargetLayer('before');
                        fileInputRef.current?.click();
                      }}
                      onDrop={(e) => handleDropIntoStage(e, 'before')}
                      onDragOver={handleDragOver}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: AFTER (Redesigned Experience) */}
            <div className="relative bg-neutral-950 flex flex-col h-full overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between py-2 px-3 text-xs border-b border-neutral-800 bg-neutral-900/90 shrink-0 z-10">
                <span className="font-bold text-sky-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0694D1]" />
                  Redesigned Experience
                </span>
              </div>

              {/* Scrollable image area with scrollbar on right */}
              <div className="relative flex-1 overflow-y-auto overflow-x-hidden p-0 custom-scrollbar">
                {activeAfterImage ? (
                  <div className="relative w-full">
                    <img
                      src={activeAfterImage}
                      alt="Redesigned Screenshot"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-top block"
                    />

                    {/* Hotspot callout pins on the redesigned image */}
                    {showHotspots && (
                      <div className="absolute inset-0 pointer-events-none">
                        {currentScreenConfig.hotspots.map((hotspot, idx) => (
                          <button
                            key={hotspot.id}
                            onClick={() => setSelectedHotspot(hotspot)}
                            className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 focus:outline-hidden ${
                              selectedHotspot?.id === hotspot.id ? 'scale-110 z-30' : 'z-20'
                            }`}
                            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                            title={hotspot.title}
                          >
                            <div className="relative flex items-center justify-center">
                              <span className="absolute w-5 h-5 rounded-full bg-[#0694D1] opacity-75 animate-ping" />
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-lg border-2 ${
                                  selectedHotspot?.id === hotspot.id
                                    ? 'bg-[#083146] text-white border-yellow-300 ring-2 ring-blue-300'
                                    : 'bg-[#0694D1] text-white border-white'
                                }`}
                              >
                                {idx + 1}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <RedesignDropzoneFallback
                    screen={activeScreen}
                    fileName={currentScreenConfig.fileName}
                    onUploadClick={() => {
                      setUploadTargetLayer('after');
                      fileInputRef.current?.click();
                    }}
                    onDrop={(e) => handleDropIntoStage(e, 'after')}
                    onDragOver={handleDragOver}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive UX Hotspot Detail Card */}
      {selectedHotspot && showHotspots && (
        <div className="bg-gradient-to-r from-blue-50/70 via-sky-50/40 to-white border border-blue-200/80 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0694D1] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                {currentScreenConfig.hotspots.findIndex((h) => h.id === selectedHotspot.id) + 1}
              </span>
              <h4 className="text-base font-bold text-neutral-900">{selectedHotspot.title}</h4>
              <span className="px-2.5 py-0.5 bg-blue-100/80 text-[#0694D1] text-[11px] font-bold rounded-full">
                {selectedHotspot.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{selectedHotspot.impactMetric}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
            <div className="bg-white/80 p-3.5 rounded-xl border border-rose-100 space-y-1">
              <div className="text-rose-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Legacy Pain Point (Before):
              </div>
              <p className="text-neutral-700 leading-relaxed pl-3.5">{selectedHotspot.legacyProblem}</p>
            </div>

            <div className="bg-white/80 p-3.5 rounded-xl border border-blue-100 space-y-1">
              <div className="text-[#0694D1] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0694D1]" />
                UX Design Solution (After):
              </div>
              <p className="text-neutral-700 leading-relaxed pl-3.5">{selectedHotspot.redesignSolution}</p>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen / High-Resolution Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex flex-col animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-neutral-900 border-b border-neutral-800 text-white shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm sm:text-base text-white">
                {currentScreenConfig.label}
              </span>
              <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                {lightboxLayer === 'after' ? activeAfterName : activeBeforeName}
              </span>
            </div>

            {/* Middle Switcher: Before vs After */}
            <div className="flex items-center bg-neutral-800 p-1 rounded-xl border border-neutral-700 text-xs">
              <button
                onClick={() => setLightboxLayer('before')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  lightboxLayer === 'before'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Legacy (Before)
              </button>
              <button
                onClick={() => setLightboxLayer('after')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  lightboxLayer === 'after'
                    ? 'bg-[#0694D1] text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Redesigned (After)
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-all"
              title="Close Fullscreen (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Content Image Container with Smooth Scroll */}
          <div
            className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxLayer === 'after' ? (
              activeAfterImage ? (
                <img
                  src={activeAfterImage}
                  alt={`${currentScreenConfig.label} High-Res Redesign`}
                  referrerPolicy="no-referrer"
                  className="max-w-full h-auto rounded-xl shadow-2xl border border-neutral-800"
                />
              ) : (
                <div className="text-neutral-400 text-sm py-20">No image available</div>
              )
            ) : activeBeforeImage ? (
              <img
                src={activeBeforeImage}
                alt={`${currentScreenConfig.label} High-Res Legacy`}
                referrerPolicy="no-referrer"
                className="max-w-full h-auto rounded-xl shadow-2xl border border-neutral-800"
              />
            ) : (
              <div className="text-neutral-400 text-sm py-20">No image available</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Fallback Dropzone for Redesign Screenshot
function RedesignDropzoneFallback({
  screen,
  fileName,
  onUploadClick,
  onDrop,
  onDragOver
}: {
  screen: ScreenKey;
  fileName: string;
  onUploadClick: () => void;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="w-full h-full min-h-[540px] bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-sky-800/60 hover:border-sky-400 transition-all cursor-pointer space-y-4"
      onClick={onUploadClick}
    >
      <div className="w-16 h-16 rounded-3xl bg-sky-950/80 border border-sky-600/50 flex items-center justify-center text-sky-400 shadow-xl group-hover:scale-110 transition-transform">
        <Upload className="w-8 h-8" />
      </div>

      <div className="space-y-1.5 max-w-md">
        <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">
          Redesign Screenshot Slot
        </div>
        <h3 className="text-lg sm:text-xl font-black text-white">
          Drop <code className="text-sky-300 font-mono bg-sky-950/80 px-2 py-0.5 rounded">{fileName}</code> Here
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Drag and drop your screenshot file from your computer, or click to browse.
          Supports PNG, JPG, or WebP. Saved automatically to your browser session.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onUploadClick();
          }}
          className="px-5 py-2.5 bg-[#0694D1] hover:bg-[#057aa8] text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center gap-2"
        >
          <FileImage className="w-4 h-4" />
          <span>Select {fileName} from Computer</span>
        </button>
      </div>

      <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-800/80 max-w-sm">
        💡 Tip: You can also drop <code className="text-slate-400">{fileName}</code> into the project's <code className="text-slate-400">public/</code> directory in the left file tree.
      </div>
    </div>
  );
}

// Fallback Wireframe / Dropzone for Legacy (Before) Screenshot
function LegacyWireframeFallback({
  screen,
  fileName,
  onUploadClick,
  onDrop,
  onDragOver
}: {
  screen: ScreenKey;
  fileName: string;
  onUploadClick: () => void;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="w-full h-full min-h-[540px] bg-[#121620] text-slate-300 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-rose-900/50 hover:border-rose-500 transition-all cursor-pointer space-y-4"
      onClick={onUploadClick}
    >
      <div className="w-16 h-16 rounded-3xl bg-rose-950/60 border border-rose-700/50 flex items-center justify-center text-rose-400 shadow-xl">
        <FileImage className="w-8 h-8" />
      </div>

      <div className="space-y-1.5 max-w-md">
        <div className="text-xs font-bold text-rose-400 uppercase tracking-widest">
          Legacy (Before) Screenshot Slot
        </div>
        <h3 className="text-lg sm:text-xl font-black text-white">
          Drop Legacy Screenshot or <code className="text-rose-300 font-mono bg-rose-950/80 px-2 py-0.5 rounded">{screen}_before.png</code>
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Upload your original legacy site screenshot to compare against the redesign with the draggable split-slider.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onUploadClick();
          }}
          className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-full transition-all shadow-md flex items-center gap-2"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Legacy Screenshot</span>
        </button>
      </div>

      <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-800 max-w-sm">
        Click to browse or drag & drop.
      </div>
    </div>
  );
}
