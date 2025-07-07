import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  ArrowLeft, 
  ExternalLink, 
  Clock, 
  BarChart3, 
  FileText, 
  Users, 
  Target, 
  CheckCircle, 
  AlertCircle,
  Lightbulb,
  Award,
  Download,
  Palette,
  Smartphone
} from "lucide-react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { AnimatedLogo } from "@/components/animated-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const domainIcons = {
  "Web Development": Code,
  "Machine Learning": BarChart3,
  "UI/UX": Lightbulb,
  "App Development": Smartphone,
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Navigation */}
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-3">
                <AnimatedLogo />
                <span className="text-xl font-bold text-gray-900 dark:text-white">LaunchPad Interns</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="hover:scale-105 transition-transform">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Projects
                </Link>
              </Button>
              <Button variant="outline" asChild className="hover:scale-105 transition-transform">
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const DomainIcon = domainIcons[project.domain as keyof typeof domainIcons] || Code;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-700";
      default: return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <AnimatedLogo />
              <span className="text-xl font-bold text-gray-900 dark:text-white">LaunchPad Interns</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{project.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <div className="mb-6 animate-slide-up">
              <Button variant="outline" asChild className="mb-4 hover:scale-105 transition-transform">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            {/* Project Header */}
            <div className="mb-8 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse-slow">
                  <DomainIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-sm dark:border-gray-600 dark:text-gray-300">
                      {project.domain}
                    </Badge>
                    <Badge className={`${getDifficultyColor(project.difficulty)} text-sm`}>
                      {project.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Project Description */}
            <Card className="mb-8 animate-slide-up bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <FileText className="w-5 h-5" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="mb-8 animate-slide-up bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Code className="w-5 h-5" />
                  Tools & Technologies
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Technologies you'll work with in this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1 hover:scale-105 transition-transform dark:bg-gray-700 dark:text-gray-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card className="mb-8 animate-slide-up bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Lightbulb className="w-5 h-5" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Hands-on experience with industry-standard tools and technologies</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Project management and independent work skills</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Real-world problem-solving and implementation techniques</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Portfolio-worthy project to showcase your skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Project Info */}
              <Card className="animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Project ID</span>
                    <Badge variant="outline" className="font-mono text-xs dark:border-gray-600 dark:text-gray-300">
                      {project.id}
                    </Badge>
                  </div>
                  <Separator className="dark:bg-gray-600" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Domain</span>
                    <span className="text-sm text-gray-900 dark:text-white">{project.domain}</span>
                  </div>
                  <Separator className="dark:bg-gray-600" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Difficulty</span>
                    <Badge className={`${getDifficultyColor(project.difficulty)} text-xs`}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <Separator className="dark:bg-gray-600" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Duration</span>
                    <span className="text-sm text-gray-900 dark:text-white">{project.duration}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card className="animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">Get Started</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Register for this project and start your internship journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg" className="w-full hover:scale-105 transition-transform group">
                    <Link href={project.registrationLink} target="_blank" rel="noopener noreferrer">
                      <Users className="mr-2 w-4 h-4" />
                      Register Now
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full hover:scale-105 transition-transform group">
                    <Link href={project.submissionLink} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 w-4 h-4" />
                      Submit Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Certification Info */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 dark:text-white">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Complete this project and get your official internship certificate for just ₹200.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
                    <CheckCircle className="w-4 h-4" />
                    <span>Industry-recognized certificate</span>
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card className="animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Have questions about this project? We're here to help!
                  </p>
                  <Button variant="outline" size="sm" className="w-full hover:scale-105 transition-transform">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.domain === project.domain && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <Card key={relatedProject.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                        {relatedProject.domain}
                      </Badge>
                      <Badge className={`${getDifficultyColor(relatedProject.difficulty)} text-xs`}>
                        {relatedProject.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{relatedProject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {relatedProject.shortDescription}
                    </p>
                    <Button asChild size="sm" className="w-full hover:scale-105 transition-transform">
                      <Link href={`/projects/${relatedProject.id}`}>
                        View Project
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <AnimatedLogo />
                <span className="text-xl font-bold">LaunchPad Interns</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students with real-world project experience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">launchpadintern00@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 LaunchPad Interns. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}