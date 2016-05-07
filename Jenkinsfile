node {
  stage 'Checkout Repository'
  git url: 'git@github.com:stackroute/sample-ci-project.git'

  stage 'Install Dependencies'
  sh "npm install"

  stage 'Test'
  sh "node_modules/.bin/mocha"
}