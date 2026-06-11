import React, { useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const facilityImages = [
  { src: '/Screen_Shot_2026-04-26_at_1.23.56_PM.png', caption: 'Our Building Exterior' },
  { src: '/Screen_Shot_2026-04-26_at_1.20.49_PM.png', caption: 'Front Reception Area' },
  { src: '/Screen_Shot_2026-04-26_at_1.20.59_PM.png', caption: 'Treatment Room' },
  { src: '/Screen_Shot_2026-04-26_at_1.21.09_PM.png', caption: 'Operatory Suite' },
  { src: '/Screen_Shot_2026-04-26_at_1.21.39_PM.png', caption: 'Advanced 3D Imaging' },
];

const SlickArrow = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-card border border-white/30 flex items-center justify-center text-text-main hover:bg-white hover:shadow-elevated transition-all duration-300 ${
      direction === 'prev' ? 'left-3 md:left-5' : 'right-3 md:right-5'
    }`}
    aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}
  >
    {direction === 'prev' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
  </button>
);

interface FacilityTourModalProps {
  open: boolean;
  onClose: () => void;
}

const FacilityTourModal: React.FC<FacilityTourModalProps> = ({ open, onClose }) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    fade: true,
    prevArrow: <SlickArrow direction="prev" />,
    nextArrow: <SlickArrow direction="next" />,
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Facility Tour"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-teal-900/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 sm:-top-12 w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 z-30"
          aria-label="Close tour"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-overline uppercase tracking-widest text-accent-aqua mb-2">Virtual Tour</p>
          <h2 className="font-display text-2xl md:text-display-sm text-white">Our Facility</h2>
        </div>

        {/* Carousel */}
        <div className="bg-white rounded-3xl shadow-elevated overflow-hidden">
          <div className="facility-carousel">
            <Slider {...settings}>
              {facilityImages.map((img) => (
                <div key={img.src}>
                  <div className="relative">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                      <p className="text-white font-semibold text-lg">{img.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityTourModal;
