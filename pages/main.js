import Header from '../components/Header';
import NoticeBoard from '../components/NoticeBoard';
import Timeline from '../components/Timeline';
import CompetitionList from '../components/CompetitionList';
import Footer from '../components/Footer';
import { competitions } from '../data/competitions';

export default function MainPage() {
  // Sample announcements data
  const announcements = [
    {
      id: 1,
      type: 'important',
      title: 'Registration Deadline Extended',
      content: 'The registration deadline for all competitions has been extended by one week.',
      date: 'October 15, 2023'
    },
    {
      id: 2,
      type: 'normal',
      title: 'New AI Challenge Added',
      content: 'We have added a new AI challenge to the competition lineup.',
      date: 'October 10, 2023'
    },
    {
      id: 3,
      type: 'normal',
      title: 'Workshop Announcement',
      content: 'A workshop on advanced algorithms will be held on October 20.',
      date: 'October 5, 2023'
    }
  ];

  // Sample timeline events
  const timelineEvents = [
    {
      id: 1,
      title: 'Registration Opens',
      description: 'Registration for all competitions begins',
      date: 'September 15, 2023',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Submission Phase',
      description: 'Submit your entries for the competitions',
      date: 'October 15 - November 15, 2023',
      status: 'current'
    },
    {
      id: 3,
      title: 'Judging Period',
      description: 'Entries will be evaluated by our panel of judges',
      date: 'November 16 - December 1, 2023',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Winners Announcement',
      description: 'Winners will be announced and prizes distributed',
      date: 'December 10, 2023',
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <NoticeBoard announcements={announcements} />
          </div>
          
          <div className="lg:col-span-6 space-y-8">
            <CompetitionList competitions={competitions} />
          </div>
          
          <div className="lg:col-span-3 space-y-8">
            <Timeline events={timelineEvents} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}