node {
  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute/sample-ci-project.git', branch: "${env.BRANCH_NAME}"

  stage 'Installing Dependencies'
  sh "npm prune"
  sh "npm install"

  stage 'Building'
  sh "npm run lint"

  stage 'Testing'
  sh "npm test"

  stage 'Build'
  sh "mkdir dist -p"
  sh "cp package.json dist && cd dist && tar cvzf my-ci-project_current.tar.gz *"
  step([$class: 'ArtifactArchiver', artifacts: 'dist/*.tar.gz', fingerprint: true])
}
