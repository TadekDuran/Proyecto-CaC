let contacto = `
<div class="encabezado">
<h2 id="rrhh">RECURSOS HUMANOS</h2>     
</div>   
            
<div class="rrhh-container"><!--base blanca-->

    <div class="rrhh-container-inner"> 

        <div class="nosotros">   
            <div class="nosotros-inner">
                <h4 class="excluido">Trabajá con nosotros</h4>
                <!--Tiene clase "excluido hasta que unifiquemos los títulos"-->

                <p>Burger Queen es una empresa con más de 20 años de trayectoria. Nuestro compromiso es ofrecer las mejores hamburguesas caseras, preparadas con ingredientes frescos y de la más alta calidad. En Burger Queen, creemos en la autenticidad y el servicio excepcional.</p>
                
                <p> Nos dedicamos a crear experiencias deliciosas y memorables para nuestros clientes. Cada hamburguesa que servimos refleja nuestro amor por la buena cocina y nuestro compromiso con la satisfacción de quienes nos eligen. Valoramos la innovación y la creatividad en cada aspecto de nuestro trabajo, desde la selección de ingredientes hasta la presentación final de nuestros platos.</p>
                 
                <p>Si compartís nuestra pasión por la comida y te interesa formar parte de nuestro equipo, ¡te invitamos a postularte para integrar la familia BurgerQueen! Dejanos tus datos y vas a estar un paso más cerca de unirte a una empresa que valora la calidad, la excelencia y la dedicación en cada detalle.</p>
            </div>           
        </div>

        <div class="form">
        <form name="form" action="https://formspree.io/f/mwkgaboj" method="POST" target="_self" enctype="multipart/form-data" id="form">
        <!--Solucionar conflicto entre formspree y Netlify=> validar.js ln 39-->

            <fieldset>
                <legend>Datos Personales</legend>

                <label for="nombre">Nombre</label> <br>
                <input type="text" id="nombre" name="nombre"><br>

                <label for="apellido">Apellido</label> <br>
                <input type="text" id="apellido" name="apellido"><br>

                <label for="provincia">Provincia</label> <br>
                <select id="provincia" name="provincia">
                        <option value="" selected>Seleccioná tu lugar de residencia</option>
                        <option value="Buenos Aires " >Buenos Aires</option>
                        <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra</option>
                        <option value="Tucumán"></option>
                 </select>

            </fieldset>
            <!-- Contacto
            <fieldset>

                <legend>Contacto</legend>

                <label for="tel">Teléfono fijo</label> <br>
                <input type="number" id="tel" name="tel"><br>

                <label for="cel">Teléfono celular</label> <br>
                <input type="number" id="cel" name="cel"><br>

                <label for="email" requiered>E-mail</label> <br>
                <input type="email" id="email" name="email"><br>

            </fieldset>
            -->
            <fieldset>
                <legend>¿Manejás?</legend>
                    <div class="movilidad">                            
                        <input type="checkbox" name="movilidad" id="auto">Auto 
                        <input type="checkbox" name="movilidad" id="moto">Moto
                        <input type="checkbox" name="movilidad" id="bici">Bicicleta
                        <input type="checkbox" name="movilidad" id="none">Ninguno 
                    </div>
            </fieldset>

            <fieldset id="inner-cv">
                <legend>Dejanos tu CV</legend>   
                    <div class="cv">
                    <input type="file" name="cv" id="cv" accept="application/pdf">
                    </div>                     
                
            </fieldset>
             
            <fieldset>
                <legend>Contanos por qué querés trabajar con nosotros</legend>
              <textarea name="text_area" id="text-area" cols="30" rows="10" maxlength="1500"></textarea>  
            </fieldset>
            
        
            <button type="button" onclick="validar()">Enviar</button>
        </form>   

        </div>
    </div>
</div> 
`
document.querySelector("main").innerHTML=contacto
