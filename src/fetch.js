async function fetchUser(username){
    let address = 'https://api.github.com/users/' + username
    let response = fetch(address)

    let json = await response
     .then(res =>  res.json())
    
    let userData 
    json.message !== 'User not found' ? userData = combineUserInfo(json) : userData = json.message
    console.log(userData)
    return userData
}

function combineUserInfo(json){
    let output = {
        avatar: json.avatar_url,
        name: json.login,
        repos: json.repos_url
    }
    return output
}

export default fetchUser