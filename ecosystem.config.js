module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js',
    env: {
      "NODE_ENV": "production",
      "MONGO_URL":"mongodb://admin:root@localhost:27017/wwprod"
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-53-216-209.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/kk.pem',
      ref: 'origin/master',
      repo: 'git@github.com:coleschneider/tutorial.git',
      path: '/home/ubuntu/tutorial',
      'post-deploy': 'npm install && npm run-script build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}