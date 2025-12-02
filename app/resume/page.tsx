import { Metadata } from "next";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import resumeData from "@/lib/data/resume-data.json";

export const metadata: Metadata = {
    title: "Resume - Taha Kotwal",
    description: "Download Taha Kotwal's resume or view it online.",
};

export default function ResumePage() {
    return (
        <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header with Download Button */}
            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <h1 className="text-3xl font-bold text-foreground">Resume</h1>
                <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                </a>
            </div>

            {/* Resume Content - ATS Friendly */}
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm print:border-0 print:shadow-none">
                {/* Personal Info */}
                <header className="border-b border-border pb-6">
                    <h1 className="text-3xl font-bold text-card-foreground">
                        {resumeData.personalInfo.name}
                    </h1>
                    <p className="mt-2 text-lg text-primary">
                        {resumeData.personalInfo.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <Mail className="mr-2 h-4 w-4" />
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="hover:text-primary"
                            >
                                {resumeData.personalInfo.email}
                            </a>
                        </div>
                        <div className="flex items-center">
                            <Phone className="mr-2 h-4 w-4" />
                            <span>{resumeData.personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>
                                {resumeData.personalInfo.location} • Open to{" "}
                                {resumeData.personalInfo.openTo}
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-primary"
                        >
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                        </a>
                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-primary"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </div>
                </header>

                {/* Summary */}
                <section className="mt-6">
                    <h2 className="text-xl font-bold text-card-foreground">Summary</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {resumeData.summary}
                    </p>
                </section>

                {/* Experience */}
                <section className="mt-6">
                    <h2 className="text-xl font-bold text-card-foreground">
                        Professional Experience
                    </h2>
                    <div className="mt-4 space-y-6">
                        {resumeData.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                                    <h3 className="font-semibold text-card-foreground">
                                        {exp.title}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="mt-1 text-sm font-medium text-primary">
                                    {exp.company}
                                </p>
                                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mt-6">
                    <h2 className="text-xl font-bold text-card-foreground">Education</h2>
                    <div className="mt-4 space-y-3">
                        {resumeData.education.map((edu, index) => (
                            <div key={index}>
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                                    <h3 className="font-semibold text-card-foreground">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {edu.institution}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="mt-6">
                    <h2 className="text-xl font-bold text-card-foreground">Skills</h2>
                    <div className="mt-4 space-y-3">
                        <div>
                            <h3 className="font-semibold text-card-foreground">
                                Programming Languages & Frameworks:
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {[...resumeData.skills.languages, ...resumeData.skills.frameworks].join(", ")}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-card-foreground">
                                Backend Development:
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {resumeData.skills.backend.join(", ")}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-card-foreground">
                                Frontend Development:
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {resumeData.skills.frontend.join(", ")}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-card-foreground">Databases:</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {resumeData.skills.databases.join(", ")}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-card-foreground">
                                DevOps & Tools:
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {resumeData.skills.devops.join(", ")}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-card-foreground">
                                AI/ML & Automation Tools:
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {resumeData.skills.ai.join(", ")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mt-6">
                    <h2 className="text-xl font-bold text-card-foreground">
                        Certifications
                    </h2>
                    <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        {resumeData.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
