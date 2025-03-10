const BASE_URL = 'http://localhost:8000/users'

window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    console.log('user page loaded');
    //1. load all user from api
    const response = await axios.get('${BASE_URL}/users')

    console.log(response.data)
    const userDOM = document.getElementById('user')
    //2. นำ user ทั้งหมด load back to html
    let htmlData = '<div>'
    for (let i = 0; i < response.data.length; i++){
        let user = response.data[i]
        htmlData += `<div>
        ${user.id} ${user.firstname} ${user.lastname}
        <a href='index.html?id=${user.id}'><button>Edit</button></a>
        <button class = 'delete' data-id='${user.id}'>zDelete</button>
        </div>`
    }

    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    //delete user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click',async (event) => {
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() //recursive function เรียกใช้ฟังก์ชันตัวเอง
            }catch (error){
                console.log('error',error)
            }
        })
    }
}