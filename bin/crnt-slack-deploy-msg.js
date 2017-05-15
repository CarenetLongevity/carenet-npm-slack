#!/usr/bin/env node

var Slack = require('slack-node');
var argv = require('minimist')(process.argv.slice(2));

slack = new Slack();
slack.setWebhook(process.env.SLACK_WEBHOOK);

slack.webhook({
  username: "deployer",
  text: argv['m']
}, function(err, response) {
  console.log(response);
});