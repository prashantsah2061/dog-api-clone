document.addEventListener("DOMContentLoaded", async () => {
    const breedInput = document.getElementById("breed");
    const breedList = document.getElementById("breeds");
    const showImagesBtn = document.getElementById("show-images-btn");
    const message = document.getElementById("message");
    const dogImage = document.getElementById("dog-image");
  

    async function populateBreeds() {
      try {
        const response = await fetch("/breeds"); 
        const breeds = await response.json();
        breeds.forEach(breed => {
          const option = document.createElement("option");
          option.value = breed;
          breedList.appendChild(option);
        });
      } catch (error) {
        message.textContent = "Failed to load breeds. Try again later.";
      }
    }
  
    populateBreeds();
  
    let intervalId = null;
  
    showImagesBtn.addEventListener("click", async () => {
      const breed = breedInput.value.trim().toLowerCase();
  
      message.textContent = "";
      dogImage.style.display = "none";
  
      if (!breed) {
        message.textContent = "Please select a breed.";
        return;
      }
  
      if (intervalId) clearInterval(intervalId);
  
      try {
        const response = await fetch(`/image/${breed}`); 
        const data = await response.json();
  
        if (data.error) {
          message.textContent = "No such breed.";
          return;
        }
  
        dogImage.style.display = "block";
        dogImage.src = data.image;
  
        intervalId = setInterval(async () => {
          const res = await fetch(`/image/${breed}`);
          const imgData = await res.json();
          dogImage.src = imgData.image;
        }, 5000);
      } catch (error) {
        message.textContent = "Error fetching images.";
      }
    });
  });
