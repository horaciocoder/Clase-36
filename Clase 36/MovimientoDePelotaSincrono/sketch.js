var canvas;

var database;

var gameState = 0;
var playerCount;
var bgImg;

var form;
var player;
var game;

function preload() {
  //bgImg = loadImage("");
}
function setup() {
  database = firebase.database();
  canvas = createCanvas(400, 400);
  game = new Game();
  game.getState();
  game.start();
}
