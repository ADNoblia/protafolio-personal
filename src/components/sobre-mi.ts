export class SobreMi {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement("section");
        this.element.id = "sobre-mi";
        this.element.innerHTML = `
            <section class="about-section">
                <div class="about-container">
                    <!-- Columna de la foto -->
                    <div class="about-photo">
                        <img src="./src/assets/img/foto.png" alt="Mi foto" class="profile-img">
                    </div>
                    
                    <!-- Columna del contenido -->
                    <div class="about-content">
                        <h2 class="section-title">Sobre Mí</h2>
                        <div class="divider"></div>
                        
                        <p class="about-text">
                            Estudiante de Ingeniería en Informática con pasión por el desarrollo de software. 
                            Me especializo en crear soluciones web eficientes y escalables, combinando 
                            tecnologías frontend y backend.
                        </p>
                        
                        <h3 class="skills-title">Mis Habilidades</h3>
                        
                        <div class="skills-grid">
                            <!-- HTML5 -->
                            <div class="skill-card">
                                <div class="skill-icon html-icon">
                                    <i class="fab fa-html5"></i>
                                </div>
                                <span class="skill-name">HTML5</span>
                            </div>
                            
                            <!-- CSS3 -->
                            <div class="skill-card">
                                <div class="skill-icon css-icon">
                                    <i class="fab fa-css3-alt"></i>
                                </div>
                                <span class="skill-name">CSS3</span>
                            </div>
                            
                            <!-- JavaScript -->
                            <div class="skill-card">
                                <div class="skill-icon js-icon">
                                    <i class="fab fa-js-square"></i>
                                </div>
                                <span class="skill-name">JavaScript</span>
                            </div>
                            
                            <!-- TypeScript -->
                            <div class="skill-card">
                                <div class="skill-icon ts-icon">
                                    <i class="fas fa-code"></i>
                                </div>
                                <span class="skill-name">TypeScript</span>
                            </div>
                            
                            <!-- Java -->
                            <div class="skill-card">
                                <div class="skill-icon java-icon">
                                    <i class="fab fa-java"></i>
                                </div>
                                <span class="skill-name">Java</span>
                            </div>
                            
                            <!-- MySQL -->
                            <div class="skill-card">
                                <div class="skill-icon db-icon">
                                    <i class="fas fa-database"></i>
                                </div>
                                <span class="skill-name">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    render(): HTMLElement {
        return this.element;
    }
}