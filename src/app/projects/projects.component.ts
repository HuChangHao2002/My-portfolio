import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'MFA E-commerce Website',
      description: 'Developed a secure e-commerce platform using PHP, Laravel, HTML, and CSS, with integrated multi-factor authentication for enhanced security, achieving a project grade of 4.0.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
      technologies: ['PHP', 'Laravel', 'HTML'],
      completionDate: new Date(2023, 4, 15) 
    },
    {
      id: 2,
      title: 'Inventory Management System',
      description: 'Built with C programming, allowing efficient tracking and management of inventory.',
      imageUrl: 'https://media.licdn.com/dms/image/D5612AQEHGZUx2evvxg/article-cover_image-shrink_600_2000/0/1688275415052?e=2147483647&v=beta&t=MiibYoaOd8k3EYKJGp_zBmSoyV_tklwOItiTYILUXKI',
      technologies: ['C'],
      completionDate: new Date(2023, 3, 20) 
    },
    {
      id: 3,
      title: 'Wireless and Mobile Security Project',
      description: 'Executed rogue access point attack using Linux OS to evaluate network vulnerabilities.',
      imageUrl: 'https://www.practicallynetworked.com/wp-content/uploads/2021/09/rouge-access-points-wifi.jpg',
      technologies: ['Linux'],
      completionDate: new Date(2023, 5, 10) 
    },
    {
      id: 4,
      title: 'Cloud Application',
      description: 'Deployed cloud application using AWS and ASP.NET Core',
      imageUrl: 'https://static-00.iconduck.com/assets.00/amazon-aws-icon-2048x1224-ug1v1ts2.png',
      technologies: ['ASP.NET Core'],
      completionDate: new Date(2023, 5, 10) 
    },
    {
      id: 5,
      title: 'Vaccination Management System',
      description: 'Developed a Python-based system to manage and track vaccination appointments and records, enhancing efficiency and reducing manual errors',
      imageUrl: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
      technologies: ['Python'],
      completionDate: new Date(2023, 5, 10) 
    },
    {
      id: 6,
      title: 'Library Management Database',
      description: 'Designed and implemented a robust database using Microsoft SQL Server to streamline library operations',
      imageUrl: 'https://cdn.prod.website-files.com/601064f495f4b4967f921aa9/632b60f8c1aa184a0e5766d9_202209-ms-sql-icon-3x.png',
      technologies: ['Microsoft SQL'],
      completionDate: new Date(2023, 5, 10) 
    },
    // Add more projects as needed
  ];

  filteredProjects: Project[] = [...this.projects]; 
  selectedTechnologies: string[] = []; 
  sortOrder: string = 'asc'; 

  // Method to filter projects
  filterProjects() {
    this.filteredProjects = this.projects.filter(project => {
      return this.selectedTechnologies.length === 0 || 
             project.technologies.some(tech => this.selectedTechnologies.includes(tech));
    });
  }

  // Method to sort projects
  sortProjects() {
    this.filteredProjects.sort((a, b) => {
      return this.sortOrder === 'asc'
        ? a.completionDate.getTime() - b.completionDate.getTime()
        : b.completionDate.getTime() - a.completionDate.getTime();
    });
  }

  // Method to handle filter change
  onFilterChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Cast event.target to HTMLSelectElement
    const selectedValue = selectElement.value;

    if (selectedValue) {
      this.selectedTechnologies = [selectedValue]; // Update selected technologies
    } else {
      this.selectedTechnologies = []; // Reset if "All" is selected
    }

    this.filterProjects();
    this.sortProjects();
  }

  // Method to handle sort change
  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Cast event.target to HTMLSelectElement
    this.sortOrder = selectElement.value; // Get the new sort order

    this.sortProjects();
  }
}
