'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Code, Search, Filter, Clock, BarChart3, ArrowRight, Lightbulb, Smartphone } from "lucide-react";
import Link from "next/link";
import { projects, domains } from "@/data/projects";
import { AnimatedLogo } from "@/components/animated-logo";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === "all" || project.domain === selectedDomain;
    const matchesDifficulty = selectedDifficulty === "all" || project.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDomain && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Projects</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our curated collection of real-world projects designed to enhance your skills and build your portfolio
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-pulse">{projects.length}</div>
                <div className="text-gray-600 dark:text-gray-300">Total Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 animate-pulse">{domains.length}</div>
                <div className="text-gray-600 dark:text-gray-300">Domain Areas</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 animate-pulse">1-8</div>
                <div className="text-gray-600 dark:text-gray-300">Weeks Duration</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-8 animate-slide-up bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Filter className="w-5 h-5" />
                Filter Projects
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Use the filters below to find projects that match your interests and skill level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search projects..."
                    className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectItem value="all">All Domains</SelectItem>
                    {domains.map(domain => (
                      <SelectItem key={domain.name} value={domain.name}>
                        {domain.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group animate-scale-in bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="mb-2 dark:border-gray-600 dark:text-gray-300">
                      {project.domain}
                    </Badge>
                    <Badge className={getDifficultyColor(project.difficulty)}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors dark:text-white">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3 dark:text-gray-300">
                    {project.shortDescription}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tools.slice(0, 3).map((tool, index) => (
                      <Badge key={index} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 3 && (
                      <Badge variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                        +{project.tools.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      ID: {project.id}
                    </span>
                    <Button asChild size="sm" className="group-hover:bg-blue-600 hover:scale-105 transition-all">
                      <Link href={`/projects/${project.id}`}>
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Try adjusting your filters or search terms</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDomain("all");
                  setSelectedDifficulty("all");
                }}
                className="hover:scale-105 transition-transform"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-slide-up">
            Choose a project that matches your interests and skill level, then register to begin your internship journey.
          </p>
          <Button size="lg" variant="secondary" asChild className="px-8 hover:scale-105 transition-transform group animate-scale-in">
            <Link href="#projects">
              Browse More Projects 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
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