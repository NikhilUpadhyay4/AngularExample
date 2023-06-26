function Click() {
    let input = document.getElementById('input');
    let text = input.value;
    if (text.trim() == '') {
        alert('Invalid');
        return
    }

    url = `https://api.github.com/search/users?q=${text}`
    getapi(url);
}

async function getapi(url) {
    const response = await fetch(url);
    const dataList = await response.json();
    show(dataList);
}

const show = (dataList) => {
    let r = dataList.items;
    console.log(r);

    let table =
        ` <tr>
            <th>Name</th>
            <th>Avatar</th>
          </tr>`;
    for (let data of r) {
        table +=
            `<tr>
               <td>${data.login}</td>
               <td><img src = "${data.avatar_url}"></td>
            </tr>`;
    }
    document.getElementById('table').innerHTML = table;
}