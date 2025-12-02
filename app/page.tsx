"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import projects from "@/lib/data/projects.json";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { TypewriterCode } from "@/components/ui/typewriter-code";
import { AIParticles } from "@/components/ui/ai-particles";
import { FloatingTechIcons } from "@/components/ui/floating-tech-icons";

export default function Home() {
  // Prioritize Encatch and Ensights, then other featured projects
  const featuredProjects = [
    ...projects.filter((p) => p.id === "encatch" || p.id === "ensights"),
    ...projects.filter((p) => p.featured && p.id !== "encatch" && p.id !== "ensights"),
  ].slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Hero Section with Enhanced Animations */}
      <section className="relative overflow-hidden">
        {/* AI Particles */}
        <AIParticles />

        {/* Floating Tech Icons */}
        <FloatingTechIcons />

        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-bg opacity-10 dark:opacity-20"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

        <div className="container relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Terminal-style badge */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-sm font-mono text-green-400 ring-1 ring-green-400/20 backdrop-blur-sm"
            >
              <Terminal className="h-4 w-4 animate-pulse" />
              <TypewriterCode />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl animate-gradient bg-[length:200%_auto]">
                Taha Kotwal
              </span>
              {/* Glitch effect overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent opacity-50 blur-sm sm:text-6xl animate-pulse">
                Taha Kotwal
              </span>
            </motion.h1>

            {/* Multiple Role Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                "Software Engineer",
                "AI/ML Engineer",
                "Full Stack Developer"
              ].map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 backdrop-blur-sm"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Animated tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 flex flex-wrap items-center justify-center gap-2"
            >
              {["FastAPI", "Spring Boot", "React", "AI/ML", "PostgreSQL"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                  className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              Building scalable SaaS platforms, analytics tools, and AI-driven solutions.
              <br />
              Transforming ideas into production-ready applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>
              <Link
                href="/resume"
                className="group inline-flex items-center rounded-lg border-2 border-primary/20 bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center rounded-lg border-2 border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects with 3D Cards */}
      <section className="relative border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Production SaaS platforms and AI-powered tools
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block h-full overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-10"></div>

                  {/* Binary code background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                    <div className="font-mono text-xs text-primary overflow-hidden">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i}>
                          {Array.from({ length: 50 }).map(() => Math.random() > 0.5 ? "1" : "0").join("")}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex flex-col space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-sm font-medium text-primary">
                      View project
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview with Glassmorphism */}
      <section className="relative overflow-hidden py-20">
        {/* Background decoration */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Hi — I'm Taha. I build scalable web applications and AI-enabled products.
              I specialize in full-stack development with FastAPI and Spring Boot,
              creating production-ready SaaS platforms, analytics tools, and automated solutions.
              Currently working as an Associate Software Engineer at Cyber Manager Software Services.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center rounded-lg border-2 border-primary/20 bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105"
              >
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
