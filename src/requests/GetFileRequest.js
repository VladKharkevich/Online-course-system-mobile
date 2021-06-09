import axios from "axios";

export const GetFileRequest = (path, callbackLogout) => {
    const filename = path.substring(path.lastIndexOf('/')+1)
    axios({url: path,
        method: 'GET',
        responseType: 'blob',
        headers: {'Authorization': localStorage.getItem("Authorization")}}).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
    }).catch(e => {
        if (e.response.status === 401){
            callbackLogout()
        }
    })
}
