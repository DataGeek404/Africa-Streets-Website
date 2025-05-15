import React, { useEffect, useRef, useMemo } from 'react';
import akidwa from '../assets/Rectangle 29.png';
import wezesha from '../assets/Rectangle 27.png';
import safety from '../assets/Rectangle 28.png';
import zen from '../assets/Rectangle 40.png';

export function PartnersSection() {
  // ✅ Memoize the partners array to avoid re-creating it every render
  const partners = useMemo(() => [
    { name: 'Partner 1', logo: akidwa },
    { name: 'Partner 2', logo: wezesha },
    { name: 'Partner 3', logo: safety },
    { name: 'Partner 4', logo: zen },
  ], []);

  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;

    // Clear and duplicate logos
    scroller.innerHTML = '';
    // eslint-disable-next-line no-unused-vars
    const logos = partners.concat(partners).map((partner, i) => {
      const img = document.createElement('img');
      img.src = partner.logo;
      img.alt = partner.name;
      img.className = 'h-24 w-auto mx-12 object-contain'; // Increased height + spacing
      return img;
    });
    logos.forEach(logo => scroller.appendChild(logo));

    // Animation logic
    let animationFrame;
    let scrollPosition = 0;
    const speed = 1;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= scroller.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scroller.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [partners]);

  return (
    <div className="w-full bg-white py-16 pb-24">
      {/* Header inside container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-[#1D204B] text-3xl md:text-4xl font-bold text-center mb-16">
          Our Partners
        </h2>
      </div>

      {/* Full-width logo scroller */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollerRef}
          className="flex items-center w-max"
          style={{ willChange: 'transform' }}
        />
      </div>
    </div>
  );
}
