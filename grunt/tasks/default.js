module.exports = function (grunt) {
    grunt.registerTask('default', [
        'clean:staging',
        'copy:staging',
        'less:staging',
        'autoprefixer:staging',
        'newer:copy:stagingHtml',
        'prettify',
        'wiredep:staging',
        'browserSync:staging',
        'watch'
    ]);
};
