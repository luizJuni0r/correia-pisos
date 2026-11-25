export function iniciarInputSenha(container) {
    const input = container.querySelector("input");
    const botao = container.querySelector("button");
    const imagem = botao.querySelector("img");

    botao.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            imagem.src = "assets/icones/eye-off.svg";
            botao.setAttribute("aria-label", "Ocultar senha");
        } else {
            input.type = "password";
            imagem.src = "assets/icones/eye.svg";
            botao.setAttribute("aria-label", "Mostrar senha");
        }
    });
}