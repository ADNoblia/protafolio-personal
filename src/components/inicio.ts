

export class Inicio {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement("section");
        this.element.id = "inicio";
        this.element.innerHTML = `
            <section class="inicio-section">
                <h1 class="name">Alan David Noblia Duarte</h1>
                <div class="title-background">
                    <h1 class="title-first">Portafolio</h1>
                    <h1 class="title">Personal</h1>
                </div>
                <div class="character-image">
                    <img src="./src/assets/img/yo.png" alt="Ilustración principal" />
                </div>
                <div class="subtitle">
                    <p>Frontend ✦ Backend ✦ 2025</p>
                </div>
            </section>
        `;
    }

    render(): HTMLElement {
        return this.element;
    }
}