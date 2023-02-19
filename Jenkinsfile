pipeline {
    agent {
        label 'Docker02'
    }

    // environment {
    // registry = "lcr.logicspark.com/brt-contract/brt-contract-api"
    // registryCredential = 'lcrLogicspark'
    // dockerfile = 'Dockerfile.multistage'
    // dockerImage = ''
    // REPO_NAME = 'brt-contract-api'
    // LCR_REGISTRY_CREDS = credentials('lcrLogicspark')
    // NPM_TOKEN=credentials('NPM_TOKEN')
    // SCANNER_HOME = tool name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation';
    // ORGANIZATION = "logicspark"
    // PROJECT_NAME = "brt-contract-api"
    }

    // options {
    //     ansiColor('xterm')
    //     skipDefaultCheckout()
    // }

    stages {
        stage('SCM Check') {
            echo "SCM Check"
            // steps {
            //     scmSkip(deleteBuild: true, skipPattern: '.*\\[ci skip\\].*')
            // }
        }

        stage('Cloning our Git') {
            echo "Cloning our Git"

            // steps {
            //     script {
            //         checkout(scm).each { k,v -> env.setProperty(k, v) }
            //     }
            // }
        }

        // stage('Bitbucket Status Notify') {
        //     steps {
        //         // scmSkip(deleteBuild: true, skipPattern: '.*\\[CI SKIP\\].*')
        //         bitbucketStatusNotify(
        //             buildState: 'INPROGRESS',
        //             repoSlug: env.REPO_NAME,
        //             commitId: GIT_COMMIT
        //         )
        //     }
        // }

        // stage('SonarQube analysis') {
        //     steps {
        //         nodejs(nodeJSInstallationName: 'NodeJS16-15') {
        //             // sh "npm install"
        //             withSonarQubeEnv('SonarQube') {
        //                 // sh "./gradlew sonarqube"
        //                 sh "${SCANNER_HOME}/bin/sonar-scanner"
        //             }
        //         }
        //     }
        // }

        // stage("Quality gate") {
        //     steps {
        //         waitForQualityGate abortPipeline: true
        //     }
        // }
        
        // stage('prepare') {
        //     steps {
        //         withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_TOKEN')]) {
        //             // sh 'sudo chown -R 1000:1000 ../brt-contract-api_develop'
        //             // sh 'sudo chown -R 1000:1000 ../brt-contract-api'
        //             sh 'cp \"${NPMRC_TOKEN}\" ./docker/config/.npmrc'
        //             sh 'sudo chmod 664 ./docker/config/.npmrc'
        //             // sh 'sudo chown 1000:1005 ./docker/config/.npmrc'
        //         }
        //     }
        // }

        stage('Building Docker Image') {
            echo 'Building Docker Image'
            // steps {
            //     script {
            //         dockerImage = docker.build ("${env.registry}:${env.BUILD_NUMBER}", "--build-arg NPM_TOKEN=${NPM_TOKEN} -f ./docker/${env.dockerfile} .")
            //     }
            // }
        }

        stage('Publish Docker Image to Private Registry') {
            echo 'Publish Docker Image to Private Registry'
            // steps {
            //     script {
            //         docker.withRegistry('https://lcr.logicspark.com', registryCredential) {
            //             dockerImage.push()
            //         }
            //     }
            // }
        }

        // Delete image from registry
        // stage('Keep only 5 latest tag') {
        //     steps{
        //         script {
        //             sh 'docker run --rm anoxis/registry-cli -l $LCR_REGISTRY_CREDS_USR:$LCR_REGISTRY_CREDS_PSW -r https://lcr.logicspark.com -i brt-contract/brt-contract-api --delete --num 5'
        //             sh 'docker run --rm anoxis/registry-cli -l $LCR_REGISTRY_CREDS_USR:$LCR_REGISTRY_CREDS_PSW -r https://lcr.logicspark.com -i brt-contract/brt-contract-api'
        //         }
        //     }
        // }
        
        stage('SSH Deploy!') {
            echo 'SSH Deploy!'
            // steps {
            //     script {
            //         withCredentials([sshUserPrivateKey(credentialsId: 'sshDeploy', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
            //             def remote = [:]
            //             remote.name = "jumpbox"
            //             remote.host = "jump.logicspark.com"
            //             // remote.port = 22
            //             remote.allowAnyHosts = true
            //             remote.user = userName
            //             remote.identityFile = identity

            //             sshCommand remote: remote, command: "kubectl set image deployment brt-contract-api brt-contract-api=${env.registry}:${env.BUILD_NUMBER} -n brt-contract-development"
            //         }
            //     }
            // }
        }
    }
    //clean up
    // post {
    //     always {
    //         script {
    //             sh "docker rmi --force $registry:$BUILD_NUMBER"

    //             env.GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
    //             env.GIT_AUTHOR_NAME = sh (script: 'git log -1 --pretty=%cn ${GIT_COMMIT}', returnStdout: true).trim()
    //             slackSend(
    //                 color: color_slack_msg(),
    //                 message: """
    //                     *${currentBuild.currentResult}:* Job `${env.JOB_NAME}` *Build:* `${env.BUILD_DISPLAY_NAME}` by *${env.GIT_AUTHOR_NAME}*
    //                     *Build commit:* <https://bitbucket.org/logicspark/brt-contract-api/commits/${GIT_COMMIT}|${GIT_COMMIT}>
    //                     *Last commit message:* '${env.GIT_COMMIT_MSG}'
    //                     *More info at:* <${env.BUILD_URL}|Open Now :link:>
    //                     *Time:* ${currentBuild.durationString.minus(' and counting')}
    //                     """.stripIndent().trim(),
    //                 channel: 'jenkins-status',
    //                 tokenCredentialId: 'slackToken'
    //             )
    //         }
    //     }

    //     success {
    //         bitbucketStatusNotify(
    //             buildState: 'SUCCESSFUL',
    //             repoSlug: env.REPO_NAME,
    //             commitId: GIT_COMMIT
    //         )

    //         /* clean up our workspace */
    //         deleteDir()
    //         /* clean up tmp directory */
    //         dir("${workspace}@tmp") {
    //             deleteDir()
    //         }
    //         /* clean up script directory */
    //         dir("${workspace}@script") {
    //             deleteDir()
    //         }
    //     }

    //     aborted {
    //         bitbucketStatusNotify(
    //             buildState: 'FAILED',
    //             repoSlug: env.REPO_NAME,
    //             commitId: GIT_COMMIT
    //         )
    //     }

    //     failure {
    //         script {
    //             // sh "docker rmi --force $registry:$BUILD_NUMBER"
    //             bitbucketStatusNotify(
    //                 buildState: 'FAILED',
    //                 repoSlug: env.REPO_NAME,
    //                 commitId: GIT_COMMIT
    //             )
    //         }
    //     }
    // }
}

def color_slack_msg() {
    switch(currentBuild.currentResult) {
    case "SUCCESS":
        return "good"
        break
    case "FAILURE":
    case "UNSTABLE":
        return "danger"
        break
    default:
        return "warning"
        break
    }
}