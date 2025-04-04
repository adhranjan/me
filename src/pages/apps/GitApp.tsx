import React, { useState } from "react";
import { GitBranch, GitCommit, Book, Briefcase, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { WORK_HISTORY, EDUCATION_HISTORY } from "../../lib/constants";
import { Badge } from "../../components/ui/badge";




interface TimelineItemProps {
  item: typeof WORK_HISTORY[0] | typeof EDUCATION_HISTORY[0];
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  const getDateColor = () => {
    const date = new Date(item.commitDate);
    const year = date.getFullYear();
    
    if (year >= 2021) return "bg-green-100 text-green-800";
    if (year >= 2019) return "bg-blue-100 text-blue-800";
    if (year >= 2016) return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="flex mb-4 relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute top-6 left-3.5 w-0.5 h-full bg-gray-300"></div>
      )}
      
      {/* Commit dot */}
      <div className="flex items-center justify-center h-7 w-7 rounded-full bg-gray-800 text-white z-10 mt-1 shrink-0">
        <GitCommit size={16} />
      </div>
      
      {/* Content */}
      <div className="ml-4 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
          <div className="font-semibold text-lg">
            {item.type === 'job' ? (
              <span>{(item as typeof WORK_HISTORY[0]).role}</span>
            ) : (
              <span>{(item as typeof EDUCATION_HISTORY[0]).degree}</span>
            )}
          </div>
          <Badge variant="outline" className={`${getDateColor()} font-mono text-xs mt-1 sm:mt-0`}>
            {item.period}
          </Badge>
        </div>
        
        <div className="text-sm text-gray-600 mb-2 flex items-center">
          {item.type === 'job' ? (
            <>
              <Briefcase size={14} className="mr-1" />
              <span>{(item as typeof WORK_HISTORY[0]).company}</span>
            </>
          ) : (
            <>
              <Book size={14} className="mr-1" />
              <span>{(item as typeof EDUCATION_HISTORY[0]).institution}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center text-xs mb-2">
          <span className="bg-gray-200 text-gray-700 py-0.5 px-2 rounded-full flex items-center">
            <GitBranch size={12} className="mr-1" />
            {item.branch}
          </span>
        </div>
        
        {item.type === 'job' && (item as typeof WORK_HISTORY[0]).achievements.length > 0 && (
          <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
            <Accordion type="single" collapsible>
              <AccordionItem value="achievements" className="border-none">
                <AccordionTrigger className="py-2 text-sm font-medium">
                  View achievements ({(item as typeof WORK_HISTORY[0]).achievements.length})
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {(item as typeof WORK_HISTORY[0]).achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

interface TimelineSectionProps {
  title: string;
  icon: React.ReactNode;
  items: (typeof WORK_HISTORY[0] | typeof EDUCATION_HISTORY[0])[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ title, icon, items }) => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className="mb-8">
      <div 
        className="flex items-center mb-4 cursor-pointer" 
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="bg-gray-800 p-2 rounded-md text-white mr-3">
          {icon}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="ml-auto">
          {collapsed ? (
            <ChevronRight className="text-gray-600" />
          ) : (
            <ChevronDown className="text-gray-600" />
          )}
        </div>
      </div>
      
      {!collapsed && (
        <div className="pl-3">
          {items.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              isLast={index === items.length - 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const GitApp: React.FC = () => {
  return (
      <div className="p-4 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center mb-6">
              <GitBranch size={24} className="text-gray-800 mr-3" />
              <h1 className="text-2xl font-bold">Git Timeline</h1>
            </div>
            
            <p className="text-gray-600 mb-6">
              A visual representation of my professional journey, presented as a git commit history.
              Each position is represented as a commit in my career repository.
            </p>
            
            <div className="flex items-center justify-between mb-6 py-2 px-4 bg-gray-100 rounded-md text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>Sorted by date (newest first)</span>
              </div>
              <div className="flex items-center">
                <span>Total: {WORK_HISTORY.length + EDUCATION_HISTORY.length} commits</span>
              </div>
            </div>
            
            <TimelineSection 
              title="Work Experience" 
              icon={<Briefcase size={20} />} 
              items={WORK_HISTORY} 
            />
            
            <TimelineSection 
              title="Education" 
              icon={<Book size={20} />} 
              items={EDUCATION_HISTORY} 
            />
          </div>
        </div>
      </div>
  );
};

export default GitApp;