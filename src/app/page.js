"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";

export default function PortfolioPage() {
    const { scrollY } = useScroll();

    const navBackground = useTransform(scrollY, [0, 100], ["rgba(10, 10, 10, 0)", "rgba(255, 255, 255, 0.8)"]);
    const navTextColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.7)", "rgba(15, 23, 42, 1)"]);
    const navBorder = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(226, 232, 240, 1)"]);

    const skills = [
        { category: "Core Stack", items: ["Java", "Spring Boot", "React Native"] },
        { category: "Backend", items: ["Spring Security", "PostgreSQL", "REST APIs"] },
        { category: "Frontend", items: ["React Native", "React.js"] },
        { category: "Database", items: ["PostgreSQL", "SQLite"] }
    ];


    const projects = [
        {
            title: "Agora",
            type: "Campus Marketplace",
            story: "A student-focused marketplace designed for college communities, enabling safe and structured buying, selling, and service exchange.",
            solution: "Developed a full-stack mobile application with a React Native frontend and a Spring Boot backend. Implemented university-based user verification, role-based access control, and a real-time chat system.",
            features: [
                "University-Based User Verification",
                "In-App Real-Time Chat",
                "Item & Service Listings",
                "Admin Moderation Tools"
            ],
            tech: ["Spring Boot", "React Native", "PostgreSQL", "Cloudinary"],
            links: { code: "https://github.com/TaahaSidd/Agora" },
            image: "/Hand and iPhone 16 Agora.png",
        },
        {
            title: "Pulse",
            type: "Automated Expense Tracker",
            story: "Tracks expenses automatically by parsing bank notifications directly on your phone. All processing happens locally for privacy.",
            tech: ["React Native", "SQLite", "Notification Listener", "Spring Boot"],
            links: { code: "https://github.com/TaahaSidd/Pulse" },
            image: "/Pulse-Billboard2.png",
        }
    ];

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-slate-900 selection:text-white pb-20">
            <motion.nav
                style={{
                    backgroundColor: navBackground, borderColor: navBorder, backdropFilter: "blur(12px)"
                }}
                className="fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 py-4 lg:py-6"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                    <Link href="/" className="group flex items-center gap-2 shrink-0">
                        <motion.span
                            style={{ color: navTextColor }}
                            className="text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]"
                        >
                            Taaha Siddiqui.
                        </motion.span>
                    </Link>

                    <div className="flex gap-4 lg:gap-8 items-center">
                        <div className="hidden md:flex gap-8">
                            <HeaderLink href="https://linkedin.com/in/tahasidd" label="LinkedIn" color={navTextColor} />
                            <HeaderLink href="https://github.com/TaahaSidd" label="GitHub" color={navTextColor} />
                        </div>

                        <a
                            href="/Taaha_Siddiqui_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 lg:px-6 lg:py-2 bg-slate-900 text-white text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/10"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </motion.nav>

            <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
                <motion.div
                    style={{
                        y: useTransform(useScroll().scrollY, [0, 500], [0, 200]),
                        scale: useTransform(useScroll().scrollY, [0, 500], [1, 1.1])
                    }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/HeroBG.jpg"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#0a0a0a]"></div>
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] uppercase mb-8">
                            Full Stack <br />
                            <span className="opacity-100">Developer</span>
                        </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-8 border-t border-white/10 pt-8 w-full max-w-2xl">
                        <div className="space-y-4">
                            <p className="text-base md:text-xl text-slate-400 leading-snug font-light">
                                Designing and building the kind of apps I’d want to use myself.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-white opacity-80">
                                Pune, India
                            </span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0"></div>
                </div>
            </header>

            <section className="relative bg-white py-24 lg:py-40 overflow-hidden">
                <motion.div
                    style={{ x: useTransform(useScroll().scrollY, [400, 1500], [100, -100]) }}
                    className="absolute top-10 lg:top-20 left-0 text-[25vw] lg:text-[18vw] font-black text-slate-50 uppercase pointer-events-none whitespace-nowrap z-0 opacity-40 lg:opacity-70 leading-none"
                >
                    Code Ship
                </motion.div>

                <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-8 lg:mb-12">
                            Taaha Siddiqui.
                        </h2>

                        <p className="text-2xl md:text-4xl text-slate-600 leading-tight font-light max-w-3xl mx-auto mb-16 lg:mb-20">
                            I'm a Full Stack dev who mostly works with <span className="text-slate-900 font-medium">Spring Boot </span>
                            {" "}and builds real apps with Java, PostgreSQL, and React Native.
                        </p>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
                                I'm just focused on building apps and strengthening my tech stack,
                                making sure I can ship clean, reliable code with the tools I love working with.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">
                            Projects
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto">
                            Apps I've built that solve real problems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200"
                            >
                                <div className="p-6 border-b border-slate-100">
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mt-1">
                                        {p.type}
                                    </p>
                                </div>

                                <div className="h-48 lg:h-56 overflow-hidden bg-slate-50">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {p.story}
                                    </p>

                                    <div className="flex items-center gap-4 mb-4">
                                        <motion.a
                                            href={p.links.code}
                                            target="_blank"
                                            whileHover={{ x: 4 }}
                                            className="flex items-center gap-1 text-slate-600 hover:text-slate-900 text-sm font-medium group/link"
                                        >
                                            Github Repo.
                                        </motion.a>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                        {p.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-16 lg:py-24 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16 lg:mb-20">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">
                            Tech Stack
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
                            Tools I use to build production apps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                        {skills.map((group, idx) => (
                            <SkillCard key={idx} group={group} idx={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-16 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-50/50 rounded-full blur-[80px] lg:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 lg:mb-20">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">
                            Let's ship <br />
                            something better.
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Open to new projects, ideas, or interesting technical challenges.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-8 lg:gap-12 mb-16">
                        <motion.a
                            href="https://mail.google.com/mail/?view=cm&to=tahasidd33@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="text-center group relative px-10 lg:px-12 py-5 lg:py-6 bg-slate-900 text-white rounded-xl lg:rounded-2xl font-black uppercase tracking-widest text-sm overflow-hidden inline-block"
                        >
                            <span className="relative z-10">Start a Conversation</span>
                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl lg:rounded-2xl" />
                        </motion.a>

                        <div className="flex gap-6">
                            <SocialButton href="https://github.com/TaahaSidd" label="GitHub" />
                            <SocialButton href="https://linkedin.com/in/tahasidd" label="LinkedIn" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-lg font-medium text-slate-900">
                                {new Date().toLocaleTimeString('en-US', {
                                    timeZone: 'Asia/Kolkata',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                })} IST
                            </span>
                        </div>

                        <div className="flex items-center gap-8">
                            <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                © 2026 Portfolio
                            </p>
                            <button
                                type="button"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-sm font-black uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors"
                            >
                                ↑ Top
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

        </main>
    );
}

function SkillCard({ group, idx }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <motion.div onMouseMove={onMouseMove} className="group relative p-10 border-r border-b border-slate-200 last:border-r-0 transition-colors duration-500 overflow-hidden">
            <motion.div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"
                style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.07), transparent 80%)` }} />
            <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-8 italic group-hover:text-blue-600 transition-colors">
                    {group.category}
                </span>
                <ul className="space-y-4">
                    {group.items.map((item) => (
                        <motion.li key={item} initial={{ opacity: 0.8 }} whileHover={{ x: 5, opacity: 1 }} className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-3 cursor-default">
                            <motion.div whileHover={{ scale: 2 }} className="w-1 h-1 bg-blue-500 rounded-full" />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function SocialButton({ href, label }) {
    return (
        <motion.a href={href} target="_blank" whileHover={{ y: -5 }} className="px-8 py-6 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:border-slate-900 hover:shadow-xl transition-all">
            {label}
        </motion.a>
    );
}

function HeaderLink({ href, label, color }) {
    return (
        <motion.a href={href} target="_blank" style={{ color: color }} className="text-[10px] font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity relative group">
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 group-hover:w-full transition-all duration-300" />
        </motion.a>
    );
}