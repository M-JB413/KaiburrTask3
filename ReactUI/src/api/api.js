const postData = async (formData, setUserData) => {
    await fetch('http://localhost:8080/create', {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        method: "POST",
        body: JSON.stringify(formData),
    })

    console.log(formData)
    readData(setUserData)
}
const deleteUser = async (user, setUserData) => {
    const response = await fetch(`http://localhost:8080/delete/${user.id}`, {
        method: "DELETE"
    })

    readData(setUserData)
}
const readData = async (setUserData) => {
    const response = await fetch("http://localhost:8080/get")

    const data = await response.json()
    setUserData(data)
}
const readDataByName = async (setUserData, name) => {
    const response = await fetch(`http://localhost:8080/get/name/${name}`)

    const data = await response.json()
    setUserData(data)
}
const readDataByAsignee = async (setUserData, asignee) => {
    const response = await fetch(`http://localhost:8080/get/assignee/${asignee}`)

    const data = await response.json()
    setUserData(data)
}
export { postData, deleteUser, readData, readDataByName, readDataByAsignee }