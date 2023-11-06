const github = new GitHub();

document.getElementById('username-text-input')
    .addEventListener('keyup', async (e) => {
    const username = e.target.value;
    if (username === '') {
        UI.clear();
        return;
    }
    let user = await github.getUser(username);
    if (user === undefined) {
        UI.clear();
        return;
    }
    let repos = await github.getRepos(user);
    console.log('User returned');
    console.log('Repos returned');
    UI.addProfile(user);
    console.log('Profile added');
    UI.addRepos(repos);
});