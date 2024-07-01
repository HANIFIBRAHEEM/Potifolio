document.addEventListener("DOMContentLoaded", () => {
    const containerWrapper = document.querySelector(".container-wrapper");

    function duplicateElements() {
        const newContainer = document.createElement("div");
        newContainer.classList.add("container");

       
        const contents = ["FRONT-END DEVELOPER", "WEB PENETRATION TESTER", "RESEARCH ANALYST"];
        const randomContent = contents[Math.floor(Math.random() * contents.length)];
        newContainer.textContent = randomContent;

        
        const posX = Math.random() * (window.innerWidth / 2); 
        const posY = Math.random() * (window.innerHeight / 2); 

        newContainer.style.left = `${posX}px`;
        newContainer.style.top = `${posY}px`;

        containerWrapper.appendChild(newContainer);
    }

   
    setInterval(duplicateElements, 3000);

});
