import replace from "gulp-replace"; // Search and replace
import plumber from "gulp-plumber"; // Error processing
import notify from "gulp-notify"; // Messages (tips)
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Check updates



export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
}