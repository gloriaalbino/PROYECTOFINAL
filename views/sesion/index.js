document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        //console.log('formulario')

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validar el correo electrónico
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validar la contraseña
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        try {
            // Obtener todos los usuarios desde la base de datos
            console.log('front')
            const response = await axios.get('/api/users/lista-users');
            console.log(response.data.data)
         /*   if (!response.ok) {
                throw new Error('Error al obtener los datos de los usuarios');
            }
*/           const listadoArray = response.data.data
            // Buscar el usuario con el correo electrónico y contraseña proporcionados

            const usuario = listadoArray.some(user => user.email === email && user.password === password);
                console.log(usuario)
            if (!usuario) {
                // Verificar el rol del usuario
                if(listadoArray.some(user => user.email === email )){
                    const usuario = listadoArray.map(user =>{
                        if (user.rol === 'admin') {
                            window.location.href = '/admin/';  // Redirigir a la página de administración
                        }else {
                            window.location.href = '/dashboard/';  // Redirigir a la página del dashboard
                        }
                    })
                } 
            }else{
                alert("Invalid email or password.");  // Credenciales incorrectas
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        }

        form.reset();  // Limpiar el formulario
    });

    // Función para validar el correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});




