export class Contacto {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement("section");
        this.element.id = "contacto";
        this.element.innerHTML = `
            <h1>Bienvenido a mi Portafolio</h1>
            <p>Esta es la sección de inicio.</p>
        `;
    }


    render(): HTMLElement {
        return this.element;
    }
}