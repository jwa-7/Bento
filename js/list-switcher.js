let parentListEntries = document.querySelectorAll(".list__parentList > .list__parentList--scrollwrapper > a.list__link");

// init eventListener for parent-list entries click
parentListEntries.forEach(function(el, i){
    el.addEventListener("click", function(e){
        e.preventDefault();
        highlightSelectedEntry(el);
        showRelatedListContainer(el.dataset["targetId"], el.textContent);
    }, false);
});

//function to remove/add classes
function highlightSelectedEntry(newEl){
    // working like below as one link is preselected
    var currentlySelectedEls = document.querySelector(".list__parentList > .list__parentList--scrollwrapper > a.list__link.selected");
    currentlySelectedEls.classList.remove("selected");
    newEl.classList.add("selected");
}


//function to show/hide list-container
function showRelatedListContainer(newListId, headline){
    var childLists = document.querySelectorAll(".list__childListLinks");
    [].forEach.call(childLists, function(el){
        el.classList.add("hidden");
    });
    var newListToShow = document.getElementById(newListId);
    newListToShow.classList.remove("hidden");
}