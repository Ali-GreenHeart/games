
// <form id="form1" action="/cgi-bin/CGIcpp2.cgi" method="post">
// <label for="input-number1">Your input:</label>
// <input id="iput-number1" type="text" name="number1">
// <br>
// <!-- <button id="submit-button" type="submit">Submit</button> -->
// </form>
// <pre id="response1"></pre>
// <script>
// var form = document.getElementById("form1");
// var response = document.getElementById("response1");
// form.addEventListener("submit", function(event) {
//     // Prevent the default form submission
//     event.preventDefault();
//     // Send the form data using AJAX
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         // Display the response in the <pre> element
//         response.textContent = xhr.responseText;
//     }
//     };
//     xhr.open(form.method, form.action, true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send(new FormData(form));
// });
// </script>

function gameinterface(gamesave,responseid){

    let response = document.getElementById(responseid);



};

function sendp(formid,responseid,flag = true){

    let form = document.getElementById(formid);
    let xhr = new XMLHttpRequest();

    form.addEventListener("click", function(event) {
    // Prevent the default form submission
        event.preventDefault();
    });
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Display the response in the <pre> element
            if(flag){
                gameinterface(xhr.responseText,responseid);
            }else{
                document.getElementById(responseid).textContent = xhr.responseText;
            }
        }
    };
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(new FormData(form));
};
