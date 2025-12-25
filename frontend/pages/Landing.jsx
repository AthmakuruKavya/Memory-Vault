// import React from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import { useAppSelector } from '../store/hooks.js';

// const Landing = () => {
//   const { user } = useAppSelector((state) => state.auth);

//   // If user is already logged in, redirect to their vault
//   if (user) {
//     return <Navigate to="/vault" replace />;
//   }

//   return (
//     <div className="bg-white min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
      
//       {/* 1. Hero Section - Immersive & Nostalgic */}
//       <section className="relative pt-20 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/50 via-white to-blue-50/50">
        
//         {/* Abstract Background Shapes */}
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-brand-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
//             {/* Left: Copy */}
//             <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
//               <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 border border-brand-100 shadow-sm backdrop-blur-sm">
//                 <span className="relative flex h-3 w-3">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
//                 </span>
//                 <span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">Private Digital Sanctuary</span>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-serif font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
//                 Preserve the <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-600 to-brand-600 bg-300% animate-gradient">
//                   Moments That Matter.
//                 </span>
//               </h1>
              
//               <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
//                 Your photos tell a story. Don't let them get lost in the cloud. 
//                 <strong className="font-semibold text-gray-900"> Memory Vault</strong> is the safe haven for your life's most precious memories, organized and secure forever.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Link 
//                   to="/signup" 
//                   className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
//                 >
//                   <span className="relative z-10">Start Your Vault Free</span>
//                   <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-brand-600/20"></div>
//                 </Link>
//                 <Link 
//                   to="/login" 
//                   className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
//                 >
//                   Log In
//                 </Link>
//               </div>
              
//               <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
//                 <span className="flex items-center"><i className="fas fa-lock text-brand-500 mr-2"></i> Encrypted Storage</span>
//                 <span className="flex items-center"><i className="fas fa-infinity text-brand-500 mr-2"></i> Forever Access</span>
//               </div>
//             </div>

//             {/* Right: Visual (Polaroid Stack Effect) */}
//             <div className="lg:w-1/2 relative animate-float">
//                {/* Back Image (Rotated) */}
//                <div className="absolute top-4 right-4 w-full h-full bg-white p-3 rounded-xl shadow-lg transform rotate-6 opacity-60 scale-95 border border-gray-100"></div>
//                <div className="absolute top-2 right-2 w-full h-full bg-white p-3 rounded-xl shadow-lg transform rotate-3 opacity-80 scale-95 border border-gray-100"></div>
               
//                {/* Main Image */}
//                <div className="relative bg-white p-3 md:p-4 rounded-2xl shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 border border-gray-100">
//                   <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
//                     <img 
//                         src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop" 
//                         alt="Friends laughing together" 
//                         className="w-full h-full object-cover"
//                     />
//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
//                     {/* Floating UI Element */}
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
//                             <div className="flex items-center gap-3 mb-2">
//                                 <span className="bg-brand-100 text-brand-600 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">On This Day</span>
//                                 <span className="text-gray-400 text-xs">2 years ago</span>
//                             </div>
//                             <p className="font-serif text-lg font-bold text-gray-900 leading-tight">"Best road trip ever! 🚐✨"</p>
//                         </div>
//                     </div>
//                   </div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Purpose Section - Emotional Typography */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         {/* Giant Watermark */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif font-black text-gray-50 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
//             MEMORIES
//         </div>

//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="w-16 h-1 bg-brand-500 mx-auto mb-8 rounded-full"></div>
//           <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
//             We believe your memories are the <br/>
//             <span className="italic text-brand-600">most valuable asset</span> you own.
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-3xl mx-auto">
//             In a world of fleeting snaps and temporary stories, <span className="font-medium text-gray-800">Memory Vault</span> is designed to be permanent. 
//             It's not just about storage; it's about <span className="underline decoration-brand-300 decoration-2 underline-offset-4">legacy</span>. 
//             We built a quiet, private space where you can slow down and curate the moments that define who you are.
//           </p>
//         </div>
//       </section>

