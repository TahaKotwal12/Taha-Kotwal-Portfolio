import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Taha Kotwal
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Full Stack Developer specializing in FastAPI, Spring Boot, React,
                            and AI/ML solutions.
                        </p>
                        <div className="mt-4 flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>Pune, India • Open to UAE</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resume"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Connect</h3>
                        <div className="mt-4 flex space-x-4">
                            <a
                                href="https://github.com/TahaKotwal12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-primary"
                                aria-label="GitHub"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com/in/taha-kotwal-894b911b5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-primary"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:tahakotwal54@gmail.com"
                                className="text-muted-foreground transition-colors hover:text-primary"
                                aria-label="Email"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Taha Kotwal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
