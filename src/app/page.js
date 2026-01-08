"use client";

import React, {useEffect, useRef} from 'react';
import Link from 'next/link';
import {motion, useMotionTemplate, useMotionValue, useScroll, useTransform} from "framer-motion";
import Lenis from '@studio-freight/lenis';


export default function PortfolioPage() {
    const {scrollYProgress: globalPostion} = useScroll();
    const {scrollY} = useScroll();

    const navBackground = useTransform(scrollY, [0, 100], ["rgba(10, 10, 10, 0)", "rgba(255, 255, 255, 0.8)"]);
    const navTextColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.7)", "rgba(15, 23, 42, 1)"]);
    const navBorder = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(226, 232, 240, 1)"]);

    const skills = [
        {category: "Languages", items: ["Java", "JavaScript", "SQL", "TypeScript"]},
        {category: "Backend", items: ["Spring Boot", "Spring Security", "JPA/Hibernate", "REST APIs"]},
        {category: "Frontend", items: ["React Native", "React.js", "Next.js", "Tailwind CSS"]},
        {category: "Tools & DevOps", items: ["Docker", "PostgreSQL", "Cloudinary", "Git", "Vercel"]}
    ];

    const projects = [
        {
            title: "Agora",
            type: "Full-Stack Mobile Marketplace",
            story: "Buying and selling on campus is often sketchy and unorganized. Agora provides a safe, students-only marketplace where users can trade items and services with verified peers.",
            solution: "Built a complete ecosystem with a React Native frontend and a Spring Boot backend. I implemented a secure 'University-Only' verification system and a real-time chat for instant negotiations.",
            features: ["Student-Only Verification", "In-App Chat System", "Service & Item Listings", "Admin Safety Panel"],
            tech: ["Spring Boot", "React Native", "PostgreSQL", "Cloudinary"],
            links: {code: "https://github.com/TaahaSidd/Agora"},
            image: "/Hand and iPhone 16 Agora.png",
        },
        {
            title: "Pulse",
            type: "Automated Android Expense Tracker",
            story: "Nobody likes manually typing in their expenses. Pulse is an Android application that automatically tracks your spending by 'listening' to your bank notifications in real-time.",
            solution: "Created a 'Privacy-First' Android app that uses Regex to extract transaction data from system notifications. It processes everything on-device using SQLite, ensuring financial data never leaves the phone.",
            features: ["Auto-Capture Notifications", "Smart Regex Parsing", "Privacy-First (Offline)", "Spending Analytics"],
            tech: ["Android SDK", "Java/Spring", "SQLite", "Regex Engine"],
            links: {code: "https://github.com/TaahaSidd/Pulse"},
            image: "/iPhone 15 Pulse.png",
        }
    ];

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-slate-900 selection:text-white pb-20">

            <motion.nav
                style={{
                    backgroundColor: navBackground,
                    borderColor: navBorder,
                    backdropFilter: "blur(12px)"
                }}
                // Reduced vertical padding on mobile (py-4 vs py-6)
                className="fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 py-4 lg:py-6"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                    <Link href="/" className="group flex items-center gap-2 shrink-0">
                        <motion.span
                            style={{color: navTextColor}}
                            // Slightly smaller tracking on mobile to prevent wrapping
                            className="text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]"
                        >
                            Taaha Sidd.
                        </motion.span>
                    </Link>

                    <div className="flex gap-4 lg:gap-8 items-center">
                        <div className="hidden md:flex gap-8">
                            <HeaderLink href="https://linkedin.com/in/tahasidd" label="LinkedIn" color={navTextColor}/>
                            <HeaderLink href="https://github.com/TaahaSidd" label="GitHub" color={navTextColor}/>
                        </div>

                        <a href="/resume.pdf"
                           className="px-4 py-2 lg:px-6 lg:py-2 bg-slate-900 text-white text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/10">
                            Resume
                        </a>
                    </div>
                </div>
            </motion.nav>

            <header className="relative h-screen w-full flex items-center overflow-hidden bg-[#0a0a0a]">
                {/* ... Parallax Background stays the same ... */}
                <motion.div
                    style={{
                        y: useTransform(useScroll().scrollY, [0, 500], [0, 200]),
                        scale: useTransform(useScroll().scrollY, [0, 500], [1, 1.1])
                    }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/andrew-kliatskyi-D4BxXKgJzU0-unsplash.jpg"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#0a0a0a]"></div>
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{y: "100%"}}
                            animate={{y: 0}}
                            transition={{duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1]}}
                            // FIXED: Smaller base font (text-5xl) and looser leading for mobile
                            className="text-5xl md:text-8xl lg:text-[10vw] font-black tracking-tighter text-white leading-[0.95] lg:leading-[0.85] uppercase mb-12"
                        >
                            Full Stack <br/>
                            <span className="text-transparent stroke-text opacity-70">Developer.</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/5 pt-8 pb-10 md:pb-0"
                    >
                        <div className="space-y-4">
                            <p className="text-lg md:text-2xl text-slate-400 max-w-xl leading-snug font-light italic">
                                Architecting production-ready systems using <br className="hidden md:block"/>
                                <span
                                    className="text-white font-medium border-b border-white/10">Java Spring Boot</span> and
                                <span
                                    className="text-white font-medium border-b border-white/10 ml-2">React Native</span>.
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-1 opacity-50">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                    Pune, India
                </span>
                            <span className="text-[10px] font-mono tracking-tighter text-white/60">
                    18.5204° N, 73.8567° E
                </span>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0"></div>
                </div>
            </header>

            <section
                className="min-h-[100vh] flex items-center justify-center bg-slate-50 border-y border-slate-100 px-8 lg:px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                     style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
                />

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-10%"}} // Increased margin so it triggers earlier on mobile
                    transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                    className="max-w-5xl text-center relative z-10"
                >
                    {/* FIXED: text-3xl for mobile ensures the quote stays in 3-4 lines max */}
                    <p className="text-3xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.2] lg:leading-[1.05] tracking-tight">
                        "Code is like humor. When you have to <span
                        className="text-slate-400 italic font-light">explain</span> it, it's bad."
                    </p>

                    <motion.div
                        initial={{width: 0}}
                        whileInView={{width: "80px"}}
                        transition={{delay: 0.8, duration: 0.8}}
                        className="h-[2px] bg-blue-600 mx-auto mt-8 lg:mt-12"
                    />

                    <p className="mt-6 lg:mt-8 text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                        — Cory House
                    </p>
                </motion.div>
            </section>

            <section className="relative bg-white py-24 lg:py-40 overflow-hidden">
                {/* FIXED: Smaller background text for mobile and adjusted movement range */}
                <motion.div
                    style={{x: useTransform(useScroll().scrollY, [800, 2000], [50, -50])}}
                    className="absolute top-10 lg:top-20 left-0 text-[30vw] lg:text-[20vw] font-black text-slate-50 uppercase pointer-events-none whitespace-nowrap z-0 opacity-50 lg:opacity-100"
                >
                    About Taaha About Taaha
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 relative z-10">
                    {/* Left Side: Sticky Label - Now stacks on mobile */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-40">
                            <motion.div
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                className="space-y-4"
                            >
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">
                                    01 // Identification
                                </h3>
                                <div className="w-12 h-[2px] bg-slate-900"></div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Narrative Bio */}
                    <div className="lg:col-span-8 space-y-12 lg:space-y-16">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.8}}
                        >
                            {/* FIXED: Smaller heading for mobile */}
                            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6 lg:mb-8">
                                Taaha Sidd.
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-12 lg:gap-16">
                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: 0.2}}
                                className="text-2xl md:text-4xl text-slate-600 leading-tight font-light"
                            >
                                I am a <span className="text-slate-900 font-medium">Full Stack Engineer</span> focused
                                on the <span className="text-slate-900 font-medium">Spring Ecosystem</span>. I build
                                production-ready systems using <span className="italic">Java</span>, <span
                                className="italic">PostgreSQL</span>, and <span className="italic">React Native</span>.
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100 pt-12">
                                <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{delay: 0.6}}
                                >
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Growth
                                        Track</h4>
                                    <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
                                        Currently deepening my knowledge in <span className="text-slate-900">System Design</span> and <span
                                        className="text-slate-900">CI/CD Pipelines</span> to ensure every build is
                                        scalable and production-grade.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full">
                {projects.map((p, i) => (
                    <ProjectRow key={i} p={p} i={i}/>
                ))}
            </section>

            <section className="bg-slate-50 py-24 lg:py-40 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        {/* FIXED: Sticky only on desktop; relative on mobile */}
                        <div className="lg:sticky lg:top-40">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">
                                03 // Technical Stack
                            </h3>
                            <div className="w-12 h-[2px] bg-slate-900"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 bg-white rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-sm">
                            {skills.map((group, idx) => (
                                <SkillCard key={idx} group={group} idx={idx}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FIXED: py-24 for mobile to keep the closing snappy */}
            <footer className="py-24 lg:py-40 bg-white border-t border-slate-100 relative overflow-hidden">
                {/* FIXED: Scaled down the background glow for mobile screens */}
                <div
                    className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-50/50 rounded-full blur-[80px] lg:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"/>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        {/* FIXED: Sticky only on desktop */}
                        <div className="lg:sticky lg:top-40">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">
                                04 // Connection
                            </h3>
                            <div className="w-12 h-[2px] bg-slate-900"></div>

                            {/* Local Time Widget: adjusted spacing for mobile */}
                            <div className="mt-8 lg:mt-12 space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current
                                    Time</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-xl font-medium tabular-nums text-slate-900">
                            {new Date().toLocaleTimeString('en-US', {
                                timeZone: 'Asia/Kolkata',
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            })} IST
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-12 lg:space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1] lg:leading-[0.9]">
                                Let's ship <br/>
                                <span className="text-blue-600 italic">something </span> better.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
                                I'm always open to discussing new projects, creative ideas or original architectural
                                challenges.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-4">
                            <motion.a
                                href="mailto:taaha.sidd@example.com"
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className="w-full sm:w-auto text-center group relative px-10 lg:px-12 py-5 lg:py-6 bg-slate-900 text-white rounded-xl lg:rounded-2xl font-black uppercase tracking-widest text-xs lg:text-sm overflow-hidden"
                            >
                                <span className="relative z-10">Start a Conversation</span>
                                <div
                                    className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
                            </motion.a>

                            <div className="flex gap-4 w-full sm:w-auto justify-start">
                                <SocialButton href="https://github.com/TaahaSidd" label="GitHub"/>
                                <SocialButton href="https://linkedin.com/in/tahasidd" label="LinkedIn"/>
                            </div>
                        </div>

                        <div
                            className="pt-16 lg:pt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100">
                            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                © 2026 Taaha Sidd — Made in Pune
                            </p>
                            <button
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors"
                            >
                                Back to top ↑
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

function ProjectRow({p, i}) {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    // Handle viewport-specific values
    const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const billboardScale = useTransform(scrollYProgress, [0.2, 0.4], [1.2, 1]);
    const billboardOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
    const challengeOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
    const solutionOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

    const solutionX = useTransform(scrollYProgress, [0.65, 0.75], [-50, 0]);
    const sideImageX = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

    return (
        /* FIXED: Height reduced for mobile to keep the experience snappy */
        <div ref={container} className="relative h-[350vh] lg:h-[600vh] bg-white border-t border-slate-100">

            {/* Case Study Label: Hidden on mobile to prevent clutter */}
            <div className="absolute top-20 left-6 lg:left-24 z-50 lg:block">
                <div className="sticky top-24 lg:top-40">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-2 lg:mb-4">
                        02 // 0{i + 1}
                    </h3>
                    <div className="w-8 lg:w-12 h-[2px] bg-slate-900"></div>
                </div>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* --- STAGE 1: TITLE --- */}
                <motion.div style={{opacity: introOpacity}} className="absolute z-10 text-center px-4">
                    <h2 className="text-[18vw] lg:text-[15vw] font-black tracking-tighter uppercase">{p.title}</h2>
                </motion.div>

                {/* --- STAGE 2: BILLBOARD --- */}
                {p.title === "Pulse" && (
                    <motion.div style={{opacity: billboardOpacity, scale: billboardScale}}
                                className="absolute inset-0 z-0">
                        <img src="/Pulse-Billboard2.png"
                             className="w-full h-full object-cover brightness-[0.6] lg:brightness-[0.7]"
                             alt="Billboard"/>
                        <div className="absolute inset-0 bg-black/50 lg:bg-black/40"/>
                    </motion.div>
                )}

                {/* --- STAGE 3: MISSION --- */}
                <motion.div style={{opacity: challengeOpacity}} className="absolute z-20 max-w-4xl px-8 text-center">
                    <h3 className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px] mb-4 italic underline underline-offset-8">The
                        Mission</h3>
                    <p className={`text-2xl md:text-5xl lg:text-6xl font-bold leading-tight ${p.title === "Pulse" ? "text-white" : "text-slate-900"}`}>
                        {p.story}
                    </p>
                </motion.div>

                {/* --- STAGE 4: SYSTEM DESIGN --- */}
                <motion.div
                    style={{opacity: solutionOpacity}}
                    /* FIXED: lg:grid-cols-2 for desktop, 1 col for mobile. Added lg:pl-48 to avoid overlapping the label */
                    className="max-w-7xl mx-auto px-6 lg:pl-48 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-30"
                >
                    <motion.div className="space-y-6 lg:space-y-8">
                        <div>
                            <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-widest mb-2">Implementation</h4>
                            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">System Design.</h2>
                        </div>

                        {/* FIXED: Reduced padding and font size for mobile */}
                        <div
                            className="p-6 lg:p-8 bg-slate-900 text-white rounded-2xl lg:rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden group">
                            <p className="text-lg lg:text-xl font-light leading-relaxed relative z-10">{p.solution}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                            {p.features?.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-blue-500"/>
                                    <span
                                        className="text-[9px] lg:text-[11px] font-bold uppercase tracking-wider text-slate-500">{feat}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section: Scaled for mobile */}
                        <div className="pt-4">
                            <motion.a
                                href={p.links.code}
                                target="_blank"
                                className="inline-flex items-center gap-3 lg:gap-4 group"
                            >
                                <div
                                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all">
                                    <svg width="18" height="18" className="lg:w-6 lg:h-6" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2">
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="text-[9px] font-black uppercase tracking-widest text-slate-400">GitHub</span>
                                    <span
                                        className="text-base lg:text-lg font-bold border-b border-slate-900 leading-none pb-1">Repository</span>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* FIXED: Image max-width for mobile so it doesn't cover text */}
                    <motion.div className="relative flex justify-center lg:justify-end pb-10 lg:pb-0">
                        <img src={p.image}
                             className="w-full max-w-[240px] md:max-w-xs lg:max-w-md h-auto object-contain drop-shadow-2xl"
                             alt={`${p.title} Mockup`}/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

function SkillCard({group, idx}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({currentTarget, clientX, clientY}) {
        const {left, top} = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            onMouseMove={onMouseMove}
            className="group relative p-10 border-r border-b border-slate-200 last:border-r-0 transition-colors duration-500 overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(59, 130, 246, 0.07),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10">
                <span
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-8 italic group-hover:text-blue-600 transition-colors">
                    0{idx + 1} // {group.category}
                </span>

                <ul className="space-y-4">
                    {group.items.map((item, i) => (
                        <motion.li
                            key={item}
                            initial={{opacity: 0.8}}
                            whileHover={{x: 5, opacity: 1}}
                            className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-3 cursor-default"
                        >
                            <motion.div
                                whileHover={{scale: 2}}
                                className="w-1 h-1 bg-blue-500 rounded-full"
                            />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function SocialButton({href, label}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            whileHover={{y: -5}}
            className="px-8 py-6 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:border-slate-900 hover:shadow-xl transition-all"
        >
            {label}
        </motion.a>
    );
}

function HeaderLink({href, label, color}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            style={{color: color}}
            className="text-[10px] font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity relative group"
        >
            {label}
            <span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 group-hover:w-full transition-all duration-300"/>
        </motion.a>
    );
}