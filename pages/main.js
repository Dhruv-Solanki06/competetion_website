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
      {/* Enhanced Styles for Ancient Orange Background */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        .ancient-background {
          background: linear-gradient(135deg, 
            #8B4513 0%,     /* Saddle Brown */
            #A0522D 15%,    /* Sienna */
            #CD853F 35%,    /* Peru */
            #D2691E 50%,    /* Chocolate */
            #B8860B 70%,    /* Dark Goldenrod */
            #8B4513 100%    /* Saddle Brown */
          );
          position: relative;
          overflow: hidden;
        }
        
        .ancient-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(218, 165, 32, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 69, 19, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(160, 82, 45, 0.1) 0%, transparent 70%);
          z-index: 1;
        }
        
        .ancient-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 30%, rgba(139, 69, 19, 0.05) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(205, 133, 63, 0.05) 50%, transparent 70%);
          z-index: 1;
        }
        
        /* Floating Sacred Elements */
        .floating-mandala {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(218, 165, 32, 0.15);
          animation: rotate 120s linear infinite;
        }
        
        .mandala-1 {
          top: 10%;
          left: 5%;
          width: 200px;
          height: 200px;
          animation-direction: normal;
        }
        
        .mandala-2 {
          top: 60%;
          right: 8%;
          width: 150px;
          height: 150px;
          animation-direction: reverse;
          animation-duration: 180s;
        }
        
        .mandala-3 {
          bottom: 20%;
          left: 15%;
          width: 100px;
          height: 100px;
          animation-duration: 90s;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Floating Particles */
        .sacred-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(218, 165, 32, 0.4);
          border-radius: 50%;
          animation: float-particle 8s ease-in-out infinite;
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-15px) scale(1.2); opacity: 0.8; }
        }
        
        .particle-1 { top: 15%; left: 25%; animation-delay: 0s; }
        .particle-2 { top: 45%; left: 75%; animation-delay: 2s; }
        .particle-3 { top: 75%; left: 20%; animation-delay: 4s; }
        .particle-4 { top: 35%; left: 85%; animation-delay: 6s; }
        .particle-5 { top: 65%; left: 45%; animation-delay: 1s; }
        .particle-6 { top: 25%; left: 60%; animation-delay: 3s; }
        .particle-7 { top: 85%; left: 70%; animation-delay: 5s; }
        .particle-8 { top: 55%; left: 10%; animation-delay: 7s; }
        
        /* Enhanced Grid Container */
        .dashboard-grid {
          position: relative;
          z-index: 10;
          backdrop-filter: blur(1px);
        }
        
        /* Component Enhancement for Dark Background */
        .component-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(218, 165, 32, 0.2);
          box-shadow: 
            0 8px 32px rgba(139, 69, 19, 0.15),
            0 2px 8px rgba(218, 165, 32, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .component-container:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 12px 40px rgba(139, 69, 19, 0.2),
            0 4px 12px rgba(218, 165, 32, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          border-color: rgba(218, 165, 32, 0.3);
        }
        
        /* Sacred Geometry Patterns */
        .sacred-pattern {
          position: absolute;
          opacity: 0.08;
          z-index: 2;
        }
        
        .pattern-1 {
          top: 20%;
          right: 10%;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(218, 165, 32, 0.3) 2px, transparent 2px);
          background-size: 15px 15px;
        }
        
        .pattern-2 {
          bottom: 30%;
          left: 8%;
          width: 60px;
          height: 60px;
          background: 
            linear-gradient(45deg, rgba(139, 69, 19, 0.2) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(139, 69, 19, 0.2) 25%, transparent 25%);
          background-size: 8px 8px;
        }
      `}</style>

      <div className="ancient-background min-h-screen relative">
        {/* Floating Sacred Elements */}
        <div className="floating-mandala mandala-1"></div>
        <div className="floating-mandala mandala-2"></div>
        <div className="floating-mandala mandala-3"></div>
        
        {/* Sacred Particles */}
        <div className="sacred-particle particle-1"></div>
        <div className="sacred-particle particle-2"></div>
        <div className="sacred-particle particle-3"></div>
        <div className="sacred-particle particle-4"></div>
        <div className="sacred-particle particle-5"></div>
        <div className="sacred-particle particle-6"></div>
        <div className="sacred-particle particle-7"></div>
        <div className="sacred-particle particle-8"></div>
        
        {/* Sacred Geometry Patterns */}
        <div className="sacred-pattern pattern-1"></div>
        <div className="sacred-pattern pattern-2"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <NotificationBanner />
          
          <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="dashboard-grid grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
              {/* Left Sidebar - Announcements */}
              <div className="lg:col-span-3 space-y-8">
                <div className="component-container">
                  <NoticeBoard announcements={announcements} />
                </div>
              </div>

              {/* Center Section - Competition List */}
              <div className="lg:col-span-6 space-y-8">
                <div className="component-container">
                  <CompetitionList competitions={competitions} />
                </div>
              </div>

              {/* Right Sidebar - Timeline */}
              <div className="lg:col-span-3 space-y-8">
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