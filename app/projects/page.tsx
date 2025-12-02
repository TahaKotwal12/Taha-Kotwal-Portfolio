"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import projects from "@/lib/data/projects.json";

const categories = ["All", "AI/ML", "Full Stack", "Frontend", "Automation"];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header with Gradient */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                    Projects
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    A collection of my work in full-stack development, AI/ML, and automation
                </p>
            </motion.div>

            {/* Category Filter with Pills */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-12 flex flex-wrap justify-center gap-3"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all ${selectedCategory === category
                                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30"
                                : "border-2 border-border bg-background/50 text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5"
                            }`}
                    >
                        {selectedCategory === category && (
                            <motion.div
                                layoutId="activeCategory"
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{category}</span>
                    </button>
                ))}
            </motion.div>

            {/* Projects Grid with Stagger Animation */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        layout
                    >
                        <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 shadow-sm backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-10"></div>

                            {/* Glow effect on hover */}
                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 blur transition-opacity group-hover:opacity-20"></div>

                            <div className="relative flex flex-1 flex-col p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                                            {project.title}
                                        </h3>
                                        {project.featured && (
                                            <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                                                <Sparkles className="h-3 w-3" />
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                                        {project.role}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="mt-3 text-sm text-muted-foreground">
                                    {project.shortDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                                            +{project.techStack.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Why it matters */}
                                <p className="mt-4 text-sm italic text-muted-foreground">
                                    💡 {project.whyItMatters}
                                </p>

                                {/* Links */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                    >
                                        View details
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            <Github className="mr-1 h-4 w-4" />
                                            Code
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            <ExternalLink className="mr-1 h-4 w-4" />
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground">
                        No projects found in this category.
                    </p>
                </motion.div>
            )}
        </div>
    );
}
