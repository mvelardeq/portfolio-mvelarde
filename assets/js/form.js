const $form = document.getElementById('form-contact')

$form.addEventListener('submit',async(e)=>{

    e.preventDefault()
    const form = new FormData($form)

    const res = await fetch($form.action,{
        method: $form.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })

    if(res.ok) {
        $form.reset()
        Toastify({
          text: "Thanks to contact me, I will reply to you soon!",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "green",
            text:"white"
          },
          onClick: function () {}, // Callback after click
        }).showToast();
    }
    
})