// pages/competitions/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SidebarNav from '../../components/Sidebar';
import CompetitionDetails from '../../components/CompetitionDetails';
import SubmissionPanel from '../../components/SubmissionPanel';
import { getCompetitionById, getAllCompetitionIds } from '../../data/competitions';

export default function CompetitionDetailPage({ competition }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.isFallback) {
      return;
    }
    setIsLoading(false);
  }, [router.isFallback]);

  if (router.isFallback || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading competition details...</p>
        </div>
      </div>
    );
  }

  if (!competition) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Competition Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn&apos;t find the competition youre looking for. It may have been removed or the URL might be incorrect.
          </p>
          <Link 
            href="/competitions"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Competitions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{competition.title} | Competition Platform</title>
        <meta name="description" content={competition.description} />
        <meta property="og:title" content={competition.title} />
        <meta property="og:description" content={competition.description} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header/Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/competitions" className="hover:text-blue-600 transition-colors">
                Competitions
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">{competition.title}</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel - Sidebar */}
            <div className="lg:col-span-3 space-y-6 fixed lg:static w-full lg:w-auto">
              <SidebarNav sections={competition.sections} />
            </div>

            {/* Middle Panel - Competition Details */}
            <div className="lg:col-span-6 space-y-6">
              <CompetitionDetails competition={competition} />
            </div>

            {/* Right Panel - Submission Panel */}
            <div className="lg:col-span-3 space-y-6">
              <SubmissionPanel competitionId={competition.id} />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2024 Competition Platform. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-600">
                <Link href="/help" className="hover:text-blue-600 transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact Support
                </Link>
                <Link href="/terms" className="hover:text-blue-600 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllCompetitionIds();
  
  return {
    paths,
    fallback: false // Set to 'blocking' or true if you want to generate pages on-demand
  };
}

export async function getStaticProps({ params }) {
  // Convert the ID to integer since our data uses numeric IDs
  const competitionId = parseInt(params.id);
  const competition = getCompetitionById(competitionId);
  
  if (!competition) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      competition,
    },
    revalidate: 60, // Regenerate the page every 60 seconds if requested
  };
}