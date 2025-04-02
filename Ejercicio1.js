let invitados = new Set("")

invitados.add("Nicolas")
invitados.add("Danilo")
invitados.add("Carlos")
invitados.add("Diego")
function agregarInvitado(nombre) {
    return invitados.add(nombre)
}
agregarInvitado("Daniel")

function eliminarInvitado(nombre) {
    return invitados.delete(nombre)
}
eliminarInvitado("Nicolas")

function mostrarInvitados() {
    return console.log(invitados)
}
mostrarInvitados()
