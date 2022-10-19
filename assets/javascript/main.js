import mainProgram from './static-data-program.js';
import speakers from './static-data-speakers.js';

let mobileNav = document.querySelector('#hamburguer-a');
mobileNav.addEventListener('click', (event) => {
    displayMobileMenu();
})

function displayMobileMenu() {
    const mobileNavDiv = document.querySelector('#navbar-hamburguer');
    mobileNavDiv.classList.add('hidden');

    const topNavbar = document.querySelector('#top-navbar');
    topNavbar.classList.replace('hidden', 'container-fluid');
    topNavbar.classList.add('py-3');

    const bottomNavbar = document.querySelector('#bottom-navbar');
    bottomNavbar.classList.remove('hidden');

    const bottomNavList = document.querySelector('#bottom-navbar-list');
    bottomNavList.classList.add('flex-column');
    bottomNavList.classList.add('align-items-center');

    const navClose = document.querySelector("#nav-close");
    navClose.addEventListener('click', (event) => {
        closeMobileMenu(mobileNavDiv, topNavbar, bottomNavbar, bottomNavList);
    });
}

function closeMobileMenu(mobileNavDiv, topNavbar, bottomNavbar, bottomNavList) {
    mobileNavDiv.classList.remove('hidden');
    topNavbar.classList.replace('container-fluid', 'hidden');
    topNavbar.classList.remove('py-3');
    bottomNavbar.classList.add('hidden');
    bottomNavList.classList.remove('flex-column');
    bottomNavList.classList.remove('align-items-center');
}

function displayMainProgram(divTag) {
    let contRow = 5;
    let idRow = 0;
    let divRow = '';
    Object.entries(mainProgram).forEach((element) => {
        let [programId, programData] = element;

        if (contRow == 5) {
            contRow = 1;
            idRow += 1;
            divRow = document.createElement('div')
            divRow.id = `program-row-${idRow}`;
            divRow.classList.add('row');
            divRow.classList.add('container-fluid');
            divRow.classList.add('justify-content-center');
            divRow.classList.add('m-0');
            divRow.classList.add('p-0');
            divTag.appendChild(divRow);
        } else { contRow += 1 };

        let colProgram = document.createElement('div');
        colProgram.classList.add('col');
        colProgram.classList.add('col-12');
        colProgram.classList.add('col-sm-12');
        colProgram.classList.add('col-md-2');
        colProgram.classList.add('mx-md-0');
        colProgram.classList.add('px-md-0');
        colProgram.classList.add('mb-3');
        colProgram.classList.add('container');
        divRow.appendChild(colProgram);

        let divBox = document.createElement('div');
        divBox.classList.add('row');
        divBox.classList.add('mx-1');
        divBox.classList.add('px-0');
        divBox.classList.add('py-3');
        divBox.classList.add('program-box');
        colProgram.appendChild(divBox);

        let colBox = document.createElement('div');
        colBox.classList.add('col');
        colBox.classList.add('col-12');
        colBox.classList.add('col-sm-2');
        colBox.classList.add('col-md-12');
        colBox.classList.add('text-center');
        colBox.classList.add('text-sm-start');
        colBox.classList.add('text-md-center');
        divBox.appendChild(colBox);

        let divBoxImg = document.createElement('img');
        divBoxImg.src = programData.icon;
        divBoxImg.alt = programData.alt;
        colBox.appendChild(divBoxImg);

        colBox = document.createElement('div');
        colBox.classList.add('col');
        colBox.classList.add('col-12');
        colBox.classList.add('col-sm-3');
        colBox.classList.add('col-md-12');
        colBox.classList.add('text-center');
        colBox.classList.add('text-sm-start');
        colBox.classList.add('text-md-center');
        colBox.classList.add('program-box-title');
        colBox.classList.add('fs-4');
        colBox.classList.add('fw-bold');
        colBox.textContent = programData.title;
        divBox.appendChild(colBox);

        colBox = document.createElement('div');
        colBox.classList.add('col');
        colBox.classList.add('col-12');
        colBox.classList.add('col-sm-7');
        colBox.classList.add('col-md-12');
        colBox.classList.add('text-center');
        colBox.classList.add('text-sm-start');
        colBox.classList.add('text-md-center');
        colBox.textContent = programData.description;
        divBox.appendChild(colBox);
    });
}

