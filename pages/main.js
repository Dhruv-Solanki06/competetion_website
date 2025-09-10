import Header from '../components/Header';
import NoticeBoard from '../components/NoticeBoard';
import Timeline from '../components/Timeline';
import CompetitionList from '../components/CompetitionList';
import Footer from '../components/Footer';
import { competitions } from '../data/competitions';
import NotificationBanner from '../components/NotificationBanner';

export default function MainPage() {
  // Sample announcements data
  const announcements = [
    {
      id: 1,
      type: 'important',
      title: 'Registration Deadline Extended',
      content: 'The registration deadline for all competitions has been extended by one week.',
      date: 'October 15, 2023',
    },
    {
      id: 2,
      type: 'normal',
      title: 'New AI Challenge Added',
      content: 'We have added a new AI challenge to the competition lineup.',
      date: 'October 10, 2023',
    },
    {
      id: 3,
      type: 'normal',
      title: 'Workshop Announcement',
      content: 'A workshop on advanced algorithms will be held on October 20.',
      date: 'October 5, 2023',
    },
  ];

  // Sample timeline events
  const timelineEvents = [
    {
      id: 1,
      title: 'Registration Opens',
      description: 'Registration for all competitions begins',
      date: 'September 15, 2023',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Submission Phase',
      description: 'Submit your entries for the competitions',
      date: 'October 15 - November 15, 2023',
      status: 'current',
    },
    {
      id: 3,
      title: 'Judging Period',
      description: 'Entries will be evaluated by our panel of judges',
      date: 'November 16 - December 1, 2023',
      status: 'upcoming',
    },
    {
      id: 4,
      title: 'Winners Announcement',
      description: 'Winners will be announced and prizes distributed',
      date: 'December 10, 2023',
      status: 'upcoming',
    },
  ];

  return (
    <>
      {/* Enhanced Styles for Premium Visual Experience */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        /* Enhanced Ancient Background with Texture */
        .ancient-background {
          background: 
            /* Texture Layer */
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(218, 165, 32, 0.2) 1px, transparent 1px),
            /* Main Gradient */
            linear-gradient(135deg, 
              #8B4513 0%,     /* Saddle Brown */
              #A0522D 15%,    /* Sienna */
              #CD853F 35%,    /* Peru */
              #D2691E 50%,    /* Chocolate */
              #B8860B 70%,    /* Dark Goldenrod */
              #8B4513 100%    /* Saddle Brown */
            );
          background-size: 30px 30px, 40px 40px, 100% 100%;
          position: relative;
          overflow: hidden;
        }
        
        /* Multi-layered Atmospheric Effects */
        .ancient-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            /* Mystic Rays */
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(218, 165, 32, 0.1) 45deg, 
              transparent 90deg, 
              rgba(139, 69, 19, 0.15) 135deg, 
              transparent 180deg,
              rgba(205, 133, 63, 0.1) 225deg,
              transparent 270deg,
              rgba(218, 165, 32, 0.1) 315deg,
              transparent 360deg
            ),
            /* Ambient Lighting */
            radial-gradient(ellipse at 20% 30%, rgba(218, 165, 32, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 69, 19, 0.25) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 10%, rgba(205, 133, 63, 0.15) 0%, transparent 50%);
          z-index: 1;
          animation: mysticRotate 180s linear infinite;
        }
        
        @keyframes mysticRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .ancient-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            /* Sacred Patterns */
            linear-gradient(45deg, transparent 30%, rgba(139, 69, 19, 0.08) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(205, 133, 63, 0.08) 50%, transparent 70%),
            linear-gradient(90deg, transparent 48%, rgba(218, 165, 32, 0.05) 50%, transparent 52%),
            linear-gradient(0deg, transparent 48%, rgba(218, 165, 32, 0.05) 50%, transparent 52%);
          z-index: 1;
        }
        
        /* Enhanced Floating Sacred Elements */
        .floating-mandala {
          position: absolute;
          border-radius: 50%;
          background: 
            radial-gradient(circle, transparent 40%, rgba(218, 165, 32, 0.1) 41%, rgba(218, 165, 32, 0.1) 45%, transparent 46%),
            radial-gradient(circle, transparent 65%, rgba(139, 69, 19, 0.15) 66%, rgba(139, 69, 19, 0.15) 68%, transparent 69%);
          border: 2px solid rgba(218, 165, 32, 0.2);
          animation: rotate 120s linear infinite;
          filter: drop-shadow(0 0 20px rgba(218, 165, 32, 0.3));
        }
        
        .mandala-1 {
          top: 8%;
          left: 3%;
          width: 250px;
          height: 250px;
          animation-direction: normal;
        }
        
        .mandala-2 {
          top: 55%;
          right: 5%;
          width: 180px;
          height: 180px;
          animation-direction: reverse;
          animation-duration: 200s;
        }
        
        .mandala-3 {
          bottom: 15%;
          left: 12%;
          width: 120px;
          height: 120px;
          animation-duration: 80s;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Enhanced Floating Particles with Variety */
        .sacred-particle {
          position: absolute;
          border-radius: 50%;
          animation: float-particle 8s ease-in-out infinite;
        }
        
        .sacred-particle.type-1 {
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(218, 165, 32, 0.8), rgba(218, 165, 32, 0.3));
          box-shadow: 0 0 10px rgba(218, 165, 32, 0.5);
        }
        
        .sacred-particle.type-2 {
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(205, 133, 63, 0.7), rgba(205, 133, 63, 0.2));
          box-shadow: 0 0 8px rgba(205, 133, 63, 0.4);
        }
        
        .sacred-particle.type-3 {
          width: 5px;
          height: 5px;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.6), rgba(139, 69, 19, 0.1));
          box-shadow: 0 0 12px rgba(139, 69, 19, 0.3);
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
            opacity: 0.6; 
          }
          33% { 
            transform: translateY(-20px) scale(1.3) rotate(120deg); 
            opacity: 1; 
          }
          66% { 
            transform: translateY(-10px) scale(0.9) rotate(240deg); 
            opacity: 0.8; 
          }
        }
        
        .particle-1 { top: 12%; left: 28%; animation-delay: 0s; }
        .particle-2 { top: 48%; left: 78%; animation-delay: 2.5s; }
        .particle-3 { top: 78%; left: 18%; animation-delay: 5s; }
        .particle-4 { top: 32%; left: 88%; animation-delay: 7.5s; }
        .particle-5 { top: 68%; left: 42%; animation-delay: 1.5s; }
        .particle-6 { top: 22%; left: 65%; animation-delay: 4s; }
        .particle-7 { top: 88%; left: 75%; animation-delay: 6.5s; }
        .particle-8 { top: 58%; left: 8%; animation-delay: 8.5s; }
        .particle-9 { top: 5%; left: 50%; animation-delay: 3s; }
        .particle-10 { top: 95%; left: 35%; animation-delay: 9s; }
        
        /* Enhanced Grid Container with Depth */
        .dashboard-grid {
          position: relative;
          z-index: 10;
          backdrop-filter: blur(2px);
        }
        
        /* Premium Component Containers */
        .component-container {
          background: 
            linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.92)),
            radial-gradient(circle at top right, rgba(218, 165, 32, 0.05), transparent 50%);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(218, 165, 32, 0.25);
          box-shadow: 
            0 12px 40px rgba(139, 69, 19, 0.2),
            0 4px 16px rgba(218, 165, 32, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 rgba(218, 165, 32, 0.1);
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .component-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1), transparent);
          transition: left 0.8s ease;
        }
        
        .component-container:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 
            0 20px 60px rgba(139, 69, 19, 0.25),
            0 8px 24px rgba(218, 165, 32, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(218, 165, 32, 0.15);
          border-color: rgba(218, 165, 32, 0.4);
        }
        
        .component-container:hover::before {
          left: 100%;
        }
        
        /* Enhanced Sacred Geometry Patterns */
        .sacred-pattern {
          position: absolute;
          opacity: 0.12;
          z-index: 2;
          animation: patternPulse 15s ease-in-out infinite;
        }
        
        @keyframes patternPulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.18; transform: scale(1.05); }
        }
        
        .pattern-1 {
          top: 18%;
          right: 8%;
          width: 100px;
          height: 100px;
          background: 
            radial-gradient(circle, rgba(218, 165, 32, 0.4) 2px, transparent 2px),
            radial-gradient(circle, rgba(139, 69, 19, 0.3) 1px, transparent 1px);
          background-size: 20px 20px, 10px 10px;
          background-position: 0 0, 5px 5px;
        }
        
        .pattern-2 {
          bottom: 25%;
          left: 5%;
          width: 80px;
          height: 80px;
          background: 
            linear-gradient(45deg, rgba(139, 69, 19, 0.3) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(139, 69, 19, 0.3) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(205, 133, 63, 0.2) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(205, 133, 63, 0.2) 75%);
          background-size: 12px 12px;
          background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
        }
        
        .pattern-3 {
          top: 50%;
          right: 30%;
          width: 60px;
          height: 60px;
          background: 
            conic-gradient(from 0deg, rgba(218, 165, 32, 0.3), transparent 30%, rgba(139, 69, 19, 0.2), transparent 70%, rgba(218, 165, 32, 0.3));
          border-radius: 50%;
          animation: patternRotate 25s linear infinite;
        }
        
        @keyframes patternRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Ambient Light Effects */
        .ambient-light {
          position: absolute;
          pointer-events: none;
          z-index: 3;
        }
        
        .light-1 {
          top: 20%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(218, 165, 32, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: breathe 12s ease-in-out infinite;
        }
        
        .light-2 {
          bottom: 30%;
          right: 15%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(205, 133, 63, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: breathe 8s ease-in-out infinite reverse;
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>

      <div className="ancient-background min-h-screen relative">
        {/* Enhanced Floating Sacred Elements */}
        <div className="floating-mandala mandala-1"></div>
        <div className="floating-mandala mandala-2"></div>
        <div className="floating-mandala mandala-3"></div>
        
        {/* Enhanced Sacred Particles */}
        <div className="sacred-particle type-1 particle-1"></div>
        <div className="sacred-particle type-2 particle-2"></div>
        <div className="sacred-particle type-3 particle-3"></div>
        <div className="sacred-particle type-1 particle-4"></div>
        <div className="sacred-particle type-2 particle-5"></div>
        <div className="sacred-particle type-3 particle-6"></div>
        <div className="sacred-particle type-1 particle-7"></div>
        <div className="sacred-particle type-2 particle-8"></div>
        <div className="sacred-particle type-3 particle-9"></div>
        <div className="sacred-particle type-1 particle-10"></div>
        
        {/* Enhanced Sacred Geometry Patterns */}
        <div className="sacred-pattern pattern-1"></div>
        <div className="sacred-pattern pattern-2"></div>
        <div className="sacred-pattern pattern-3"></div>
        
        {/* Ambient Light Effects */}
        <div className="ambient-light light-1"></div>
        <div className="ambient-light light-2"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <NotificationBanner />
          
          <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="dashboard-grid grid grid-cols-1 lg:grid-cols-12 gap-8 ">
              {/* Left Sidebar - Announcements */}
              <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                <div className="component-container">
                  <NoticeBoard announcements={announcements} />
                </div>
              </div>

              {/* Center Section - Competition List */}
              <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
                <div className="component-container">
                  <CompetitionList competitions={competitions} />
                </div>
              </div>

              {/* Right Sidebar - Timeline */}
              <div className="lg:col-span-3 space-y-8 order-3 lg:order-3">
                <div className="component-container">
                  <Timeline events={timelineEvents} />
                </div>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
}