class GitHub {
    async getUser(username) {
        console.log('Getting User');
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            UI.showError();
            return;
        }
        return await response.json();
    }

    async getRepos(user) {
        console.log('Getting Repos');
        const response = await fetch(`https://api.github.com/users/${user.login}/repos`);
        if (!response.ok) {
            UI.showError();
            return;
        }
        return await response.json();
    }
}