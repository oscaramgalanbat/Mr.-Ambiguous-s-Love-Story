/**
 * confession.js 
 *
 * This state represents the start of a relationship
 */
const confessionState = {

  /**
   * Loads game assets (images, sounds, tilemaps, etc)
   */
  preload: function () {
    game.load.image('conf', 'assets/confession_background.jpg');
    // Enable mouse
    game.input.mouse.capture = true;
  },

  /**
   * Initializes variables and instantiates objects
   */
  create: function () {
      var i = game.add.image(game.world.centerX, game.world.centerY, 'conf')
    i.anchor.set(0.5)

    // Add some text
    text = game.add.text(300, 80, '', { fontSize: '32px', fill: '#fff' });

    // Add the button image to the middle of the screen and enable input
    const button = game.add.sprite(game.world.centerX, game.world.centerY, 'button');
    button.anchor.set(0.5);
    button.inputEnabled = true;
    button.input.useHandCursor = true; //  Set the scale of the sprite to the random value
    button.scale.setTo(0.8,0.8);
 // Change cursor style on mouseover

    // Add a function to the button to be called when the button is clicked
    button.events.onInputDown.add(function () {
      game.state.start('menu');
    }, this);
  },

  /** 
   * Updates the screen each frame
   */
  update: function () {
      
    // Show mouse coordinates for debugging and placing objects
    text.setText(
      'x: ' + game.input.mousePointer.x + 
      '  y: ' + game.input.mousePointer.y
    );
  }
}; // end confessionState