//       {/* 3. Key Features - Modern Grid */}
//       <section className="py-24 bg-slate-50 relative">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-20">
//             <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">Everything You Need</h2>
//             <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">A Home for Your History</h3>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { 
//                 icon: "fa-lock", 
//                 color: "emerald", 
//                 title: "Bank-Grade Privacy", 
//                 desc: "Your memories are for your eyes only. Encrypted, secure, and completely private by design." 
//               },
//               { 
//                 icon: "fa-stream", 
//                 color: "blue", 
//                 title: "Living Timeline", 
//                 desc: "Watch your life unfold chronologically. A beautiful, linear journey through your past." 
//               },
//               { 
//                 icon: "fa-calendar-day", 
//                 color: "rose", 
//                 title: "On This Day", 
//                 desc: "Wake up to nostalgia. Rediscover what happened on this exact date in previous years." 
//               },
//               { 
//                 icon: "fa-heart", 
//                 color: "pink", 
//                 title: "Curated Favorites", 
//                 desc: "Create a highlight reel of your life. Mark your absolute best moments for instant access." 
//               },
//               { 
//                 icon: "fa-user-astronaut", 
//                 color: "violet", 
//                 title: "Personal Profile", 
//                 desc: "Customize your vault. Add your bio, hobbies, and profile picture to make it truly yours." 
//               },
//               { 
//                 icon: "fa-search", 
//                 color: "amber", 
//                 title: "Smart Search", 
//                 desc: "Never lose a moment. Find that specific trip or birthday instantly with powerful search." 
//               }
//             ].map((feature, idx) => (
//               <div key={idx} className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-${feature.color}-500 group relative overflow-hidden`}>
//                 <div className={`w-14 h-14 bg-${feature.color}-50 rounded-xl flex items-center justify-center mb-6 text-${feature.color}-600 text-2xl group-hover:scale-110 transition-transform`}>
//                   <i className={`fas ${feature.icon}`}></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
                
//                 {/* Decorative circle on hover */}
//                 <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${feature.color}-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. Value Section */}
//       <section className="py-24 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="w-full lg:w-1/2 relative">
//                <div className="absolute inset-0 bg-brand-200 rounded-3xl transform rotate-6 scale-95 opacity-50"></div>
//                <img 
//                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" 
//                  alt="Looking at photos together" 
//                  className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
//                />
//             </div>
//             <div className="w-full lg:w-1/2">
//                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Reconnect with <br/>Your Past Self</h2>
               
//                <div className="space-y-8">
//                  <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xl font-bold">1</div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">Clear the Clutter</h3>
//                       <p className="text-gray-600">Phone galleries are messy. Memory Vault is curated. Keep only what matters most.</p>
//                     </div>
//                  </div>
                 
//                  <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xl font-bold">2</div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">Tell the Full Story</h3>
//                       <p className="text-gray-600">A photo is worth a thousand words, but your words make it a story. Add context to every image.</p>
//                     </div>
//                  </div>

//                  <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xl font-bold">3</div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">Safe for Generations</h3>
//                       <p className="text-gray-600">Built on secure infrastructure, ensuring your legacy is preserved for the future.</p>
//                     </div>
//                  </div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. How It Works - Visual */}
//       <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">Get Started in Minutes</h2>
          
//           <div className="relative">
//             {/* Connecting Line (Desktop) */}
//             <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-brand-700/50"></div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//               <div className="relative flex flex-col items-center">
//                 <div className="w-24 h-24 bg-brand-800 border-4 border-brand-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl z-10">
//                   <i className="fas fa-user-plus"></i>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">1. Sign Up Free</h3>
//                 <p className="text-brand-100">Create your private account securely with just your email.</p>
//               </div>

//               <div className="relative flex flex-col items-center">
//                 <div className="w-24 h-24 bg-brand-800 border-4 border-brand-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl z-10">
//                   <i className="fas fa-cloud-upload-alt"></i>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">2. Add Memories</h3>
//                 <p className="text-brand-100">Upload photos, add dates, and write your heartfelt stories.</p>
//               </div>

//               <div className="relative flex flex-col items-center">
//                 <div className="w-24 h-24 bg-brand-800 border-4 border-brand-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl z-10">
//                   <i className="fas fa-infinity"></i>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">3. Relive Forever</h3>
//                 <p className="text-brand-100">Access your timeline anytime, from anywhere, forever.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. Call to Action */}
//       <section className="py-28 bg-white text-center">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
//             Ready to secure your stories?
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-500 mb-12 font-light">
//             Join thousands of others who are preserving their legacy today.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//              <Link 
//               to="/signup" 
//               className="px-12 py-5 bg-brand-600 text-white rounded-full font-bold text-xl hover:bg-brand-700 hover:scale-105 transform transition-all shadow-xl"
//             >
//               Create My Free Vault
//             </Link>
//           </div>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-gray-50 py-12 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="flex items-center text-gray-900 font-bold text-xl">
//             <i className="fas fa-book-open text-brand-600 mr-2"></i> Memory Vault
//           </div>
//           <p className="text-gray-400 text-sm">
//             &copy; {new Date().getFullYear()} Memory Vault. Built for memories.
//           </p>
//           <div className="flex gap-6">
//              <span className="text-gray-400 hover:text-brand-600 cursor-pointer transition-colors"><i className="fab fa-twitter"></i></span>
//              <span className="text-gray-400 hover:text-brand-600 cursor-pointer transition-colors"><i className="fab fa-instagram"></i></span>
//              <span className="text-gray-400 hover:text-brand-600 cursor-pointer transition-colors"><i className="fas fa-envelope"></i></span>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default Landing;

