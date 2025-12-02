"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        honeypot: "", // Spam protection
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData.honeypot) {
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "", honeypot: "" });
            } else {
                const data = await response.json();
                setStatus("error");
                setErrorMessage(data.error || "Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Info */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    <a
                        href="mailto:tahakotwal54@gmail.com"
                        className="flex items-center space-x-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                    >
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-medium text-card-foreground">Email</p>
                            <p className="text-sm text-muted-foreground">
                                tahakotwal54@gmail.com
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/TahaKotwal12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                    >
                        <Github className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-medium text-card-foreground">GitHub</p>
                            <p className="text-sm text-muted-foreground">@TahaKotwal12</p>
                        </div>
                    </a>
                    <a
                        href="https://linkedin.com/in/taha-kotwal-894b911b5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                    >
                        <Linkedin className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-medium text-card-foreground">LinkedIn</p>
                            <p className="text-sm text-muted-foreground">Taha Kotwal</p>
                        </div>
                    </a>
                    <div className="flex items-center space-x-3 rounded-lg border border-border bg-card p-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-medium text-card-foreground">Location</p>
                            <p className="text-sm text-muted-foreground">
                                Pune, India • Open to UAE
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot field - hidden from users */}
                        <input
                            type="text"
                            name="honeypot"
                            value={formData.honeypot}
                            onChange={(e) =>
                                setFormData({ ...formData, honeypot: e.target.value })
                            }
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-foreground"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-foreground"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-foreground"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="Your message..."
                            />
                        </div>

                        {status === "error" && (
                            <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                                {errorMessage}
                            </div>
                        )}

                        {status === "success" && (
                            <div className="rounded-lg bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {status === "loading" ? (
                                "Sending..."
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
