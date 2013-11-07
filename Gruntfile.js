module.exports = function(grunt) {
	grunt.initConfig({
		shell: {
			options: {
				stdout: true,
				stderr: true,
				failOnError: true
			},
			drop_db: {
				command: 'mongo library_database --eval "db.dropDatabase()"'
			},
			seed_db: {
				command: 'mongoimport --db library_database --collection books  --type json --file db/seeds.json --jsonArray'
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('seed-db', [
		'shell:drop_db',
		'shell:seed_db'
	]);
};
