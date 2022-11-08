function user() {
    
    let name = document.querySelector(".nameUser").value
    let age = document.querySelector(".ageUser").value
    let skills = document.querySelector(".skills").value
    let resName = document.querySelector(".resultName")
    let resAge = document.querySelector(".resultAge")
    let resSkills = document.querySelector(".resultSkills")

    resName.innerHTML = `${name}`
    resAge.innerHTML = `${age}`
    resSkills.innerHTML = `${skills}`

    document.querySelector(".nameUser").value = ""
    document.querySelector(".ageUser").value = ""
    document.querySelector(".skills").value = ""
}