"use client";

import Image from "next/image";
import { MusicPlayer } from "@/components/ui/music-player";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101010] relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - This will be the main visible content on mobile */}
      <div className="relative z-10 pt-8 pb-16 px-4 safe-top">
        <div className="max-w-md mx-auto text-center space-y-8">
          {/* Tech GIF with Glowing Effect */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg animate-pulse bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 blur-xl opacity-75"></div>
              <div className="relative">
                <Image
                  src="/tech(no).gif"
                  alt="Tech illustration"
                  width={300}
                  height={300}
                  className="rounded-lg relative z-10 w-full max-w-[300px] h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-red-400/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
            shernan javier
          </h1>

          {/* Business Card Content */}
          <div className="shadow-lg p-6 max-w-sm mx-auto relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ 
            backgroundImage: 'url(/card-texture.webp)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}>
            {/* Semi-transparent overlay to ensure text readability */}
            <div className="absolute inset-0 bg-white/20"></div>
            
            {/* Content with relative positioning to appear above overlay */}
            <div className="relative z-10">
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold relative" style={{
                  backgroundColor: '#425D9B',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0.5px 0.5px 0 rgba(245, 245, 245, 0.3), -0.5px -0.5px 0 rgba(0, 0, 0, 0.3)'
                }}>
                  im cto, bruh.
                </div>
                <div className="text-lg relative" style={{
                  backgroundColor: '#000000',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0.5px 0.5px 0 rgba(245, 245, 245, 0.3), -0.5px -0.5px 0 rgba(0, 0, 0, 0.3)'
                }}>
                  certified <u>techno</u> officer 🕺
                </div>
              </div>
              
              <div className="mt-6 space-y-3 text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/ampm.jpg"
                    alt="AMPM Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                  <a href="https://www.instagram.com/ampm_toronto/?hl=en" target="_blank" rel="noopener noreferrer" className="font-bold relative hover:underline" style={{
                    backgroundColor: '#000000',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0.5px 0.5px 0 rgba(245, 245, 245, 0.3), -0.5px -0.5px 0 rgba(0, 0, 0, 0.3)'
                  }}>ampm</a> <span className="relative" style={{
                    backgroundColor: '#000000',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0.5px 0.5px 0 rgba(245, 245, 245, 0.3), -0.5px -0.5px 0 rgba(0, 0, 0, 0.3)'
                  }}>vibing headquarters</span>
                </div>
                <div className="relative" style={{
                  backgroundColor: '#000000',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0.5px 0.5px 0 rgba(245, 245, 245, 0.3), -0.5px -0.5px 0 rgba(0, 0, 0, 0.3)'
                }}>1566 queen st w, toronto, on m6r 1a6</div>
                <div className="relative" style={{
                  backgroundColor: '#000000',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0.5px 0.5px 0 rgba(245, 245, 245, 0.3), -0.5px -0.5px 0 rgba(0, 0, 0, 0.3)'
                }}>phone: +1 (555) 123-4567</div>
              </div>
              
              {/* Blue bottom bar */}
              <div className="mt-6 h-2 -mx-6 -mb-6 relative z-10" style={{ backgroundColor: '#425D9B' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content - Below the fold on mobile */}
      <div className="relative z-10 px-4 pb-16">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Fun Transition Text */}
          <div className="text-center space-y-4">
            <div className="text-white/40 text-sm flex items-center justify-center gap-4">
              <span>i dont actually work there</span>
              <Image
                src="/Arrow 02.svg"
                alt="Down arrow"
                width={30}
                height={30}
                className="w-8 h-8 opacity-40 -rotate-[20deg]"
              />
            </div>
            <div className="text-white/40 text-sm flex items-center justify-center gap-4">
              <Image
                src="/Arrow 07.svg"
                alt="Down arrow"
                width={30}
                height={30}
                className="w-8 h-8 opacity-40 scale-x-[-1] rotate-[45deg]"
              />
              <span>but heres where i actually do</span>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6 text-center">
            <div className="text-white/80 text-lg">
              building <b>merchme</b> <span className="whitespace-nowrap">to learn how to be a founder</span>
              <br></br><span className="text-white/40 text-sm">(currently raising pre-seed :D)</span>
            </div>

            <div className="text-white/80 text-lg">
              currently a <b><a href="https://www.cansbridgescholars.com/" className="text-white/80 hover:underline transition-colors" target="_blank">cansbridge scholar</a> </b><span className="whitespace-nowrap">to learn how to be a great entreprenuer</span>
              <br></br><span className="text-white/40 text-sm">(escaping the gravitational pull of mediocrity)</span>
            </div>

            <div className="text-white/80 text-lg">
              previously worked at <b><a href="https://www.cloverlabs.ai/" className="text-white/80 hover:underline transition-colors" target="_blank">clover labs</a> </b><span className="whitespace-nowrap">building ai agents</span> <br></br>
              <span className="text-white/40 text-sm">(learned so much surrounded by cool people :D)</span>
            </div>
            
            <div className="text-white/80 text-lg">
              and previously worked at td, thales, taplytics <br></br>
              <span className="text-white/40 text-sm">(drank the corporate kool-aid)</span>
            </div>
          </div>

          {/* Contact Button and Social Icons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 max-w-md mx-auto">
            <a 
              href="mailto:shernanjavier@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
            >
              contact me
            </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/ShernanJ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 4.624-5.479 4.869.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/shernanjavier" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com/shernan.javier" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://x.com/shernanjavier" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Music Player */}
      {/* <MusicPlayer /> */}
    </div>
  );
}
