/*
 Program: main.js
 Author: Perry Brandiezs
 Date: 4/12/2021


 This program is the main javascript program for the Portfolio application.  It pulls from
 dbhelper.js, and in turn data/featured_work_info.json to populate the information.

*/

document.addEventListener('DOMContentLoaded', () => {
    fetchCourseTitles();
});

const fetchCourseTitles = () => {
    DBHelper.fetchCourseTitles((error, course_titles) => {
        if (error) {
            console.error(error);
        } else {
            self.course_titles = course_titles;
            fillCourseTitlesHTML();
        }
    });
};

const fillCourseTitlesHTML = (course_titles = self.course_titles) => {
    const select = document.getElementById('content-container');

    course_titles.forEach(course_titles => {
        const course_title_element = document.createElement('h2');
        course_title_element.innerHTML = course_titles.course_title;
        course_title_element.value = course_titles.course_title;
        course_title_element.className = "course_title";
        select.append(course_title_element);

        const course_section_element = document.createElement('div');
        course_section_element.className = "course_section";

        course_titles.courses.forEach(course => {
            // Course
            const course_element = document.createElement('div');
            course_element.className = "course";
            // Course image
            const image_element = document.createElement('img');
            image_element.src = course.image;
            image_element.alt = course.alt_image;
            image_element.className = "course_image";
            course_element.append(image_element);
            // Course Title
            const title_element = document.createElement('h3');
            title_element.innerHTML = course.title;
            title_element.value = course.title;
            title_element.className = "project_title";
            course_element.append(title_element);
            // Course description
            if (course.description) {
                const description_element = document.createElement('p');
                description_element.textContent = course.description;
                course_element.append(description_element);
            };
            // Github
            if (course.github_link) {
                const github_element = document.createElement('a');
                github_element.text = "Github";
                github_element.href = course.github_link;
                course_element.append(github_element);
            };
            // Website
            if (course.website_link) {
                const website_element = document.createElement('a');
                website_element.text = "Website";
                website_element.href = course.website_link;
                course_element.append(website_element);
            };

            course_section_element.append(course_element);
        });
        select.append(course_section_element);
    });
};