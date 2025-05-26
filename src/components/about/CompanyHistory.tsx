
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "TVM IT Solutions was established with a vision to provide innovative IT solutions to businesses of all sizes."
  },
  {
    year: "2019",
    title: "Expansion of Services",
    description: "Added digital marketing and influencer marketing to our service offerings to provide comprehensive digital solutions."
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Successfully delivered a complex mobile application for a leading retail chain, establishing our reputation for quality."
  },
  {
    year: "2021",
    title: "Team Growth",
    description: "Expanded our team of developers, designers, and marketing specialists to handle increasing client demands."
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Received recognition for our innovative approach to IT solutions and exceptional client service."
  },
  {
    year: "2023",
    title: "New Office",
    description: "Moved to a larger office space to accommodate our growing team and enhance collaboration."
  }
];

const CompanyHistory = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Journey"
          subtitle="A brief history of TVM IT Solutions and our path to becoming a trusted IT partner."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-tvm-blue/20 transform md:translate-x-px"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <AnimatedCard delay={index * 100}>
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-tvm-blue rounded-full transform -translate-x-1/2 z-10"></div>
                    
                    {/* Content box - alternating left and right */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} pl-8 md:pl-0`}>
                      <div className="glassmorphism rounded-xl p-6">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-tvm-blue/10 text-tvm-blue rounded-full">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                        <p className="text-tvm-gray">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
