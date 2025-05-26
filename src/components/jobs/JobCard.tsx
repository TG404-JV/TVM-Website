
import { Job } from "@/types/job";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, GraduationCap, ArrowRight } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const getExperienceBadgeColor = (level: string) => {
    switch(level) {
      case "Beginner": return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Experienced": return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById("application-form");
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-gray-500 text-sm mt-1 flex items-center">
              <Briefcase size={14} className="mr-1" /> {job.category}
            </p>
          </div>
          <Badge className={`${getExperienceBadgeColor(job.experienceLevel)} flex items-center`}>
            <GraduationCap size={14} className="mr-1" />
            {job.experienceLevel}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
        <div className="space-y-1 mb-4">
          <p className="text-gray-500 text-sm flex items-center">
            <MapPin size={14} className="mr-1" /> {job.location}
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            <Calendar size={14} className="mr-1" /> Posted on {formatDate(job.postedDate)}
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">Key Requirements:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {job.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-tvm-blue mt-1.5 mr-2"></span>
                <span className="line-clamp-1">{req}</span>
              </li>
            ))}
            {job.requirements.length > 3 && (
              <li className="text-tvm-blue text-xs">+ {job.requirements.length - 3} more requirements</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button 
          className="w-full" 
          variant="outline" 
          onClick={scrollToApplicationForm}
        >
          Apply Now <ArrowRight className="ml-1" size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
