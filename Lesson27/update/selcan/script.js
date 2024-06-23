const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

//  TODO: 1. Fetch post data for the post with given postId
fetch(postId)
.then((response)=>response.json())
.then(data=>console.log(data))
.catch(error=>console.error("hata:",error))


// 2. Prefill form with post title and post body
document.getElementById("title").innerText=("Örnek Başlik");
document.getElementById("body").innerText=("Bu bir örnek içeriktir.")
// 3. Select form element and attache 'submit' event listener to it, send new post information with UPDATE request
const formElement=document.getElementById("postForm");
formElement.addEventListener('submit',function upDate(e){
e.preventDefault();
const title=document.getElementById("title").value;
const body=document.getElementById("body").value;

const data={
    title:title,
    body:body
};

fetch(postId,{
    method:"PUT",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(data)
})
.then(response=>response.json())
.then(data=>{
    console.log("başari ile güncellendi:",data);
    document.getElementById("message").value=("Güncelleme başarili.");
})
.catch(error=>{
    console.error("hata oluştu",error);
    document.getElementById("message").value=("Güncelleme başarisiz.");
});
});
// 4. Show confirmation to the user if update operation was successful
