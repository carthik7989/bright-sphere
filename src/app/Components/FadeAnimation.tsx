"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface FadeAnimationProps {
    children: ReactNode;
    /** CSS selector for elements to animate within the container. Default: direct children */
    selector?: string;
    /** Animation type */
    animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp";
    /** Duration of each element's animation in seconds. Default: 0.6 */
    duration?: number;
    /** Delay between each element's animation in seconds. Default: 0.15 */
    stagger?: number;
    /** How far down the viewport the element should be before triggering (e.g., "80%" means trigger when element is 80% down). Default: "80%" */
    triggerStart?: string;
    /** Additional className for the wrapper */
    className?: string;
    /** Whether to replay animation when scrolling back up. Default: false */
    replay?: boolean;
}

const animations = {
    fadeUp: { from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } },
    fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
    fadeLeft: { from: { opacity: 0, x: -40 }, to: { opacity: 1, x: 0 } },
    fadeRight: { from: { opacity: 0, x: 40 }, to: { opacity: 1, x: 0 } },
    scaleUp: { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } },
};

export default function FadeAnimation({
    children,
    selector,
    animation = "fadeUp",
    duration = 0.6,
    stagger = 0.15,
    triggerStart = "80%",
    className = "",
    replay = false,
}: FadeAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Get elements to animate
        const elements = selector
            ? containerRef.current.querySelectorAll(selector)
            : containerRef.current.children;

        if (elements.length === 0) return;

        const animationConfig = animations[animation];

        // Set initial state
        gsap.set(elements, animationConfig.from);

        // Create the animation
        const tween = gsap.to(elements, {
            ...animationConfig.to,
            duration,
            stagger,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: `top ${triggerStart}`,
                toggleActions: replay
                    ? "play reverse play reverse"
                    : "play none none none",
            },
        });

        // Cleanup on unmount
        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === containerRef.current) {
                    trigger.kill();
                }
            });
        };
    }, [selector, animation, duration, stagger, triggerStart, replay]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}
