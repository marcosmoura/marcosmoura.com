module.exports = function (grunt) {
    grunt.registerTask('serve', [
        'browserSync:build',
        'watch'
    ]);
};
