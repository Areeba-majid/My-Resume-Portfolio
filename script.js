var skillsSection = document.getElementById('skills');
var toggleButton = document.getElementById('toggle-skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.toggle('hidden');
});
var sections = [
    {
        id: 'education',
        title: 'Education',
        content: [
            'Matriculation (Board of Secondary Education)',
            'Intermediate (Board of Intermediate Education)',
            'Bachelor\'s Degree in Computer Science'
        ]
    },
    {
        id: 'skills',
        title: 'Skills',
        content: [
            'HTML/CSS',
            'TypeScript',
            'JavaScript',
            'React'
        ]
    },
    {
        id: 'work-experience',
        title: 'Work Experience',
        content: [
            'Software Engineer, Google (2020-2023)',
            'Lead Teacher GIAIC Program (2023-present)'
        ]
    }
];
sections.forEach(function (section) {
    var sectionElement = document.getElementById(section.id);
    if (sectionElement) { // Check for null
        sectionElement.innerHTML = "\n            <h2>".concat(section.title, "</h2>\n            <ul>\n                ").concat(section.content.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n            </ul>\n        ");
    }
});
