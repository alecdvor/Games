// game.js
const config = {
 type: Phaser.AUTO,
 width: 800,
 height: 600,
 scene: {
 preload: preload,
 create: create,
 update: update
 }
};


const game = new Phaser.Game(config);
let isoMap;
let player;
let cursors;


function preload () {
 // Load isometric tilemap data (replace with your actual tileset and map data)
 this.load.image('tiles', 'assets/isometric_tiles.png');
 this.load.tilemapTiledJSON('map', 'assets/isometric_map.json');
 this.load.image('unit', 'assets/scv_iso.png'); // Placeholder for an isometric unit sprite
}


function create () {
 // Create the isometric tilemap
 const map = this.make.tilemap({ key: 'map' });
 const tileset = map.addTilesetImage('isometric_tiles', 'tiles');


 // Adjust layer names to match your Tiled map
 isoMap = map.createLayer('Tile Layer 1', tileset, 0, 0);


 // Convert tilemap coordinates to world coordinates for placing the player
 const playerTileX = 5; // Example starting tile X
 const playerTileY = 5; // Example starting tile Y
 const playerWorldPos = isoMap.tileToWorldXY(playerTileX, playerTileY);


 // Create the player unit
 player = this.add.sprite(playerWorldPos.x + tileset.tileWidth / 2, playerWorldPos.y - tileset.tileHeight / 2, 'unit').setDepth(10);


 // Enable keyboard input
 cursors = this.input.keyboard.createCursorKeys();


 // Set up camera to follow the player
 this.cameras.main.startFollow(player);
 this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
}


function update (time, delta) {
 const speed = 2;


 // Handle player movement based on cursor keys (simple 2D movement for prototype)
 player.setVelocity(0);


 if (cursors.up.isDown) {
 player.y -= speed;
 } else if (cursors.down.isDown) {
 player.y += speed;
 }


 if (cursors.left.isDown) {
 player.x -= speed;
 } else if (cursors.right.isDown) {
 player.x += speed;
 }


 // Keep the player within the map bounds (simple check for prototype)
 Phaser.Math.Clamp(player.x, 0, isoMap.widthInPixels);
 Phaser.Math.Clamp(player.y, 0, isoMap.heightInPixels);
}
