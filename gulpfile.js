// Main module
import gulp from "gulp";
// Import paths
import {path} from "./gulp/config/path.js";

// Passing value to global variable
global.app = {
    path: path,
    gulp: gulp,
}


// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from './gulp/tasks/reset.js';

// Changes watcher
function watcher() {
    gulp.watch(path.watch.files, copy)
}


// Task execution script
const dev = gulp.series(reset, copy, watcher);

// Default script execution
gulp.task('default', dev);