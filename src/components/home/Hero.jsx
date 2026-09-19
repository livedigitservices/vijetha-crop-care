import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { animateHero } from "../../animations/heroAnimations";

export default function Hero() {
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const backgroundRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const titleLinesRef = {
      current: [title1Ref.current, title2Ref.current].filter(Boolean)
    };

    const tl = animateHero({
      badgeRef,
      titleLinesRef,
      descriptionRef,
      buttonsRef,
      scrollIndicatorRef,
      backgroundRef
    });

    // Ambient Golden & Leaf Particle Animation on Canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let animationFrameId;
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);

      const particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        color: Math.random() > 0.4 ? "rgba(108, 180, 44, " : "rgba(250, 166, 26, ",
        alpha: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: -Math.random() * 0.8 - 0.2,
        pulse: Math.random() * 0.05
      }));

      const render = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          p.alpha += Math.sin(Date.now() * 0.002) * p.pulse * 0.1;
          const currentAlpha = Math.max(0.1, Math.min(0.8, p.alpha));

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${currentAlpha})`;
          ctx.fill();
        });

        animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (tl) tl.kill();
      };
    }

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScrollDown = () => {
    const introSection = document.getElementById("brand-intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B1A12] via-[#11102B] to-[#0A091A]">
      {/* Background Visual Layer */}
      <div ref={backgroundRef} className="absolute inset-0 z-0 overflow-hidden">
        {/* High Resolution Static Photography Fallback (Renders Instantly) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2400&q=90')`,
            filter: "saturate(1.2) brightness(0.7)"
          }}
        />

        {/* Video Background (HTML5 MP4 Stream) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover filter saturate-[1.25] brightness-[0.85] scale-105 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-90"
          }`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-lush-green-crop-field-in-the-sunlight-42417-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-farmer-walking-in-a-green-crop-field-42416-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Canvas Floating Particles Layer */}
        <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

        Dynamic Dark Emerald & Indigo Gradient Overlay (Ensures 100% Contrast & Vibrancy)
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#11102B]/90 via-[#0B1A12]/50 to-[#11102B]/70 z-10 pointer-events-none"></div>  
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,110,56,0.15)_0%,rgba(17,16,43,0.85)_100%)] z-10 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6CB42C_1.2px,transparent_1.2px)] [background-size:28px_28px] z-10 pointer-events-none"></div> */}
      </div>

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-36 pb-24 flex flex-col items-center">
        {/* Luxury Monogram Tag */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#11102B]/90 border border-[#6CB42C]/60 shadow-2xl backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#FAA61A] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.32em] font-extrabold text-[#FFFFFF]">
            VIJETHA CROP CARE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#6CB42C]"></span>
          <span className="text-[10px] tracking-[0.2em] font-extrabold text-[#6CB42C]">
            CERTIFIED ORGANIC
          </span>
        </div>

        {/* Main Editorial Headline */}
        <div className="overflow-hidden mb-6">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FFFFFF] tracking-tight leading-[1.05] select-none drop-shadow-lg">
            <span ref={title1Ref} className="block text-[#FFFFFF] font-normal">
              Nature’s Care.
            </span>
            <span ref={title2Ref} className="block italic text-gold-gradient font-light mt-1">
              A Stronger Harvest.
            </span>
          </h1>
        </div>

        {/* Supporting Narrative */}
        <p
          ref={descriptionRef}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[#F1F5F9] font-light leading-relaxed mb-10 font-sans drop-shadow-md"
        >
          Premium organic crop-care solutions created to protect crops, enrich soil vitality, and support healthier, more sustainable farming across Indian agriculture.
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#58B023] text-[#FFFFFF] text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-[#6CB42C] transition-all duration-300 shadow-xl shadow-[#58B023]/30 group"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-white/10 border-2 border-white/80 text-white text-xs uppercase tracking-[0.24em] font-extrabold hover:bg-white hover:text-[#11102B] transition-all duration-300 backdrop-blur-md shadow-md"
          >
            <span>Discover Vijetha</span>
          </Link>
        </div>

        {/* Trust Pill Indicators */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-[#FFFFFF] font-extrabold">
          <span className="flex items-center gap-2 bg-[#11102B]/85 px-4 py-2 rounded-full border border-[#6CB42C]/40 backdrop-blur-md shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#6CB42C]" />
            100% Residue-Free
          </span>
          <span className="text-[#FAA61A] hidden sm:inline">•</span>
          <span className="bg-[#11102B]/85 px-4 py-2 rounded-full border border-[#6CB42C]/40 backdrop-blur-md shadow-lg">Bio-Engineered In India</span>
          <span className="text-[#FAA61A] hidden sm:inline">•</span>
          <span className="bg-[#11102B]/85 px-4 py-2 rounded-full border border-[#6CB42C]/40 backdrop-blur-md shadow-lg">Rhizosphere Vitality</span>
        </div>
      </div>

      {/* Video Interactive Controls (Play/Pause & Mute) */}
      <div className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-2 bg-[#11102B]/90 backdrop-blur-md p-1.5 rounded-full border border-[#6CB42C]/40 shadow-xl">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="w-8 h-8 rounded-full bg-[#1F1C4A] flex items-center justify-center text-[#FFFFFF] hover:text-[#6CB42C] hover:bg-[#11102B] transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="w-8 h-8 rounded-full bg-[#1F1C4A] flex items-center justify-center text-[#FFFFFF] hover:text-[#6CB42C] hover:bg-[#11102B] transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        ref={scrollIndicatorRef}
        onClick={handleScrollDown}
        aria-label="Scroll to introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-[#FFFFFF]/80 hover:text-[#6CB42C] transition-colors group cursor-pointer focus:outline-hidden"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] mb-2 font-extrabold text-[#6CB42C]">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-[#6CB42C] flex items-start justify-center p-1.5 bg-[#11102B]/70 backdrop-blur-xs shadow-md">
          <div className="w-1.5 h-2.5 bg-[#6CB42C] rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  );
}

