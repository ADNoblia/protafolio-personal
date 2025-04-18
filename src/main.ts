import { Inicio } from "./components/inicio";
import { SobreMi } from "./components/sobre-mi";
import { Proyecto } from "./components/proyecto";
import { Contacto } from "./components/contacto";

// Definimos un tipo para las secciones disponibles
type AppSection = "inicio" | "sobre-mi" | "proyectos" | "contacto";

class App {
    private currentSection: AppSection = "inicio";
    private sections: Record<AppSection, { component: any, title: string }>;
    private appContainer: HTMLElement | null;
    private sidebar: HTMLElement | null;

    constructor() {
        // Mapeo de secciones con sus componentes y títulos
        this.sections = {
            "inicio": { component: Inicio, title: "Inicio" },
            "sobre-mi": { component: SobreMi, title: "Sobre Mí" },
            "proyectos": { component: Proyecto, title: "Proyecto" },
            "contacto": { component: Contacto, title: "Contacto" }
        };

        this.appContainer = document.getElementById("app-content");
        this.sidebar = document.getElementById("sidebar");

        this.initApp();
    }

    private initApp(): void {
        if (!this.appContainer) {
            console.error("No se encontró el contenedor de la app");
            return;
        }

        this.loadInitialSection();
        this.setupEventListeners();
    }

    private loadInitialSection(): void {
        // Carga la sección basada en el hash de la URL
        const hash = window.location.hash.substring(1) as AppSection;
        if (hash && this.sections[hash]) {
            this.currentSection = hash;
        }
        this.loadSection(this.currentSection);
    }

    private loadSection(section: AppSection): void {
        if (!this.appContainer) return;

        // Limpia el contenedor
        this.appContainer.innerHTML = "";

        // Verifica si la sección existe
        if (this.sections[section]) {
            const SectionComponent = this.sections[section].component;
            this.appContainer.appendChild(new SectionComponent().render());
            
            // Actualiza el título de la página
            document.title = `${this.sections[section].title} - ADNoblia`;
            
            // Actualiza la URL sin recargar la página
            window.history.pushState({ section }, "", `#${section}`);
        } else {
            this.appContainer.innerHTML = `<h1>Sección no encontrada</h1>`;
        }

        // Actualiza el enlace activo en la navegación
        this.updateActiveNavLink(section);
    }

    private updateActiveNavLink(section: AppSection): void {
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            const linkSection = link.getAttribute("href")?.substring(1) as AppSection;
            if (linkSection === section) {
                link.classList.add("active");
                // También agregamos active al elemento li padre para mayor control
                link.closest("li")?.classList.add("active");
            } else {
                link.classList.remove("active");
                link.closest("li")?.classList.remove("active");
            }
        });
    }

    private setupEventListeners(): void {
        // Listener para los enlaces de navegación
        if (this.sidebar) {
            this.sidebar.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                const navLink = target.closest(".nav-link");
                
                if (navLink) {
                    e.preventDefault();
                    const section = navLink.getAttribute("href")?.substring(1) as AppSection;
                    if (section && section !== this.currentSection) {
                        this.currentSection = section;
                        this.loadSection(section);
                    }
                }
            });
        }

        // Manejar el botón de retroceso/avance del navegador
        window.addEventListener("popstate", (e) => {
            if (e.state?.section) {
                this.currentSection = e.state.section;
                this.loadSection(this.currentSection);
            }
        });
    }
}

// Inicia la app
new App();