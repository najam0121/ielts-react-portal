import { Bot, Mic, FileText, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Band Score Prediction",
    description:
      "Get instant feedback on your performance with our advanced AI that predicts your band score with 95% accuracy.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mic,
    title: "Live Speaking Practice Sessions",
    description:
      "Practice with certified IELTS examiners in real-time sessions and improve your speaking confidence.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Unlimited Mock Tests",
    description:
      "Access hundreds of practice tests that simulate real IELTS exam conditions with detailed analytics.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Calendar,
    title: "Personal Study Planner",
    description:
      "Receive a customized study schedule tailored to your target band score and exam date.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const FeatureCards = () => {
  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Our Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience world-class IELTS preparation with cutting-edge technology
            and expert guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-2 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground font-medium mb-4">
            Ready to start your IELTS journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-accent hover:text-accent/80 font-semibold text-lg transition-colors"
          >
            Get Started Today
            <svg
              className="w-5 h-5 ml-2 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
