import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import projects from "@/lib/data/projects.json";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} - Taha Kotwal`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
                href="/projects"
                className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            {/* Project Header */}
            <div className="mt-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">
                            {project.title}
                        </h1>
                        <p className="mt-2 text-lg text-muted-foreground">
                            {project.shortDescription}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                View Code
                            </a>
                        )}
                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Meta Info */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center">
                        <span className="font-medium text-foreground">Role:</span>
                        <span className="ml-2 inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {project.role}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-medium text-foreground">Category:</span>
                        <span className="ml-2 text-muted-foreground">{project.category}</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                </p>
            </section>

            {/* Why It Matters */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Why It Matters</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {project.whyItMatters}
                </p>
            </section>

            {/* Tech Stack */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-card-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Key Achievements */}
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Key Achievements</h2>
                <ul className="mt-4 space-y-3">
                    {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{achievement}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Related Repositories */}
            {project.relatedRepos && project.relatedRepos.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-foreground">
                        Related Repositories
                    </h2>
                    <div className="mt-4 space-y-2">
                        {project.relatedRepos.map((repo, index) => (
                            <a
                                key={index}
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm text-primary hover:underline"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                {repo.split("/").slice(-1)[0]}
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* Note */}
            {project.note && (
                <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> {project.note}
                    </p>
                </div>
            )}
        </div>
    );
}
