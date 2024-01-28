const mainHeader = document.getElementById('main-header');

mainHeader.addEventListener('click', () => {
    const mainContent = document.getElementById('main-content');
    console.log(mainContent);
    if (mainContent.style.visibility == "hidden")
        mainContent.style.visibility = "visible";
    else
        mainContent.style.visibility = "hidden";
})
