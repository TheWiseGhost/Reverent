"use client";

import Hero from "@/components/Hero";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Timeline from "@/components/Timeline";
import Benefits from "@/components/Benefits";
import Form from "@/components/Form";

const HomePage = () => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    scrollInstanceRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Clean up on unmount
    return () => {
      if (scrollInstanceRef.current) scrollInstanceRef.current.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && scrollInstanceRef.current) {
      scrollInstanceRef.current.scrollTo(section, {
        offset: 100, // Adjust as needed
        duration: 2, // Adjust duration as needed
      });
    }
  };

  return (
    <>
      <div data-scroll-container id="scroll-container" ref={scrollRef}>
        <div data-scroll-section>
          <div className="bg-white">
            <Hero scrollToSection={scrollToSection} />
            <Timeline scrollToSection={scrollToSection} />
            <Benefits scrollToSection={scrollToSection} />
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
