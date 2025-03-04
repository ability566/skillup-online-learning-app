const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">About SkillUp Academy</h2>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 h-full">
            <img
              src="\images\analyst-team.webp"
              alt="Data Analytics"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg text-gray-700">
              For over <span className="font-semibold text-blue-600">5 years</span>, SkillUp Academy has been a leader in data analytics education, empowering thousands of students to launch data-driven careers. Our program focuses on in-demand skills like <span className="font-semibold text-blue-600">SQL, Python, R, Tableau, and Power BI</span>, ensuring you gain practical, real-world expertise.
            </p>
            <p className="text-lg text-gray-700">
              We offer <span className="font-semibold text-blue-600">flexible learning</span> options, including self-paced courses and live instructor-led sessions, designed to fit your schedule.
            </p>
            <p className="text-lg text-gray-700">
              With dedicated <span className="font-semibold text-blue-600">career support</span>, including resume review and job placement services, we help you connect with top employers and land your dream job.
            </p>
            <p className="text-lg text-gray-700">
              Join our global community of data professionals today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;