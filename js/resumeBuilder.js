var model = { 
 bio: {
	"name": "Rob Haney",
	"role": "Front End Web Development",
	"contacts": {
		"email": "robert.a.haney@gmail.com",
		"github": "roberthaney",
		"location": "Middlebury"
	},
	"languages": ["HTML", "CSS", "JavaScript", "Python", "Perl"],
  "libraries" :["jQuery", "Bootstrap", "Knockout", "Backbone", "Jasmine"], 
	"photo": "images/Rob_Haney_photo.jpg"
 }, 
 projects: {
  "projects": [{
    "title": "Research Page",
    "description": "Genetics, Genomics and Transcriptomics",
    "link": "http://roberthaney.github.io/research"
  },
  {
    "title": "Neighborhood Mountain Map",
    "description": "Get information on local ski resorts",
    "link": "http://roberthaney.github.io/ski_map"
  },
  {
    "title": "Classic Arcade Clone",
    "description": "A retro diversion",
    "link": "http://roberthaney.github.io/arcade_clone"
  },
  ]
 }, 
 work: {
  "jobs" : [{
        "employer": "University of Massachusetts Lowell",
        "title" : "Postdoctoral Researcher",
        "location" : "Lowell, MA",
        "dates" : "2013-present",
        "description" : "Next-generation sequencing analysis of spider venom and silk",
        "url": "http://www.uml.edu"
    },
    {
        "employer": "Northeastern University",
        "title" : "Postdoctoral Researcher/Adjunct Professor",
        "location" : "Nahant, MA",
        "dates" : "2012-2014",
        "description" : "Taught course in Marine Invertebrate Zoology",
        "url": "http://www.northeastern.edu/"
    },
    {
        "employer": "Harvard University",
        "title" : "Postdoctoral Fellow",
        "location" : "Cambridge, MA",
        "dates" : "2010-2012",
        "description" : "Researched molecular mechanisms of aging in bdelloid rotifers",
        "url": "http://www.harvard.edu/"
    },
    {
        "employer": "University of Chicago",
        "title" : "Postdoctoral Scholar",
        "location" : "Chicago, IL",
        "dates" : "2007-2010",
        "description" : "Studied heat-shock regulatory evolution in Drosophila",
        "url": "http://www.uchicago.edu/"
    }  
    ]
 },
 education: {
  "schools": [{
        "name" : "Udacity",
        "location" : "Mountain View, CA", 
        "degree" : "Front-End Nanodegree",
        "majors" : ["HTML/JavaScript/CSS"],
        "date" : "2016",
        "url": "http://www.udacity.com"
    },
    {
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
    ]
 }
};

// Display data

var view = {
 bioDisplay: function() {
  	var formatted = controller.formatBio();
    $("#header").prepend(formatted.formattedName + formatted.formattedRole);
  	$("#contact1").append(formatted.formattedEmail);
  	$("#footer1").append(formatted.formattedEmail);
  	$("#contact2").append(formatted.formattedGitHub);
  	$("#footer2").append(formatted.formattedGitHub);
  	$("#biopic").append(formatted.formattedPhoto);
    for(var idx = 0; idx < formatted.languages.length; idx++) {
      $("#languages").append(formatted.languages[idx]);
    };
    for(var idx = 0; idx < formatted.libraries.length; idx++) {
      $("#libraries").append(formatted.libraries[idx]);
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
    var formattedEmployer = formatted[entry].formattedEmployer.replace("%url%", model.work.jobs[entry].url);
    $('.work-entry:last').append(formattedEmployer + formatted[entry].formattedTitle);
    $('.work-entry:last').append(formatted[entry].formattedLocation);
    $('.work-entry:last').append(formatted[entry].formattedDates);
    $('.work-entry:last').append(formatted[entry]. formattedDescription);
    };
 },
 educationDisplay: function () {
    var formatted = controller.formatEducation();
    for (var entry  = 0; entry < formatted.length; entry++) {
      $('#education').append(HTMLschoolStart);
      var formattedSchoolName = formatted[entry].formattedSchoolName.replace("%url%", model.education.schools[entry].url);
      $('.education-entry:last').append(formattedSchoolName + formatted[entry].formattedDegree + formatted[entry].formattedSchoolLocation);
      $('.education-entry:last').append(formatted[entry].formattedDates);
      $('.education-entry:last').append(formatted[entry].formattedmajor);
    };
 }
};

// Predefined variable templates for formatting data

var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLemail = '<span class="pink-text">email</span><span class="white-text">%data%</span>';
var HTMLgithub = '<span class="pink-text">github</span><span class="white-text">%data%</span>';

var HTMLskills = '<li><span class="white-text" id="skills-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="%url%">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="%link%" id="project-title">%data%</a>';
var HTMLprojectDescription = '<p><em>%data%</em></p>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%">%data%';
var HTMLschoolDegree = ': %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// Format data for display

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
    formatted.languages = [];
    formatted.libraries = [];
    for(var idx = 0; idx < model.bio.languages.length; idx++) {
      formatted.languages.push(HTMLskills.replace("%data%", model.bio.languages[idx]));
    };
    for(var idx = 0; idx < model.bio.libraries.length; idx++) {
      formatted.libraries.push(HTMLskills.replace("%data%", model.bio.libraries[idx]));
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