function displaySpeakers(firstDiv, secondDiv) {
    let count = 0;
    Object.entries(speakers).forEach((element) => {
        let [speakerId, speakerData] = element;
        let newTag = document.createElement('div');
        newTag.classList.add('col');
        newTag.classList.add('col-12');
        newTag.classList.add('col-sm-12');
        newTag.classList.add('col-md-6');
        newTag.classList.add('mb-3');
        newTag.classList.add('my-0');
        newTag.classList.add('py-0');
        if (count < 2) {
            firstDiv.appendChild(newTag);
            count++;
        } else {
            secondDiv.appendChild(newTag);
            count++;
        }


        let newTag2 = document.createElement('div');
        newTag2.classList.add('row');
        newTag.appendChild(newTag2);

        newTag = document.createElement('div');
        newTag.classList.add('col');
        newTag.classList.add('col-12');
        newTag.classList.add('col-sm-4');
        newTag.classList.add('col-md-auto');
        newTag.classList.add('p-0');
        newTag.classList.add('m-0');

        newTag2.appendChild(newTag);

        let newTag3 = document.createElement('img');
        newTag3.src = speakerData.image;
        newTag3.alt = speakerData.alt;
        newTag.appendChild(newTag3);

        newTag = document.createElement('div');
        newTag.classList.add('col');
        newTag.classList.add('col-12');
        newTag.classList.add('col-sm-8');
        newTag.classList.add('col-md-6');
        newTag.classList.add('text-center');
        newTag.classList.add('text-sm-start');
        newTag2.appendChild(newTag);

        newTag2 = document.createElement('h4');
        newTag2.textContent = speakerData.name;
        newTag.appendChild(newTag2);

        newTag2 = document.createElement('p');
        newTag2.textContent = speakerData.role;
        newTag2.classList.add('p-role');
        newTag2.classList.add('my-0');
        newTag.appendChild(newTag2);

        newTag2 = document.createElement('div');
        newTag2.classList.add('guide-bar-grey');
        newTag2.classList.add('mt-0');
        newTag2.classList.add('mb-2');
        newTag.appendChild(newTag2);

        newTag2 = document.createElement('p');
        newTag2.textContent = speakerData.comment;
        newTag2.classList.add('p-comment');
        newTag.appendChild(newTag2);
    });
}

function displayMoreSpeakers(event, speakersDiv, buttonDiv, buttonLess) {
    speakersDiv.classList.remove('visually-hidden');
    buttonDiv.classList.add('visually-hidden');
    buttonLess.classList.remove('visually-hidden');

    buttonLess.addEventListener('click', (event) => {
        speakersDiv.classList.add('visually-hidden');
        buttonDiv.classList.remove('visually-hidden');
        buttonLess.classList.add('visually-hidden');
    });
}

let mobileMore = document.querySelector('#more-button');
mobileMore.addEventListener('click', (event) => {
    displayMoreSpeakers(event, document.querySelector('#last-speakers'), document.querySelector('#more-button-div'), document.querySelector('#less-button-div'));
});

//let x = window.matchMedia('(min-width: 768px)');
//x.addEventListener('change', (y) => {
//
//    let topNavbar = document.querySelector('#top-navbar');
//    topNavbar.classList.remove('visually-hidden');
//})
//myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes

displayMainProgram(document.querySelector('#div-main-program'));
displaySpeakers(document.querySelector('#first-speakers'), document.querySelector('#last-speakers'));