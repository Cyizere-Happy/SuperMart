"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    animation = "reveal",
    delay = 0,
    className = "",
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [loaderFinished, setLoaderFinished] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Standard event listener for preloader completion
        const handleLoaderFinished = () => {
            setLoaderFinished(true);
        };

        window.addEventListener('simba-loader-finished', handleLoaderFinished);

        // Initial check in case it finished before this mounted or in a previous page view
        if (typeof window !== 'undefined' && (sessionStorage.getItem('simba-loader-done') || (window as any).simbaLoaderDone)) {
            setLoaderFinished(true);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px" // Adjusted for better trigger timing
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            window.removeEventListener('simba-loader-finished', handleLoaderFinished);
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Only show active if both in viewport AND loader has finished
    const isActive = isVisible && loaderFinished;

    return (
        <div
            ref={domRef}
            className={`${animation} ${isActive ? "active" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
