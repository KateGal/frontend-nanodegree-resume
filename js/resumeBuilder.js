
var bio = {
	"name" : "Katherine Gallegos",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "0996762444",
		"email" : "ktmgallegos@gmail.com",
		"github" : "KateGal",
		"twitter" : "@KaterinGallegos",
		"location" : "Riobamba, Chimborazo"
	},
	"welcomeMessage" : "Nice to meet you!",	
	"skills" : ["Data Base Administration", " Programming", "Java Junior Developer", "Teaching", " JS"],
	"pictureURL" : "./images/kate.jpg",
	"display" : function (){
		//Display General information
		var formattedName = HTMLheaderName.replace ("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace ("%data%", bio.pictureURL);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		
		//Display Contacts
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedLocation);

		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedBioPic);

		//Display Skills
		if (bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for (skill in  bio.skills){
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkills);
			}
		}
	}
};

var work = {
	"jobs" : [
	{
		"employer": "LIBERTY ASURANCE",
		"title": "Desk Help",
		"location": "Quito, Pichincha",
		"dates": "2013",
		"description": "Solve users problems"
	},
	{
		"employer": "COAC DAQUILEMA",
		"title": "Software Developer",
		"location": "Riobamba, Chimborazo",
		"dates": "2014",
		"description": "Developer of control systems"
	}
	],
	"display": function(){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedWorkEmployer+ formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};


var projects = {
	"project": [
	{
		"title": "ROBSNA",
		"dates": "2013",
		"description": "Social Robot fot Autism Child",
		"images" : ['images/robsna.jpg']

	},
	{
		"title": "TAHU",
		"dates": "2014",
		"description": "Software for Human Talent Control",
		"images" : ['images/tahu.jpg']
	}
	],
	"display" : function(){
	for (item in projects.project){
		var HTMLprojectStart = '<div class="project-entry"></div>';
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		
		if (projects.project[item].images.length>0)
		{
			for(image in projects.project[item].images)
			{
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image])
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
};



var education = {
	"schools" : [
	{
		"name": "ESPOCH",
		"location": "Riobamba, Chimborazo",
		"degree": "Systems Engineer",
		"dates": "2015",
		"majors": [],
		"url": "www.espoch.edu.ec"
	}
	],
	"onlineCourses": [
	{
		"title": "Front End Web Developer",
		"school": "UDACITY",
		"dates": "2015",
		"url": "www.udacity.com"
	}
	],
	"display": function(){
		if (education.schools.length >0){
			for(school in education.schools)
			{
				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolLocation);
				if (education.schools[school].majors.length>0)
				{
					for(major in education.schools[school].majors)
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedSchoolMajor);
				}
				var formattedSchoolURL =  HTMLschoolURL.replace("%data%", education.schools[school].url);
				$(".education-entry:last").append(formattedSchoolURL);
			}
		}
		if(education.onlineCourses.length>0){
			$("#education").append(HTMLonlineClasses);
			for(onLineCourse in education.onlineCourses){
				$("#education").append(HTMLschoolStart);
				var formattedOnLineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourses[onLineCourse].title);
				var formattedOnLineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onLineCourse].school);
				var formattedOnLineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onLineCourse].dates);
				var formattedOnLineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onLineCourse].url);
				$(".education-entry:last").append(formattedOnLineTitle+formattedOnLineSchool);
				$(".education-entry:last").append(formattedOnLineDates);
				$(".education-entry:last").append(formattedOnLineURL);

			}
		}

		
	}
};

bio.display();
work.display();
education.display();
projects.display();

//InternationalizeButton
/*var internationalizeButton = '<button type ="button">Internationalize</button>';
$("#main").append(internationalizeButton);

function inName(name_obj)
{
	var names = name_obj.split(" ");
	var inter_name = names[0].slice(0,1).toUpperCase()+names[0].slice(1).toLowerCase()+" "+names[1].toUpperCase();
	return inter_name;
}*/

//Google Map
$("#mapDiv").append(googleMap);


