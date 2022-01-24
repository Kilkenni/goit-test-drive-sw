const darkTheme = {
    main: '#fff',
    accent: '#FFC700',
    bg_main: '#060803', 
    bg_sec: '#222527',
    // overlay: 'rgb(239 236 236 / 90%)', 
    overlay: 'rgb(255, 255, 255, 0.4)',
};

const lightTheme = {
    main: '#15141D',
    accent: '#4B526A', 
    bg_main: '#fff',
    bg_sec: '#EBEBEB',
    // overlay: 'rgb(21 20 29 / 90%)', 
    overlay: 'rgba(21, 20, 29, 0.4)',
}

//   --color-main--light: #15141d;
//   --color-accent--light: #4b526a;
//   --color-bg_main--light: #ffffff;
//   --color-bg_secondary--light: #ebebeb;
//   --color-overlay--light: rgba(21, 20, 29, 0.4);

let currentTheme = 'dark';

const element = document.documentElement;

function switchTheme () {
    const aboutMeContainer = document.querySelector('.sectionPrimary');
    const factsContainer = document.querySelector('.sectionCodex');

    if (currentTheme === 'dark') {
        element.style.setProperty('--color-main', lightTheme.main);
        element.style.setProperty('--color-accent', lightTheme.accent);
        
        element.style.setProperty('--color-bg_main', lightTheme.bg_main);
        element.style.setProperty('--color-bg_secondary', lightTheme.bg_sec);
        element.style.setProperty('--color-overlay', lightTheme.overlay);

        aboutMeContainer.classList.add('sectionPrimary--light');
        factsContainer.classList.add('sectionCodex--light');

        currentTheme = 'light';
    } else {
        element.style.setProperty('--color-main', darkTheme.main);
        element.style.setProperty('--color-accent', darkTheme.accent);
        
        element.style.setProperty('--color-bg_main', darkTheme.bg_main);
        element.style.setProperty('--color-bg_secondary', darkTheme.bg_sec);
        element.style.setProperty('--color-overlay', darkTheme.overlay);

        aboutMeContainer.classList.remove('sectionPrimary--light');
        factsContainer.classList.remove('sectionCodex--light');

        currentTheme = 'dark';
    }
}

const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', switchTheme);