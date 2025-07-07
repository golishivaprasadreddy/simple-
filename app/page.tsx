'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Code, Brain, Palette, Smartphone, Users, Award, BookOpen, Star, Zap } from "lucide-react";
import Link from "next/link";
import { domains } from "@/data/projects";
import { AnimatedLogo } from "@/components/animated-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const steps = [
  {
    icon: BookOpen,
    title: "Register",
    description: "Fill out our Google Form to get started with your internship journey"
  },
  {
    icon: Code,
    title: "Choose Project",
    description: "Select from our curated list of real-world projects across various domains"
  },
  {
    icon: CheckCircle,
    title: "Complete & Submit",
    description: "Work independently and submit your completed project for review"
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Pay ₹200 and receive your official internship certificate"
  }
];

const domainIcons = {
  "Web Development": Code,
  "Machine Learning": Brain,
  "UI/UX": Palette,
  "App Development": Smartphone,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <AnimatedLogo />
              <span className="text-xl font-bold text-gray-900 dark:text-white">LaunchPad Interns</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <ThemeToggle />
              <Button asChild className="animate-pulse-slow">
                <Link href="/projects">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="animate-bounce-slow">
                <Star className="w-12 h-12 text-yellow-500 animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
              Internships{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Reimagined
              </span>{" "}
              for Students
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
              Choose projects. Work independently. Get certified. Build your portfolio with real-world projects across multiple domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" asChild className="px-8 group hover:scale-105 transition-transform">
                <Link href="/projects">
                  Explore Projects 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 hover:scale-105 transition-transform">
                <Link href="#">

                Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="w-32 h-32 bg-purple-500/20 dark:bg-purple-400/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white animate-scale-in">
              <div className="text-4xl font-bold mb-2 animate-pulse">500+</div>
              <div className="text-blue-100">Students Certified</div>
            </div>
            <div className="text-white animate-scale-in">
              <div className="text-4xl font-bold mb-2 animate-pulse">50+</div>
              <div className="text-blue-100">Projects Available</div>
            </div>
            <div className="text-white animate-scale-in">
              <div className="text-4xl font-bold mb-2 animate-pulse">4</div>
              <div className="text-blue-100">Domain Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with your internship journey in just four simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center border-2 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group animate-slide-up bg-white dark:bg-gray-700">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg dark:text-white">
                      Step {index + 1}: {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Domain
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore projects across various technology domains and find your passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => {
              const Icon = domainIcons[domain.name as keyof typeof domainIcons];
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl dark:text-white">{domain.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {domain.count} Projects Available
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Real-world projects to build your expertise
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-bounce-slow mb-6">
            <Zap className="w-12 h-12 text-yellow-300 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-up">
            Ready to Boost Your Resume?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-up">
            Join hundreds of students who have already enhanced their skills and earned certificates through our internship program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" variant="secondary" asChild className="px-8 hover:scale-105 transition-transform group">
              <Link href="/projects">
                Browse Projects 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white  hover:bg-white hover:text-blue-600 hover:scale-105 transition-all">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <AnimatedLogo />
                <span className="text-xl font-bold">LaunchPad Interns</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering students with real-world project experience and industry-recognized certifications.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>launchpadintern00@gmail.com</li>
                <li>India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LaunchPad Interns. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}