"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const videoList = [
  { id: 1, src: "/videos/makeover.mp4" },
  { id: 2, src: "/videos/invest.mp4" },
  { id: 3, src: "/videos/happy.mp4" },
  { id: 4, src: "/videos/haircut.mp4" },
  { id: 5, src: "/videos/fever.mp4" },
  { id: 6, src: "/videos/rajsthani.mp4" },
];

function VideoCard({ src, index, onClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed on mount:", err);
      });
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: (index % 3) * 0.15,
          },
        },
      }}
      onClick={onClick}
      className="group relative aspect-[9/16] rounded-3xl overflow-hidden glass-panel cursor-pointer select-none bg-black"
    >
      {/* Golden border glow on hover */}
      <div className="absolute inset-0 border border-gold-primary/0 group-hover:border-gold-primary/30 rounded-3xl transition-all duration-500 z-20 pointer-events-none" />

      {/* Subtle dark overlay that fades slightly on hover */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />

      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
      />
    </motion.div>
  );
}

export default function Works() {
  const [activeVideo, setActiveVideo] = useState(null);
  const modalVideoRef = useRef(null);



  // Attempt to open the video element in native browser full-screen when modal starts
  useEffect(() => {
    if (activeVideo && modalVideoRef.current) {
      // Small timeout to allow the modal render
      const timer = setTimeout(() => {
        if (modalVideoRef.current) {
          // Play the video
          modalVideoRef.current.play().catch((err) => {
            console.log("Modal play error:", err);
          });
          
          // Request browser fullscreen if available
          const reqFs =
            modalVideoRef.current.requestFullscreen ||
            modalVideoRef.current.webkitRequestFullscreen ||
            modalVideoRef.current.mozRequestFullScreen ||
            modalVideoRef.current.msRequestFullscreen;
          
          if (reqFs) {
            reqFs.call(modalVideoRef.current).catch((err) => {
              console.log("Fullscreen request failed, using fallback custom modal overlay:", err);
            });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeVideo]);

  return (
    <section id="works" className="py-24 bg-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-[1px] w-6 bg-gold-primary" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
              OUR SHOWCASE
            </span>
            <span className="h-[1px] w-6 bg-gold-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl tracking-wide font-extrabold text-[#1a1a1a] mb-6"
          >
            Our <span className="gold-text-gradient">Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#1a1a1a]/60 leading-relaxed font-light"
          >
            Watch our master stylists in action. Hover over any video to preview and click for full screen showcase.
          </motion.p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoList.map((video, index) => (
            <VideoCard
              key={video.id}
              src={video.src}
              index={index}
              onClick={() => setActiveVideo(video.src)}
            />
          ))}
        </div>
      </div>

      {/* Premium Fullscreen Overlay Modal (Fallback/Companion to Native Fullscreen) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-[160] w-12 h-12 rounded-full bg-white/10 hover:bg-gold-primary hover:text-black flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:border-gold-primary shadow-lg group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl max-h-[85vh] aspect-[9/16] sm:aspect-video rounded-2xl overflow-hidden glass-panel relative"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
