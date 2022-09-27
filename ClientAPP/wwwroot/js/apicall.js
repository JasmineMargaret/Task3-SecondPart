$(document).ready(
    function () {
        $('#submit').click(function () {


            $.ajax({
                url: 'https://localhost:44354/Users/authenticate',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    username: $('#Username').val(),
                    password: $('#Password').val()
                }),
                processData: false,
                success: function (data) {
                    console.log(data);
                    alert("Login Credential authenticated successfully")
                    alert(data.role);
                    if (data.role == "Manager") {
                        window.location.replace('/mgrview')
                    }
                    else {
                        window.location.replace('/wfmview')
                    }
                },
                error: function () {
                    alert("Login Credential Failed to authenticate")
                }
            });



        })

    }
)