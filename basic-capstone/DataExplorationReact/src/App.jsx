import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PaperGrid from './components/PaperGrid';
import { usePapers } from './hooks/usePapers';
import './App.css';

function App() {
  const {
    papers,
    currentPage,
    setCurrentPage,
    filterPapers,
    exportData
  } = usePapers();

  useEffect(() => {
    console.log('App State:', {
      papersLength: papers.length,
      currentPage,
      hasSetCurrentPage: !!setCurrentPage
    });
  }, [papers, currentPage, setCurrentPage]);

  return (
    <div className="container">
      <Sidebar
        onFilter={filterPapers}
        onExport={exportData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPapers={papers.length}
      />
      <PaperGrid papers={papers} currentPage={currentPage} />
    </div>
  );
}

export default App;