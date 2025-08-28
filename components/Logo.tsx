'use client'

interface LogoProps {
  className?: string
  variant?: 'full' | 'icon' | 'text'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Logo = ({ 
  className = '', 
  variant = 'full', 
  size = 'md' 
}: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl', 
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  if (variant === 'icon') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Book base - refined shape */}
          <rect
            x="16"
            y="28"
            width="48"
            height="36"
            rx="4"
            fill="url(#bookGradient)"
            stroke="url(#bookStroke)"
            strokeWidth="1.5"
          />
          
          {/* Book spine with depth */}
          <rect
            x="16"
            y="28"
            width="6"
            height="36"
            rx="1"
            fill="url(#spineGradient)"
          />
          
          {/* Book pages - cleaner look */}
          <rect
            x="24"
            y="33"
            width="36"
            height="26"
            rx="2"
            fill="#ffffff"
            stroke="#e5e7eb"
            strokeWidth="0.5"
          />
          
          {/* Left leaf - more organic shape */}
          <path
            d="M24 20 C20 16, 14 12, 8 18 C12 24, 20 28, 26 22 C25 21, 24.5 20.5, 24 20 Z"
            fill="url(#leafGradient1)"
            className="animate-float"
            style={{ animationDelay: '0s' }}
          />
          
          {/* Right leaf - balanced counterpart */}
          <path
            d="M56 20 C60 16, 66 12, 72 18 C68 24, 60 28, 54 22 C55 21, 55.5 20.5, 56 20 Z"
            fill="url(#leafGradient2)"
            className="animate-float"
            style={{ animationDelay: '0.8s' }}
          />
          
          {/* Central stem - more prominent */}
          <path
            d="M40 28 L40 12 M35 16 L40 12 L45 16"
            stroke="url(#stemGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Subtle page lines */}
          <g opacity="0.25">
            <line x1="28" y1="38" x2="56" y2="38" stroke="#6b7280" strokeWidth="1"/>
            <line x1="28" y1="43" x2="52" y2="43" stroke="#6b7280" strokeWidth="1"/>
            <line x1="28" y1="48" x2="56" y2="48" stroke="#6b7280" strokeWidth="1"/>
            <line x1="28" y1="53" x2="50" y2="53" stroke="#6b7280" strokeWidth="1"/>
          </g>
          
          {/* Growth accent - small leaf on book */}
          <ellipse
            cx="52"
            cy="36"
            rx="3"
            ry="2"
            fill="url(#accentGradient)"
            transform="rotate(25 52 36)"
            className="animate-bounce-subtle"
          />
          
          {/* Enhanced gradients */}
          <defs>
            <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2f9e76"/>
              <stop offset="50%" stopColor="#2d9e75"/>
              <stop offset="100%" stopColor="#1f7f5e"/>
            </linearGradient>
            
            <linearGradient id="bookStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a654d"/>
              <stop offset="100%" stopColor="#144336"/>
            </linearGradient>
            
            <linearGradient id="spineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a654d"/>
              <stop offset="100%" stopColor="#0f3d2f"/>
            </linearGradient>
            
            <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ebc95"/>
              <stop offset="50%" stopColor="#52b691"/>
              <stop offset="100%" stopColor="#2d9e75"/>
            </linearGradient>
            
            <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9dd6bf"/>
              <stop offset="50%" stopColor="#8bd1b5"/>
              <stop offset="100%" stopColor="#52b691"/>
            </linearGradient>
            
            <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ebc95"/>
              <stop offset="100%" stopColor="#2d9e75"/>
            </linearGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8bd1b5"/>
              <stop offset="100%" stopColor="#52b691"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <span className={`font-bold gradient-text ${textSizeClasses[size]} ${className}`}>
        Life Coach Library
      </span>
    )
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={sizeClasses[size]}>
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Book base - refined shape */}
          <rect
            x="16"
            y="28"
            width="48"
            height="36"
            rx="4"
            fill="url(#bookGradient)"
            stroke="url(#bookStroke)"
            strokeWidth="1.5"
          />
          
          {/* Book spine with depth */}
          <rect
            x="16"
            y="28"
            width="6"
            height="36"
            rx="1"
            fill="url(#spineGradient)"
          />
          
          {/* Book pages - cleaner look */}
          <rect
            x="24"
            y="33"
            width="36"
            height="26"
            rx="2"
            fill="#ffffff"
            stroke="#e5e7eb"
            strokeWidth="0.5"
          />
          
          {/* Left leaf - more organic shape */}
          <path
            d="M24 20 C20 16, 14 12, 8 18 C12 24, 20 28, 26 22 C25 21, 24.5 20.5, 24 20 Z"
            fill="url(#leafGradient1)"
            className="animate-float"
            style={{ animationDelay: '0s' }}
          />
          
          {/* Right leaf - balanced counterpart */}
          <path
            d="M56 20 C60 16, 66 12, 72 18 C68 24, 60 28, 54 22 C55 21, 55.5 20.5, 56 20 Z"
            fill="url(#leafGradient2)"
            className="animate-float"
            style={{ animationDelay: '0.8s' }}
          />
          
          {/* Central stem - more prominent */}
          <path
            d="M40 28 L40 12 M35 16 L40 12 L45 16"
            stroke="url(#stemGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Subtle page lines */}
          <g opacity="0.25">
            <line x1="28" y1="38" x2="56" y2="38" stroke="#6b7280" strokeWidth="1"/>
            <line x1="28" y1="43" x2="52" y2="43" stroke="#6b7280" strokeWidth="1"/>
            <line x1="28" y1="48" x2="56" y2="48" stroke="#6b7280" strokeWidth="1"/>
            <line x1="28" y1="53" x2="50" y2="53" stroke="#6b7280" strokeWidth="1"/>
          </g>
          
          {/* Growth accent - small leaf on book */}
          <ellipse
            cx="52"
            cy="36"
            rx="3"
            ry="2"
            fill="url(#accentGradient)"
            transform="rotate(25 52 36)"
            className="animate-bounce-subtle"
          />
          
          {/* Enhanced gradients */}
          <defs>
            <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2f9e76"/>
              <stop offset="50%" stopColor="#2d9e75"/>
              <stop offset="100%" stopColor="#1f7f5e"/>
            </linearGradient>
            
            <linearGradient id="bookStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a654d"/>
              <stop offset="100%" stopColor="#144336"/>
            </linearGradient>
            
            <linearGradient id="spineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a654d"/>
              <stop offset="100%" stopColor="#0f3d2f"/>
            </linearGradient>
            
            <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ebc95"/>
              <stop offset="50%" stopColor="#52b691"/>
              <stop offset="100%" stopColor="#2d9e75"/>
            </linearGradient>
            
            <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9dd6bf"/>
              <stop offset="50%" stopColor="#8bd1b5"/>
              <stop offset="100%" stopColor="#52b691"/>
            </linearGradient>
            
            <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ebc95"/>
              <stop offset="100%" stopColor="#2d9e75"/>
            </linearGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8bd1b5"/>
              <stop offset="100%" stopColor="#52b691"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <span className={`font-bold gradient-text ${textSizeClasses[size]}`}>
        Life Coach Library
      </span>
    </div>
  )
}

export default Logo