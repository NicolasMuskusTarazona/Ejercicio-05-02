let invitados = new Set("")

invitados.add("Nicolas")
invitados.add("Danilo")
invitados.add("Carlos")
invitados.add("Diego")
console.log(invitados)
function agregarInvitados(nombre) {
    return invitados.add(nombre)
}
console.log(agregarInvitados("Daniel"))
