async function fetchUser(username){
    let address = 'https://api.github.com/users/' + username
    let response = fetch(address)

    let json = await response
     .then(res =>  res.json())
    
    let userData 
    json.message !== 'User not found' ? userData = combineUserInfo(json) : userData = json.message
    return userData
}

function combineUserInfo(json){
    let output = {
        avatar: json.avatar_url,
        name: json.name,
        repos: json.repos_url
    }
    console.log(output)
    return output
}

export default fetchUser