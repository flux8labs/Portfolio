
import React from 'react';
import { User, Clock, Calendar, Code } from 'lucide-react';

interface ProjectDetailsProps {
  project: any;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-6">
        <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-3">Project Details</h3>
        
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">Client</div>
            <div className="text-white font-medium">{project.client}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">Timeline</div>
            <div className="text-white font-medium">{project.timeline}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">Launch Date</div>
            <div className="text-white font-medium">March 2024</div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-3">Technologies</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
