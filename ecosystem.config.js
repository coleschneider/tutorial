module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-53-216-209.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/kk.pem',
      ref: 'origin/master',
      repo: 'git@github.com:coleschneider/tutorial.git',
      path: '/home/ubuntu/tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}