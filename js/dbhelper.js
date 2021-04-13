/*
 Program: dbhelper.js
 Author: Perry Brandiezs
 Date: 4/12/2021


 This program is the dbhelper for the Portfolio application, pulling
 the data from /data/featured_work.json.

*/
class DBHelper {
    /**
    * Database URL.
    */
        static get DATABASE_URL() {
        // const port = 8000; // Change this to your server port
        //return `http://localhost:${port}/data/featured_work.json`;
        return 'data/featured_work.json';
    }

    /**
     * Fetch all courses.
     */
    static fetchCourseTitles(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', DBHelper.DATABASE_URL);
        xhr.onload = () => {
            if (xhr.status === 200) { // Got a success response from server!
                const json = JSON.parse(xhr.responseText);
                const course_titles = json.course_titles;
                callback(null, course_titles);
            } else { // Oops!. Got an error from server.
                const error = (`Request failed.  Returned status of ${xhr.status}`);
                callback(error, null);
            }
        };
        xhr.send();
    }


}