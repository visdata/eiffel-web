var gulp=require('gulp');
var uglify=require('gulp-uglify');
var rev=require('gulp-rev');
var rename=require('gulp-rename');
var concat=require('gulp-concat');
var revReplace=require('gulp-rev-replace');
var useref=require('gulp-useref');

gulp.task('script', function () {
    return gulp.src([
        'init/init.js',
        'init/initColor.js',
        'animation/*.js',
        'class/*.js',
        'event/*.js',
        'layout/*.js',
        'math/*.js',
        'pageInit/*.js',
        'processData/*.js',
        'searchInteraction/*.js',
        'setting/*.js'
    ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dist/'))
});

gulp.task('js',function(){
    return gulp.src([
        //'init/init.js',
        'init/initColor.js',
        'init/authorData.js',
        'init/initRightClickMenu.js',
        'localData/*.js',
        'animation/*.js',
        'class/*.js',
        'event/*.js',
        'layout/*.js',
        'math/*.js',
        'pageInit/*.js',
        'processData/*.js',
        'searchInteraction/*.js',
        'setting/*.js',
    ])
        //.pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rev())
        .pipe(gulp.dest("dist/"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/"));
});

gulp.task('graph', ["js"],function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src('graph_origin.html')
        .pipe(useref())
        .pipe(revReplace({manifest: manifest}))
        .pipe(rename('graph.html'))
        .pipe(gulp.dest("./"));
});

gulp.task('citationJS', function () {
    return gulp.src('pageInit/citation.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/"));
});

gulp.task('citation', ["citationJS"],function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src('citation_origin.html')
        .pipe(useref())
        .pipe(revReplace({manifest: manifest}))
        .pipe(rename('citation.html'))
        .pipe(gulp.dest("./"));
});

gulp.task('resultJS', function () {
    return gulp.src('pageInit/result.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/"));
})

gulp.task('result', ["resultJS"],function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src('result_origin.html')
        .pipe(useref())
        .pipe(revReplace({manifest: manifest}))
        .pipe(rename('result.html'))
        .pipe(gulp.dest("./"));
});

gulp.task('venuelistJS', function () {
    return gulp.src('pageInit/venuelist.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/"));
})

gulp.task('venuelist', ["venuelistJS"],function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src('venuelist_origin.html')
        .pipe(useref())
        .pipe(revReplace({manifest: manifest}))
        .pipe(rename('venuelist.html'))
        .pipe(gulp.dest("./"));
});

gulp.task('venuepapersJS', function () {
    return gulp.src('pageInit/venuepapers.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/"));
});

gulp.task('venuepapers', ["venuepapersJS"],function() {
    var manifest = gulp.src("dist/rev-manifest.json");
    return gulp.src('venuepapers_origin.html')
        .pipe(useref())
        .pipe(revReplace({manifest: manifest}))
        .pipe(rename('venuepapers.html'))
        .pipe(gulp.dest("./"));
});


//gulp.task('default', ['graph']);
gulp.task('default', ['graph','citation','result','venuepapers','venuelist']);