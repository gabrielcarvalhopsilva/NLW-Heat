const links = {
  youtube: "gabrielcarvalho",
  instagram: "gabriel.carvalhu",
  facebok: "gabrielcarvalho",
  twitter: "umcornoae.",
  github: "gabrielcarvalhopsilva"
}

function chanceSocialMediaLinks(){
  for(let li of social.children){
    const socialMedia = li.getAttribute('class')

    li.children[0].href = `https://${socialMedia}.com/${links[socialMedia]}`
  }
}

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${links.github}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userInfo.children[0].innerText = data.name
    userInfo.children[1].href = data.html_url
    userInfo.children[2].innerText = data.bio
    userPicture.src = data.avatar_url
    userName.innerText = data.login
  })
}
chanceSocialMediaLinks()
getGitHubProfileInfos()