const comandos = [
    "> Establishing secure connection...", "> Connection stabilized.", "> Access granted.", "> Verifying user credentials...", "> Credentials accepted." ,"> Initializing RetSec interface...", "> Decrypting archived files...", "> Scanning system integrity...", "> Loading classified database...", "> Synchronizing network protocols...", "> Accessing encrypted directories...", "> Bypassing security layers...", "> Fetching cyber threat archives...", "> Terminal initialized successfully.", "> Preparing environment...", "> Welcome to RetSec."]

const params = new URLSearchParams(window.location.search);
const pagina = params.get('pagina');
const terminal = document.getElementById('terminal');

let i = 0;

function mostrarComandos() {
    if (i < comandos.length) {

        terminal.innerHTML += comandos[i] + "<br>";

        i++;

        setTimeout(mostrarComandos, 300);

    } else {
        setTimeout(() => {

            window.location.href = pagina;
        }, 1000);
    }
}

mostrarComandos();