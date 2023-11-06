class UI {
    static addProfile(user) {
        if (!!document.querySelector('.profile-container')) {
            document.querySelector('.profile-container').remove();
            document.querySelector('.repos-container').remove();
        }
        document.querySelector('.error').removeAttribute('shown');
        console.log('Adding Profile to UI')
        let element = `
            <div class="profile-container">
                    <div>
                        <img src=${user.avatar_url} alt="Avatar" class="avatar">
                    </div>
                    <div class="profile-info-container">
                        <div>
                            <p style="background-color: royalblue">Public Repos: ${user.public_repos}</p>
                            <p style="background-color: cornflowerblue">Public Gists: ${user.public_gists}</p>
                            <p style="background-color: forestgreen">Followers: ${user.followers}</p>
                            <p style="background-color: orange">Following: ${user.following}</p>
                        </div>
                        <div>
                            <p><strong>Company:</strong> ${user.company}</p>
                            <p><strong>Website:</strong> ${user.blog}</p>
                            <p><strong>Location:</strong> ${user.location}</p>
                            <p><strong>Member Sice:</strong> ${user.created_at}</p>
                        </div>
                    </div>
                    <a href=${user.html_url} class="profile-link">View Profile</a>
                </div>`;
        document.querySelector('main').insertAdjacentHTML("beforeend", element);
    }

    static showError() {
        document.querySelector('.error').setAttribute('shown', '');
    }

    static clear() {
        if (!!document.querySelector('.profile-container')) {
            document.querySelector('.profile-container').remove();
            document.querySelector('.repos-container').remove();
        }
    }

    static addRepos(repos) {
        let reposElement = document.createElement('div');
        reposElement.className = 'repos-container';
        let title = document.createElement('h2');
        title.className = 'title';
        title.innerText = 'Latest Repos';
        reposElement.appendChild(title);
        repos.forEach(repo => {
            reposElement.insertAdjacentHTML('beforeend', this.createRepo(repo));
        });
        document.querySelector('main').appendChild(reposElement);
    }

    static createRepo(repo) {
        let element = `
            <div class="repo">
                <a href=${repo.html_url} class="title">${repo.name}</a>
                <div class="repo-info">
                    <p class="stars">Stars: ${repo.stargazers_count}</p>
                    <p class="watchers">Watchers: ${repo.watchers_count}</p>
                    <p class="forks">Forks: ${repo.forks_count}</p>
                </div>
            </div>
        `;
        return element;
    }
}