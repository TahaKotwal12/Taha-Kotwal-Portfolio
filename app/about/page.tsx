"use client";

import { Metadata } from "next";
import resumeData from "@/lib/data/resume-data.json";
import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header with Gradient */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-3xl text-center"
            >
                <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                    About Me
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    {resumeData.summary}
                </p>
            </motion.div>

            {/* Experience with Stagger Animation */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-16"
            >
                <div className="flex items-center space-x-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Experience</h2>
                </div>
                <div className="mt-6 space-y-6">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-5"></div>

                            <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-card-foreground">
                                        {exp.title}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-primary">
                                        {exp.company}
                                    </p>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground sm:mt-0">
                                    {exp.period}
                                </p>
                            </div>
                            <ul className="relative mt-4 space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex text-sm text-muted-foreground">
                                        <span className="mr-2 text-primary">•</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Education */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-16"
            >
                <div className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Education</h2>
                </div>
                <div className="mt-6 space-y-4">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                            className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-card-foreground">
                                        {edu.degree}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {edu.institution}
                                    </p>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground sm:mt-0">
                                    {edu.period}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Skills with Grid Animation */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-16"
            >
                <div className="flex items-center space-x-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Skills</h2>
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Languages", skills: resumeData.skills.languages },
                        { title: "Frameworks", skills: resumeData.skills.frameworks },
                        { title: "Databases", skills: resumeData.skills.databases },
                        { title: "DevOps", skills: resumeData.skills.devops },
                        { title: "AI/ML", skills: resumeData.skills.ai },
                        { title: "Soft Skills", skills: resumeData.skills.soft.slice(0, 4) },
                    ].map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                            className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <h3 className="font-semibold text-card-foreground group-hover:text-primary">
                                {category.title}
                            </h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-primary/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-16"
            >
                <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {resumeData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + index * 0.03, duration: 0.3 }}
                            className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
                        >
                            <p className="text-sm font-medium text-card-foreground">{cert}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Location with Gradient Border */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-16"
            >
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 p-6 text-center backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
                    <p className="relative text-lg font-medium text-foreground">
                        📍 Based in Pune, India
                    </p>
                    <p className="relative mt-2 text-sm text-muted-foreground">
                        Open to remote opportunities • Willing to relocate
                    </p>
                </div>
            </motion.section>
        </div>
    );
}
