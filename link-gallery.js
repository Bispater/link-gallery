document.addEventListener('DOMContentLoaded', function() {
    var fragment = window.location.hash.substr(1);
    
    if (fragment === 'categoria-cafeteria') {
        // Ajusta el index (en mi caso es 5)
        var cafeteriaButton = document.querySelector('.elementor-gallery-title[data-gallery-index="5"]');
        if (cafeteriaButton) {
            setTimeout(function() {
				var clickEvent = new Event('click', { bubbles: true });
				cafeteriaButton.dispatchEvent(clickEvent);
			}, 1000); 
        }
    }
	// Si deseas agregar más de 1 sólo copia el la sentencia if de arriba o descomenta la de abajo y cambia el Nº index.
    // if (fragment === 'tu-nombre-perzonalizado') {
    //     var nombrePersonal = document.querySelector('.elementor-gallery-title[data-gallery-index="5"]');
    //     if (nombrePersonal) {
    //         setTimeout(function() {
	// 			var clickEvent = new Event('click', { bubbles: true });
	// 			nombrePersonal.dispatchEvent(clickEvent);
	// 		}, 1000); 
    //     }
    // }
});
