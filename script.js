// Selecting DOM Elements 

const source = document.getElementById('source');
const destination = document.getElementById('destination');
const resetBtn = document.getElementById('btn');
const remainingItems = source.querySelectorAll('img');

// Add event listeners for the dragstart and dragover events on the source div
source.addEventListener('dragstart', handleDragStart, false);
source.addEventListener('dragend', handleEnd, false);
destination.addEventListener('dragover', handleDragOver, false);
destination.addEventListener('drop', handleDrop, false);

resetBtn.addEventListener('click', handleReset, false);


// Function to handle the dragstart event
function handleDragStart(event) {
  // Set the data (image element with outerHTML) being dragged
  event.dataTransfer.setData('text/plain', event.target.outerHTML);
  event.target.classList.add('transparent-image');
}

function handleEnd (event){
    event.dataTransfer.setData('text/plain', event.target.outerHTML);
    event.target.classList.remove('inline');
    event.target.classList.add('visibility');

}
// Function to handle the dragover event
function handleDragOver(event) {
  // Prevent the default behavior
  event.preventDefault();
  destination.classList.add("hover")
}

// Function to handle the drop event
function handleDrop(event) {
  // Prevent the default behavior
  event.preventDefault();

  // Get the image element from the dragged data
  let imageHtml = event.dataTransfer.getData('text/plain');
  let tempDiv = document.createElement('div');
  tempDiv.innerHTML = imageHtml;
  let image = tempDiv.firstChild;

  // Append the image to the destination div
  event.target.appendChild(image);

  event.target.classList.remove('hover');


  // showing the alert after transfering all the images from Source to Destination
  if (destination.children.length === remainingItems.length) {
    setTimeout(()=>{
        alert('All items have been successfully transferred!');
    },100)
  }

}

function handleReset(){
    destination.innerHTML = '';

    // Restore the images in the source div
    let images = source.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('transparent-image');
      images[i].classList.remove('visibility');
      images[i].classList.add('inline');
    }
}



