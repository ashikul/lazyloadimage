# Setup
open index.html using any browser

# Approach
Window scroll event listeners are created for each image element. These listeners
check if the image element is in view and if it needs to be loaded. If so, an img element is appended inside with a src attribute to an image URL. This image gets fetched immediately and loaded into view.

# Notes
 - In this example, Ajax wasn't necessary for loading the image. However, for ads, we would need to add http calls.
 - This works on all browsers


