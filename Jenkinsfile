pipeline {
    agent {
        docker {
            image 'cypress/included:6.0.0'
            args '-u root:root'
        }
    }

    stages {
        stage('Download the dependencies'){
           steps {
               sh "npm install"
           }
        }

         stage('Run Custom commands tests'){
           steps {
               sh "npm run triggerAllTests-customCommands"
           }
        }
    }




}