import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks.js';

const Landing = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    return <Navigate to="/vault" replace />;
  }

  return (
    <div className="bg-stone-50 min-h-screen font-sans overflow-x-hidden selection:bg-brand-500 selection:text-white">
      
      {/* 1. HERO SECTION (Kept as requested) */}
      <section className="relative min-h-[95vh] flex items-center bg-[#0f0518] overflow-hidden">
        
        {/* Dynamic Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
                <span className="text-sm font-bold text-brand-100 tracking-wide uppercase">The Forever Cloud</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight font-serif">
                Moments fade. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-orange-400 animate-gradient-x">
                  Stories shouldn't.
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Your camera roll is a mess of screenshots and duplicates. 
                <strong className="text-white font-medium"> Memory Vault</strong> is the curated sanctuary for the moments that actually matter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link 
                  to="/signup" 
                  className="relative px-8 py-4 bg-white text-brand-900 rounded-full font-bold text-lg hover:bg-brand-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
                >
                  Create Your Vault
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link 
                  to="/login" 
                  className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Log In
                </Link>
              </div>
            </div>

            {/* Visual Hero Image */}
            <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-500/20 to-purple-500/20 blur-3xl rounded-full"></div>

               <div className="absolute w-64 h-80 bg-slate-800 rounded-2xl shadow-2xl transform -rotate-12 translate-x-[-60px] translate-y-[-20px] border border-white/10 overflow-hidden opacity-60 animate-float-delayed">
                   <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" alt="Vintage memory" />
               </div>

               <div className="absolute w-72 h-96 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-6 z-10 border-4 border-white animate-float">
                   <div className="h-[75%] w-full overflow-hidden rounded-t-lg bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Happy memory" />
                   </div>
                   <div className="p-4 bg-white rounded-b-xl flex flex-col justify-center h-[25%]">
                       <div className="flex items-center gap-2 mb-1">
                          <i className="fas fa-map-marker-alt text-brand-500 text-xs"></i>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kyoto, Japan</span>
                       </div>
                       <p className="font-serif text-gray-800 font-bold italic">"Cherry blossoms & new beginnings."</p>
                   </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE MOSAIC: Emotional Transition - Warm Pink/Rose Tone */}
      <section className="py-24 bg-[#fff0f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-600 font-serif italic text-xl">The Art of Remembering</span>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2">Turn the chaos into a collection.</h2>
            </div>

            {/* Masonry Layout */}
            <div className="columns-1 md:columns-3 gap-6 space-y-6">
                <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img src="https://images.unsplash.com/photo-1520072959219-c595dc3f3a4f?q=80&w=1000&auto=format&fit=crop" className="w-full object-cover" alt="Wedding" />
                    <div className="bg-white p-4">
                        <p className="font-serif text-lg italic text-gray-800">"The day we said yes."</p>
                        <p className="text-xs text-gray-400 uppercase mt-2 tracking-widest">June 12, 2018</p>
                    </div>
                </div>

                <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop" className="w-full object-cover" alt="Family" />
                    <div className="bg-white p-4">
                        <p className="font-serif text-lg italic text-gray-800">"Dad teaching me to read."</p>
                        <p className="text-xs text-gray-400 uppercase mt-2 tracking-widest">August, 1995</p>
                    </div>
                </div>

                <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop" className="w-full object-cover" alt="Travel" />
                    <div className="bg-white p-4">
                        <p className="font-serif text-lg italic text-gray-800">"Lost in the desert."</p>
                        <p className="text-xs text-gray-400 uppercase mt-2 tracking-widest">Mojave, 2021</p>
                    </div>
                </div>
                 <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" className="w-full object-cover" alt="Cat" />
                </div>
                 <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="bg-white p-8 flex items-center justify-center h-64 text-center border border-brand-100">
                        <div>
                            <i className="fas fa-quote-left text-brand-400 text-3xl mb-4"></i>
                            <p className="text-brand-900 font-serif text-xl">"We take photos as a return ticket to a moment otherwise gone."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. EDITORIAL FEATURE BLOCKS: Subtle Gradient */}
      <section className="py-24 bg-gradient-to-b from-[#fff0f5] to-[#f5f3ff] overflow-hidden">
        
        {/* Feature 1: The Timeline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-orange-100 rounded-full blur-[80px] opacity-60"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1000&auto=format&fit=crop" 
                        alt="Growth Timeline" 
                        className="relative z-10 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
                    />
                </div>
                <div className="md:w-1/2">
                    <div className="w-16 h-1 bg-brand-500 mb-6"></div>
                    <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">A Living Timeline</h3>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                        Social media feeds are chaotic. Your life isn't. Memory Vault organizes your stories chronologically, creating a seamless narrative from your first steps to your latest adventure.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-stone-700">
                            <i className="fas fa-check-circle text-brand-500 mr-3"></i> Auto-sorted by date
                        </li>
                        <li className="flex items-center text-stone-700">
                            <i className="fas fa-check-circle text-brand-500 mr-3"></i> Visual "Year" markers
                        </li>
                        <li className="flex items-center text-stone-700">
                            <i className="fas fa-check-circle text-brand-500 mr-3"></i> Distraction-free viewing
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Feature 2: On This Day (Reversed) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
                    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-sm mx-auto border border-stone-100">
                        <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-4">
                            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Notification</span>
                            <span className="text-stone-400 text-xs">Now</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-xl">
                                <i className="fas fa-gift"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-900">On This Day: 3 Years Ago</h4>
                                <p className="text-stone-600 text-sm mt-1">"Sarah's 5th Birthday Party at the park..."</p>
                                <button className="mt-3 text-brand-600 text-sm font-bold hover:underline">View Memory</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:text-right">
                    <div className="w-16 h-1 bg-brand-500 mb-6 ml-auto md:ml-auto md:mr-0"></div>
                    <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">Wake Up to Nostalgia</h3>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                        The best part of memories is rediscovering them. Our "On This Day" engine surfaces forgotten moments, bringing a daily smile to your face without you having to search for it.
                    </p>
                </div>
            </div>
        </div>

        {/* Feature 3: Privacy */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                     <div className="relative group cursor-default">
                        <img 
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                            alt="Private Journal" 
                            className="rounded-2xl shadow-xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                                <i className="fas fa-lock text-3xl text-white"></i>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="md:w-1/2">
                    <div className="w-16 h-1 bg-brand-500 mb-6"></div>
                    <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">For Your Eyes Only</h3>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                        This isn't a social network. There are no likes, no comments, and no ads. It's a private digital vault for you and your legacy.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. SIMPLE HOW IT WORKS - Clean Slate Blue/Grey */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-16">Preserving a memory is simple.</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0"></div>

                  <div className="relative z-10">
                      <div className="w-16 h-16 bg-white border-2 border-brand-200 rounded-full flex items-center justify-center text-xl font-bold text-brand-600 mx-auto mb-6 shadow-sm">1</div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">Upload</h3>
                      <p className="text-stone-600">Drag and drop your favorite photo.</p>
                  </div>
                  <div className="relative z-10">
                      <div className="w-16 h-16 bg-white border-2 border-brand-200 rounded-full flex items-center justify-center text-xl font-bold text-brand-600 mx-auto mb-6 shadow-sm">2</div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">Context</h3>
                      <p className="text-stone-600">Add the date, location, and the story behind it.</p>
                  </div>
                  <div className="relative z-10">
                      <div className="w-16 h-16 bg-white border-2 border-brand-200 rounded-full flex items-center justify-center text-xl font-bold text-brand-600 mx-auto mb-6 shadow-sm">3</div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">Keep</h3>
                      <p className="text-stone-600">It's safe, sorted, and yours forever.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. MINIMALIST CTA - Pure White for Contrast */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <i className="fas fa-infinity text-4xl text-brand-400 mb-6"></i>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-8">
            Begin your collection.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
              to="/signup" 
              className="px-10 py-4 bg-stone-900 text-white rounded-full text-lg font-medium hover:bg-stone-800 transition-colors shadow-lg"
            >
              Start for Free
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer - Light Grey */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center text-stone-900 font-bold text-xl font-serif">
            <i className="fas fa-book-open text-brand-600 mr-2"></i> Memory Vault
          </div>
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} Memory Vault.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-stone-400 hover:text-brand-600 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
             <a href="#" className="text-stone-400 hover:text-brand-600 transition-colors"><i className="fab fa-instagram text-xl"></i></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;