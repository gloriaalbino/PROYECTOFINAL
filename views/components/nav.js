const navegation = document.querySelector('#navegacion')

const crearNavHome = ()=>{
    navegation.innerHTML =`
    <div class="max-w-7x1 h-16 mx-auto flex items-center px-4 justify-between>
        <nav class="bg-purple-700 text-white fixed top-0 w-full shadow-md z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <h1 class="text-lg font-semibold flex items-center space-x-2">
                        <span class="material-icons">home</span>
                        <span>Home</span>
                    </h1>
                    <div class="flex items-center space-x-6">
                        <a href="#home" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">home</span> Home
                        </a>
                        <a href="#registrarse" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">app_registration</span> Registrarse
                        </a>
                        <a href="#iniciar-sesion" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">login</span> Iniciar Sesión
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- pc -->
        <div class="hidden md:flex flex-row gap-4">
            <a href="/sesion/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
            <a href="/registro/" class="text-black bg-white font-bold hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-150 ease-in-out">Registro</a>
        </div>
    </div>
`
//aqui va el texto de HTML que esta dentro del nav que lo copiamos y lo pegamos aqui porque es mas sencillo
}

const crearNavSesion = ()=>{
    navegation.innerHTML =`
    <div class="max-w-7x1 h-16 mx-auto flex items-center px-4 justify-between>
        <nav class="bg-purple-700 text-white fixed top-0 w-full shadow-md z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <h1 class="text-lg font-semibold flex items-center space-x-2">
                        <span class="material-icons">home</span>
                        <span>Home</span>
                    </h1>
                    <div class="flex items-center space-x-6">
                        <a href="#home" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">home</span> Home
                        </a>
                        <a href="#registrarse" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">app_registration</span> Registrarse
                        </a>
                        <a href="#iniciar-sesion" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">Iniciar sesion</span> Iniciar Sesión
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- pc -->
        <div class="hidden md:flex flex-row gap-4">
            <a href="/sesion/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
            <a href="/registro/" class="text-black bg-white font-bold hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-150 ease-in-out">Registro</a>
        </div>
    </div>
`
//aqui va el texto de HTML que esta dentro del nav que lo copiamos y lo pegamos aqui porque es mas sencillo
}

const crearNavRegistro = ()=>{
    navegation.innerHTML =`
     <div class="max-w-7x1 h-16 mx-auto flex items-center px-4 justify-between>
        <nav class="bg-purple-700 text-white fixed top-0 w-full shadow-md z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <h1 class="text-lg font-semibold flex items-center space-x-2">
                        <span class="material-icons">home</span>
                        <span>Home</span>
                    </h1>
                    <div class="flex items-center space-x-6">
                        <a href="#home" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">home</span> Home
                        </a>
                        <a href="#registrarse" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">app_registration</span> Registrarse
                        </a>
                        <a href="#iniciar-sesion" class="text-sm hover:underline flex items-center">
                            <span class="material-icons mr-1">Iniciar sesion</span> Iniciar Sesión
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- pc -->
        <div class="hidden md:flex flex-row gap-4">
            <a href="/sesion/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">Login</a>
            <a href="/registro/" class="text-black bg-white font-bold hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-150 ease-in-out">Registro</a>
        </div>
    </div>
`
//aqui va el texto de HTML que esta dentro del nav que lo copiamos y lo pegamos aqui porque es mas sencillo
}

//con esto discrimino si estoy en una pagina u otra
//agrego la ruta para los componentes
if(window.location.pathname === '/'){
//crear la barra de navegacion para la pagina del home 
    crearNavHome();
}else if(window.location.pathname === '/sesion/'){
//Crear la pagina de navegacion de inicio de sesion
    crearNavSesion()
}else if(window.location.pathname === '/registro/'){
//Crear la pagina de navegacion de registro 
    crearNavRegistro()
}