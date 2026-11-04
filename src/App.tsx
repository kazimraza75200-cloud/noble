import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClassesNineTen } from './components/ClassesNineTen';
import { ClassesElevenTwelve } from './components/ClassesElevenTwelve';
import { AdcSection } from './components/AdcSection';
import { ComputerClasses } from './components/ComputerClasses';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProgramsOverview } from './components/ProgramsOverview';
import { TimetableSection } from './components/TimetableSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { FloatingActions } from './components/FloatingActions';
import { ArrowLeft, BookOpen, Monitor, Phone } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string>('');

  // Synchronize hash with page view
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageView;
      const validPages: PageView[] = [
        'home',
        'classes-ix-x',
        'classes-xi-xii',
        'adc',
        'computer-classes',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnrollModal = (courseName?: string) => {
    setSelectedCourseForModal(courseName || 'Classes IX – X (Matric)');
    setEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-200 selection:text-slate-900">
      {/* 1. Header / Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnrollModal={handleOpenEnrollModal}
      />

      <main className="flex-1">
        {currentPage === 'home' ? (
          /* HOMEPAGE IN EXACT SPECIFIED SECTION ORDER */
          <>
            {/* 2. Hero Section */}
            <Hero
              onNavigate={handleNavigate}
              onOpenEnrollModal={handleOpenEnrollModal}
            />

            {/* 3. Academic Coaching (Classes IX-X, XI-XII, ADC) */}
            <ClassesNineTen onOpenEnrollModal={handleOpenEnrollModal} />
            <ClassesElevenTwelve onOpenEnrollModal={handleOpenEnrollModal} />
            <AdcSection onOpenEnrollModal={handleOpenEnrollModal} />

            {/* 4. Computer Courses (MS Office, WordPress, Shopify, Meta Ads) */}
            <ComputerClasses onOpenEnrollModal={handleOpenEnrollModal} />

            {/* 5. Why Choose Noble Computers & Coaching Centre */}
            <WhyChooseUs />

            {/* 6. Courses / Programs & 7. Call-to-Action */}
            <ProgramsOverview
              onNavigate={handleNavigate}
              onOpenEnrollModal={handleOpenEnrollModal}
            />

            {/* Batch Schedule Timetable */}
            <TimetableSection onOpenEnrollModal={handleOpenEnrollModal} />

            {/* 8. Location & Contact */}
            <ContactSection initialCourse="Classes IX – X (Matric)" />

            {/* Student & Parent FAQs */}
            <FaqSection />
          </>
        ) : (
          /* DEDICATED INDIVIDUAL PAGE VIEWS WITH QUICK BREADCRUMB */
          <div className="bg-slate-50">
            {/* Breadcrumb Navigation Strip */}
            <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button
                  onClick={() => handleNavigate('home')}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>&larr; Back to Full Homepage</span>
                </button>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    Soldier Bazar Campus: 2:00 PM – 8:00 PM
                  </span>
                  <a
                    href="tel:03032998881"
                    className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1 tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>0303-2998881</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Page Content Switch */}
            {currentPage === 'classes-ix-x' && (
              <>
                <ClassesNineTen onOpenEnrollModal={handleOpenEnrollModal} isStandalonePage />
                <TimetableSection onOpenEnrollModal={handleOpenEnrollModal} />
                <ContactSection initialCourse="Classes IX – X (Matric BSEK)" />
              </>
            )}

            {currentPage === 'classes-xi-xii' && (
              <>
                <ClassesElevenTwelve onOpenEnrollModal={handleOpenEnrollModal} isStandalonePage />
                <TimetableSection onOpenEnrollModal={handleOpenEnrollModal} />
                <ContactSection initialCourse="Classes XI – XII (Intermediate)" />
              </>
            )}

            {currentPage === 'adc' && (
              <>
                <AdcSection onOpenEnrollModal={handleOpenEnrollModal} isStandalonePage />
                <TimetableSection onOpenEnrollModal={handleOpenEnrollModal} />
                <ContactSection initialCourse="ADC (Associate Degree in Commerce / B.Com)" />
              </>
            )}

            {currentPage === 'computer-classes' && (
              <>
                <ComputerClasses onOpenEnrollModal={handleOpenEnrollModal} isStandalonePage />
                <WhyChooseUs />
                <ContactSection initialCourse="Computer Classes (MS Office / Web / Marketing)" />
              </>
            )}

            {currentPage === 'contact' && (
              <>
                <ContactSection initialCourse="General Admission Inquiry" />
                <TimetableSection onOpenEnrollModal={handleOpenEnrollModal} />
                <FaqSection />
              </>
            )}
          </div>
        )}
      </main>

      {/* 9. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Controls */}
      <FloatingActions />

      {/* Interactive Admission Enrollment Modal */}
      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourse={selectedCourseForModal}
      />
    </div>
  );
}
