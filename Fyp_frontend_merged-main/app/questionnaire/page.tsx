// app/questionnaire/page.tsx (with layout)
'use client'
import React from 'react';
import QuestionnaireHeader from '../components/questionnaire/QuestionnaireHeader';
import QuestionList from '../components/questionnaire/QuestionList';
import ActionButtons from '../components/questionnaire/ActionButtons';
import { questionnaireData } from '../models/questionnaire/data';
import Sidebar from "../components/Sidebar/Sidebar"  
import Navbar from "../components/Navbar3";

export default function questionnaire (){
  return (
    <div className="min-h-screenbg-[#F5F6FF]">
      <Navbar />
      <div className="pt-15 flex">
        <Sidebar />
        <div className="flex-1 lg:ml-64 w-full">
          {/* Remove max-width on mobile, keep it only on larger screens */}
          <div className="w-full lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
            {/* Make the white container full width on mobile, rounded on larger screens */}
              <QuestionnaireHeader questionnaire={questionnaireData} />
              <QuestionList questionnaire={questionnaireData} />
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
   
  );
};