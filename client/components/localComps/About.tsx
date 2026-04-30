export default function AboutTeamSection() {
  const teamMembers = [
    { id: 1, name: "benyahya abdel ghafour", role: "leader." },
    { id: 2, name: "Dehina abdelhakim", role: "front-end dev" },
    { id: 3, name: "boulmehad abderrahmane", role: "back-end dev " },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div>
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
            YOUR SUBTITLE GOES HERE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-black mb-6">
            MEET OUR TEAM
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We are a team of passionate developers focused on building intelligent solutions to real-world problems. Our project leverages artificial intelligence to analyze data, automate decision-making, and deliver efficient, scalable results. We aim to bridge the gap between innovation and practical impact through smart, user-centered design.
          </p>
        </div>

        {/* Team Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Individual Team Member Cards */}
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              
              {/* Image Container */}
              <div className="w-80 h-92 bg-gray-200 mb-6 grayscale overflow-hidden group rounded-lg">
               
              </div>

              {/* Member Details */}
              <h3 className="text-lg font-bold uppercase tracking-wide text-black mb-1">
                {member.name}
              </h3>
              <p className="text-xs text-gray-400 text-center mb-4">
                {member.role}
              </p>

              {/* Social Icons - Reuse Later */}
              / 
              <div className="flex items-center space-x-2">
                {['f', 't', 'in', 'y'].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-xs text-black transition-colors duration-300 hover:bg-black hover:text-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
             
               
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
