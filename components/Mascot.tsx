
import React, { useMemo } from 'react';
import { MascotState, Coordinates } from '../types';

interface MascotProps {
  state?: MascotState;
  variant?: 'blob' | 'rabbit' | 'cat'; 
  lookAt?: Coordinates | null;
  selfPosition?: Coordinates;
  bodyColor?: string;
}

const Mascot: React.FC<MascotProps> = ({ 
  state = 'default' as MascotState, 
  lookAt,
  selfPosition = { x: 50, y: 50 },
  bodyColor = '#FFFFFF'
}) => {
  
  // Calculate Eye Movement (Subtle tracking)
  const lookOffset = useMemo(() => {
    if (!lookAt) return { x: 0, y: 0 };

    const dx = lookAt.x - selfPosition.x;
    const dy = lookAt.y - selfPosition.y;

    const maxOffset = 2.5; // Reduced movement to keep it cute
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
    
    const moveX = (dx / distance) * Math.min(Math.abs(dx / 10), maxOffset);
    const moveY = (dy / distance) * Math.min(Math.abs(dy / 10), maxOffset);

    return { x: moveX, y: moveY };
  }, [lookAt, selfPosition]);

  const getAnimationClass = () => {
    switch (state) {
      case 'correct':
      case 'happy': return 'animate-mascot-correct';
      case 'incorrect': return 'animate-mascot-incorrect';
      case 'wowed':
      case 'star-struck': return 'animate-mascot-wowed';
      case 'sad': return 'animate-mascot-sad';
      case 'confused': return 'animate-mascot-wobble';
      case 'dancing': return 'animate-mascot-dance';
      case 'thinking': return 'animate-mascot-breathe';
      case 'sleeping': return 'animate-mascot-snore';
      case 'shocked': return 'animate-mascot-shocked';
      case 'excited': return 'animate-mascot-excited';
      case 'love': return 'animate-mascot-heartbeat';
      case 'scared': return 'animate-mascot-scared';
      case 'laughing': return 'animate-mascot-laugh';
      case 'impatient': return 'animate-mascot-impatient';
      case 'flipping': return 'animate-mascot-flip';
      case 'tickled': return 'animate-mascot-tickle';
      default: return 'animate-gentle-bounce';
    }
  };

  // Using a dark slate color for high-contrast outlines
  const outlineColor = "#1E293B"; 

  // --- KAWAII CAT COMPONENTS ---

  const CatHead = () => (
    <g>
      {/* Main Head Shape - Soft/Wide */}
      <ellipse cx="50" cy="50" rx="38" ry="32" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
      
      {/* Ears - Rounded Triangles */}
      <path d="M 18 35 Q 12 15 35 20" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 22 32 Q 18 20 30 24" fill="#FCA5A5" /> {/* Pink Inner Left */}

      <path d="M 82 35 Q 88 15 65 20" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 78 32 Q 82 20 70 24" fill="#FCA5A5" /> {/* Pink Inner Right */}
      
      {/* Forehead Stripes (Subtle Grey) */}
      <path d="M 45 20 Q 50 25 55 20" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <path d="M 47 16 Q 50 20 53 16" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    </g>
  );

  const CatFace = ({ lookX, lookY }: { lookX: number, lookY: number }) => {
    // State Checks
    const isClosedEyes = state === 'sleeping' || state === 'blinking' || state === 'impatient';
    const isWinking = state === 'wink' || state === 'cheeky';
    const isHappyEyes = state === 'laughing' || state === 'excited' || state === 'happy' || state === 'tickled' || state === 'dancing';
    const isStarry = state === 'star-struck' || state === 'wowed';
    const isShocked = state === 'shocked' || state === 'scared';
    const isSkeptical = state === 'skeptical' || state === 'side-eye';
    const isNerdy = state === 'nerdy';
    const isCool = state === 'cool';

    // Eye Renderer
    const Eye = ({ cx, isLeft }: { cx: number, isLeft: boolean }) => {
        if (isWinking && !isLeft) { // Right eye winking
             return <path d={`M ${cx-8} 58 Q ${cx} 62 ${cx+8} 58`} stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
        }

        if (isClosedEyes) {
            return <path d={`M ${cx-8} 58 Q ${cx} 62 ${cx+8} 58`} stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
        }

        if (isHappyEyes && !isNerdy) {
             // Inverted Arc for happy eyes ^ ^
             return <path d={`M ${cx-7} 58 Q ${cx} 50 ${cx+7} 58`} stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
        }

        if (isStarry) {
            return (
                <g transform={`translate(${cx}, 56)`}>
                    <path d="M 0 -7 L 2 -2 L 7 -2 L 3 2 L 5 7 L 0 4 L -5 7 L -3 2 L -7 -2 L -2 -2 Z" fill="#F59E0B" />
                </g>
            );
        }

        if (state === 'scared') {
             // X eyes
             return (
                 <g transform={`translate(${cx}, 56)`} stroke="#1E293B" strokeWidth="2">
                     <path d="M -4 -4 L 4 4" />
                     <path d="M 4 -4 L -4 4" />
                 </g>
             );
        }

        // Default Open Eye (with pupil)
        return (
            <g transform={`translate(${lookX}, ${lookY})`}>
                <ellipse cx={cx} cy="56" rx="8" ry="9" fill="#7F1D1D" />
                <ellipse cx={cx} cy="58" rx="5" ry="6" fill="#DC2626" />
                <circle cx={cx} cy="58" r={isShocked ? 3 : 6} fill="#0F0F0F" />
                <circle cx={cx + 3} cy="53" r="3" fill="#FFFFFF" />
            </g>
        );
    };

    // Mouth Renderer
    const Mouth = () => {
        if (state === 'laughing' || state === 'excited' || state === 'tickled') {
            // Open D mouth
            return (
                <path d="M 42 66 Q 50 78 58 66 Z" fill="#7F1D1D" stroke="#1E293B" strokeWidth="1.5" />
            );
        }
        
        if (state === 'shocked' || state === 'wowed') {
            // O mouth
            return <ellipse cx="50" cy="68" rx="4" ry="5" fill="#1E293B" />;
        }

        if (state === 'sad' || state === 'incorrect' || state === 'scared') {
            // Frown
            return <path d="M 44 72 Q 50 66 56 72" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />;
        }

        if (state === 'confused' || state === 'skeptical' || state === 'thinking') {
            // Straight / wiggly line
            return <path d="M 45 68 L 55 68" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />;
        }

        if (state === 'silly' || state === 'cheeky') {
            // Tongue out
            return (
                <g>
                    <path d="M 44 66 Q 50 70 56 66" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M 48 68 Q 48 76 52 76 Q 56 76 56 68" fill="#FCA5A5" stroke="#1E293B" strokeWidth="1" />
                </g>
            );
        }

        // Default Smile
        return (
            <g>
                <path d="M 46 66 Q 50 70 54 66" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <ellipse cx="50" cy="64" rx="1.5" ry="1" fill="#1E293B" />
            </g>
        );
    };

    // Accessories
    const Accessories = () => {
        if (isNerdy) {
            return (
                <g stroke="#1E293B" strokeWidth="2" fill="none">
                    <circle cx="36" cy="56" r="10" />
                    <circle cx="64" cy="56" r="10" />
                    <path d="M 46 56 L 54 56" />
                </g>
            );
        }
        if (isCool) {
            return (
                <g fill="#1E293B">
                    <path d="M 24 52 Q 36 52 48 56 Q 36 64 24 58 Z" />
                    <path d="M 76 52 Q 64 52 52 56 Q 64 64 76 58 Z" />
                    <path d="M 48 56 L 52 56" stroke="#1E293B" strokeWidth="2" />
                </g>
            );
        }
        return null;
    };

    return (
        <g>
            {/* Cheeks */}
            <g fill="#FCA5A5" opacity="0.6">
                <ellipse cx="28" cy="68" rx="5" ry="3" />
                <ellipse cx="72" cy="68" rx="5" ry="3" />
            </g>
            
            <Eye cx={36} isLeft={true} />
            <Eye cx={64} isLeft={false} />
            <Mouth />
            <Accessories />
        </g>
    );
  };

  const CatBody = () => (
    <g transform="translate(0, 5)">
       {/* Small Body */}
       <path d="M 30 75 Q 20 95 35 95 L 65 95 Q 80 95 70 75" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
       
       {/* Tail */}
       <path d="M 70 85 Q 85 75 85 65 Q 85 55 75 60" fill="none" stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />
       <path d="M 70 85 Q 85 75 85 65 Q 85 55 75 60" fill="none" stroke={outlineColor} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );

  const HeartAndPaws = () => (
      <g transform="translate(0, 5)">
          {/* Small Cute Heart */}
          <path transform="translate(50, 82) scale(0.6)" 
                d="M 0 5 C -20 -15, -30 5, 0 35 C 30 5, 20 -15, 0 5" 
                fill="#EF4444" stroke="#B91C1C" strokeWidth="2" strokeLinejoin="round" />
          
          {/* Paws holding the heart closely */}
          <ellipse cx="40" cy="82" rx="5" ry="4" fill="#FFFFFF" stroke={outlineColor} strokeWidth="1" />
          <ellipse cx="60" cy="82" rx="5" ry="4" fill="#FFFFFF" stroke={outlineColor} strokeWidth="1" />
          
          {/* Paw lines */}
          <line x1="40" y1="80" x2="40" y2="82" stroke={outlineColor} strokeWidth="1" />
          <line x1="60" y1="80" x2="60" y2="82" stroke={outlineColor} strokeWidth="1" />
      </g>
  );

  return (
    <div className={`transition-transform duration-300 ${getAnimationClass()}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feFlood floodColor="#000000" floodOpacity="0.1"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <g filter="url(#soft-glow)">
            <CatBody />
            <CatHead />
            <CatFace lookX={lookOffset.x} lookY={lookOffset.y} />
            <HeartAndPaws />
        </g>
      </svg>
    </div>
  );
};

export default Mascot;