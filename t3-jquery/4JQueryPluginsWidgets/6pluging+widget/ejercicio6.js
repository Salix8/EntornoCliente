$(document).ready(function(){

    $.fn.togglepanels = function() {
        return this.each(function() {
          $(this).addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
            .find("h3")
            .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
            .hover(function() {
              $(this).toggleClass("ui-state-hover");
            })
            .prepend('<span class="ui-icon ui-icon-triangle-1-e"></span>')
            .click(function() {
              $(this)
                .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
                .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end()
                .next().slideToggle();
              return false;
            })
            .next()
            .addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom")
            .hide();
        });
    };

    $.fn.generaNuevosCampos = function(etiqueta, nombreCampo, indice) {
  
      return $(this).each(function(){
        elem = $(this);
        elem.data(`etiqueta`, etiqueta);
        elem.data(`nombreCampo`, nombreCampo);
        elem.data(`indice`, indice);
        
        elem.click(function(e){
          e.preventDefault();
          elem = $(this);
          etiqueta = elem.data(`etiqueta`);
          nombreCampo = elem.data(`nombreCampo`);
          indice = elem.data(`indice`);
          textoInsertar = `
            <div id="accordion">
                <h3>${etiqueta} 1</h3>
                <div>
                    <p>Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
                </div>
                    <h3>${etiqueta} 2</h3>
                <div>
                    <p>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna. </p>
                </div>
                <h3>${etiqueta} 3</h3>
                <div>
                    <p>Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui. </p>
                    <ul>
                        <li>List item one</li>
                        <li>List item two</li>
                        <li>List item three</li>
                    </ul>
                </div>
                    <h3>${etiqueta} 4</h3>
                <div>
                    <p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est. </p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                </div>
            </div>
          `;
  
          indice ++;
          elem.data(`indice`, indice);
          nuevoCampo = $(textoInsertar);
          elem.before(nuevoCampo);

          $("#accordion").togglepanels();
        });
      });
  
    };
  
    $("#mascampos").generaNuevosCampos("Rasgo", "rasgo", 1);

    
        
        
});
  
  
  