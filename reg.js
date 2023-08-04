const api_login='https://prod-185.westus.logic.azure.com:443/workflows/fd346bb90be744c5a6c6f19b942a317c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Zs5b1szTixLrw1ww1kNPfbyfY6K3idZIr8nHUBnWqXc';

const api_signin='https://prod-161.westus.logic.azure.com:443/workflows/348e843f6bb7489fa29e9cca782759a0/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1fgFks_-2xjNLpynDvM8NotCv3YmjoIzHaasYJsNH40';

const api_retriveUsername=''

    async function login(){
        showLoadingOverlay();

        let email= document.getElementById('email').value;
        let pwd= document.getElementById('pwd').value;

        var myHeaders=new Headers();
        myHeaders.append("Content-Type","application/json");

        var record=JSON.stringify({
            email:email,
            password:pwd
        });

        const options={
            method:'POST',
            headers:myHeaders,
            body:record,
            redirect:'follow'
        }

        const response=await fetch(api_login,options);
        var result=await response.json();

        
        hideLoadingOverlay();
        
        if(result.status===200){
            let username=result.payload[0].crdeb_username;
            window.location.href = `home.html?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`;
            // window.location.href = `../index.html?email=${encodeURIComponent(email)}`;
        }else{
            // add bootstrap warning
            alert("Incorrect email/password");
        }

    }

    function signin(){
        showLoadingOverlay();

        let username=document.getElementById('name2').value;
        let email= document.getElementById('em2').value;
        let pwd= document.getElementById('pwd2').value;

        var myHeaders=new Headers();
        myHeaders.append("Content-Type","application/json");

        var record=JSON.stringify({
            username:username,
            email:email,
            password:pwd,
        });

        const options={
            method:'POST',
            headers:myHeaders,
            body:record,
            redirect:'follow'
        }

        fetch(api_signin,options)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                hideLoadingOverlay();
                
                if (result.status === 200){
                    window.location.href = `home.html?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`;
                    
                }else if(result.status===500){
                    alert("User with the given username/email already exists");
                }
            })
            .catch((error) => console.log("Error: ", error));
    }

    // Loading screen
    function showLoadingOverlay() {
        let loadingOverlay = document.getElementById("loading-overlay");
        loadingOverlay.style.display = "block";
    }

    function hideLoadingOverlay() {
        let loadingOverlay = document.getElementById("loading-overlay");
        loadingOverlay.style.display = "none";
    }