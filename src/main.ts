import { Inicio } from "./components/inicio";
import { SobreMi } from "./components/sobre-mi";
import { Proyecto } from "./components/proyecto";

class App {
    private currentSection: string = "inicio";

    constructor() {
        this.loadSection(this.currentSection);
        this.setupEventListeners();
    }

    private loadSection(section: string): void {
        const appContainer = document.getElementById("app-content");
        if (!appContainer) return;

        // Limpia el contenedor
        appContainer.innerHTML = "";

        // Carga la sección correspondiente
        switch (section) {
            case "inicio":
                appContainer.appendChild(new Inicio().render());
                break;
            case "sobre-mi":
                appContainer.appendChild(new SobreMi().render());
                break;
            case "proyecto":
                appContainer.appendChild(new Proyecto().render());
                break;
            default:
                appContainer.innerHTML = `<h1>Sección no encontrada</h1>`;
        }
    }

    private setupEventListeners(): void {
        document.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains("nav-btn")) {
                e.preventDefault();
                const section = target.getAttribute("data-section");
                if (section) {
                    this.currentSection = section;
                    this.loadSection(section);
                }
            }
        });
    }
}

// Inicia la app
new App();