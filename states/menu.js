/**
 * menu.js 
 *
 * This is the menu state
 */
const menuState = {

  /**
   * Loads game assets (images, sounds, tilemaps, etc)
   */
  preload : function () {
    game.load.image('intro background','assets/game_background.jpg');
    // Enable mouse
    game.input.mouse.capture = true;
  },

  /**
   * Initializes variables and instantiates objects
   */
  create: function () {
    var i = game.add.image(game.world.centerX, game.world.centerY, 'intro background')
    i.anchor.set(0.5)
    // Add some text
    game.add.text(
      180, 25,  // x, y position
      "Mr. Ambiguous's Love Story", 
      { fontSize: "32px", fill: "#fff" }
    );

    game.add.text(
      320, 300,  // x, y position
      "Play Game", 
      { fontSize: "32px", fill: "#fff" }
    );
  },

  /** 
   * Updates the screen each frame
   */
  update: function () {

    // Check for mouse click and switch state to the game state when
    if (game.input.activePointer.leftButton.isDown) {
      game.state.start("game");
    }
  }
}; // end menuState
