var model = { 
 bio: {
	"name": "Rob Haney",
	"role": "Front End Web Development",
	"contacts": {
		"email": "robert.a.haney@gmail.com",
		"github": "roberthaney",
		"location": "Middlebury"
	},
	"skills": ["Front-end web development", "Python", "Perl", "Bioinformatics"], 
	"photo": "images/Rob_Haney_photo.jpg"
 }, 
 projects: {
  "projects": [{
    "title": "Research Page",
    "description": "Genetics, Genomics and Transcriptomics",
    "link": "projects/research/index.html"
  },
  {
    "title": "Neighborhood Mountain Map",
    "description": "Get information on local ski resorts",
    "link": "projects/ski_map/index.html"
  },
  {
    "title": "Classic Arcade Clone",
    "description": "A retro diversion",
    "link": "projects/arcade_clone/index.html"
  },
  ]
 }, 
 work: {
  "jobs" : [{
        "employer": "University of Massachusetts Lowell",
        "title" : "Postdoctoral Researcher",
        "location" : "Lowell, MA",
        "dates" : "2013-present",
        "description" : "Next-generation sequencing analysis of spider venom and silk"
    },
    {
        "employer": "Northeastern University",
        "title" : "Postdoctoral Researcher/Adjunct Professor",
        "location" : "Nahant, MA",
        "dates" : "2012-2014",
        "description" : "Taught course in Marine Invertebrate Zoology"
    },
    {
        "employer": "Harvard University",
        "title" : "Postdoctoral Fellow",
        "location" : "Cambridge, MA",
        "dates" : "2010-2012",
        "description" : "Researched molecular mechanisms of aging in bdelloid rotifers",
    },
    {
        "employer": "University of Chicago",
        "title" : "Postdoctoral Scholar",
        "location" : "Chicago, IL",
        "dates" : "2007-2010",
        "description" : "Studied heat-shock regulatory evolution in Drosophila"
    }  
    ]
 },
 education: {
  "schools": [{
        "name" : "Brown University",
        "location" : "Providence, RI", 
        "degree" : "PhD",
        "majors" : ["Biology/Genetics"],
        "date" : "2007",
        "url": "http://www.brown.edu"
    },
    {
      "name" : "State University of New York at Buffalo",
        "location" : "Buffalo, NY", 
        "degree": "BS",
        "majors": ["Biological Sciences"],
        "date" : "2001",
        "url": "http://www.buffalo.edu"
    }
    ],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": 2015
    },
    {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "date": 2015
    },
    {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": 2015 
    },
    {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "date": 2015 
    },
    {
        "title": "An Introduction to Interactive Programming in Python(Part 1)",
        "school": "Coursera",
        "date": 2015 
    },
    {
        "title": "An Introduction to Interactive Programming in Python(Part 2)",
        "school": "Coursera",
        "date": 2015 
    }
    ]
 }
};

var view = {
 bioDisplay: function() {
  	var formatted = controller.formatBio();
    $("#header").prepend(formatted.formattedName + formatted.formattedRole);
  	$("#topContacts").append(formatted.formattedEmail);
  	$("footer").append(formatted.formattedEmail);
  	$("#topContacts").append(formatted.formattedGitHub);
  	$("footer").append(formatted.formattedGitHub);
  	$("#header").append(formatted.formattedPhoto);
    $("#header").append(HTMLskillsStart);
    for(var idx = 0; idx < formatted.skills.length; idx++) {
      $("#skills").append(formatted.skills[idx]);
    };
 },
 projectsDisplay: function () {
  var formatted = controller.formatProjects();
  for (var idx = 0; idx < formatted.length; idx++) {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = formatted[idx].formattedTitle.replace("%link%", model.projects.projects[idx].link);
    $('.project-entry:last').append(formattedTitle);
    $('.project-entry:last').append(formatted[idx].formattedDate);
    $('.project-entry:last').append(formatted[idx].formattedDescription);
  }
  $(".projects").click(function() {
    $("#collapseTwo").animate({'opacity': 1}, 1500);
  });
 },
 workDisplay: function () {
  var formatted = controller.formatWork();
  for (var entry = 0; entry < formatted.length; entry++) {
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(formatted[entry].formattedEmployer + formatted[entry].formattedTitle);
    $('.work-entry:last').append(formatted[entry].formattedLocation);
    $('.work-entry:last').append(formatted[entry].formattedDates);
    $('.work-entry:last').append(formatted[entry]. formattedDescription);
    };
 },
 educationDisplay: function () {
    var formatted = controller.formatEducation();
    for (var entry  = 0; entry < formatted.length; entry++) {
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formatted[entry].formattedSchoolName + formatted[entry].formattedDegree + formatted[entry].formattedSchoolLocation);
      $('.education-entry:last').append(formatted[entry].formattedDates);
      $('.education-entry:last').append(formatted[entry].formattedmajor);
    };
 }
};

var controller = {
  init: function() {
    view.bioDisplay();
    view.projectsDisplay();
    view.workDisplay();
    view.educationDisplay();
  }, 
  formatBio: function() {
    var formatted = {};
    formatted.formattedName = HTMLheaderName.replace("%data%", model.bio.name);
    formatted.formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
    formatted.formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
    formatted.formattedGitHub = HTMLgithub.replace("%data%", model.bio.contacts.github);
    formatted.skills = [];
    for(var idx = 0; idx < model.bio.skills.length; idx++) {
      formatted.skills.push(HTMLskills.replace("%data%", model.bio.skills[idx]));
    };
    return formatted;
  },
  formatProjects: function() {
    var formatted = [];
    for (var idx = 0; idx < model.projects.projects.length; idx++) {
      formatted.push({
        formattedTitle: HTMLprojectTitle.replace("%data%", model.projects.projects[idx].title),
        formattedDescription: HTMLprojectDescription.replace("%data%", model.projects.projects[idx].description)
      });
    }
    return formatted;
  },
  formatWork: function() {
    var formatted = [];
    for (var entry = 0; entry < model.work.jobs.length; entry++) {
      formatted.push({
        formattedEmployer: HTMLworkEmployer.replace("%data%", model.work.jobs[entry].employer),
        formattedTitle: HTMLworkTitle.replace("%data%", model.work.jobs[entry].title),
        formattedLocation: HTMLworkLocation.replace("%data%", model.work.jobs[entry].location),
        formattedDates: HTMLworkDates.replace("%data%", model.work.jobs[entry].dates),
        formattedDescription: HTMLworkDescription.replace("%data%", model.work.jobs[entry].description)
      });
    }
    return formatted;
  },
  formatEducation: function() {
    var formatted = [];
    for (var entry  = 0; entry < model.education.schools.length; entry++) {
      formatted.push({
        formattedSchoolName: HTMLschoolName.replace("%data%", model.education.schools[entry].name),
        formattedSchoolLocation: HTMLschoolLocation.replace("%data%", model.education.schools[entry].location),
        formattedDegree: HTMLschoolDegree.replace("%data%", model.education.schools[entry].degree),
        formattedDates: HTMLschoolDates.replace("%data%", model.education.schools[entry].date),
        formattedmajor: HTMLschoolMajor.replace("%data%", model.education.schools[entry].majors)
      });     
    }
    return formatted;
  }

};

controller.init();