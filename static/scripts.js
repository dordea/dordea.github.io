$('.modal').modal({ keyboard: false,
			   backdrop: 'static',
                           show: true
        });
        // Jquery draggable
        $('.modal-dialog').draggable({
            handle: ".modal-header"
        });
        $('.modal-dialog').draggable({
            handle: ".modal-header"
        });
    $(document).ready(function(){
        var text1 = '> load profile -firstName "Pavel" -lastName "Dordea"';
        var text2 = "> loading.....";
        var i1 = 0; // Variabila pentru text1
        var i2 = 0; // Variabila pentru text2
        var speed = 100; // Viteza de scriere (milisecunde)
        function typeWriter1() {
            if (i1 < text1.length) {
                document.getElementById("typingText1").innerHTML += text1.charAt(i1);
                i1++;
                setTimeout(typeWriter1, speed);
            }else {
                // Apelăm typeWriter2 doar după ce typeWriter1 s-a terminat complet
                //setTimeout(typeWriter2, text1.length * speed);
                typeWriter2();
            }
        }
        function typeWriter2() {
            if (i2 < text2.length) {
                document.getElementById("typingText2").innerHTML += text2.charAt(i2);
                i2++;
                setTimeout(typeWriter2, speed);
            }else{
                setTimeout(function() {
                    $('#welcomeModal').css('display', 'none');
                    $('.loaded').css('visibility', 'visible');
                }, 1000);
                
            }
        }
      // $('#welcomeModal').modal('show').on('shown.bs.modal', function () {
        //    $(this).find('.modal-dialog').draggable({ containment: "window", scroll: false });
       // });
        typeWriter1();
        //setTimeout(typeWriter2, text1.length * speed);// Apelăm typeWriter2 după ce typeWriter1 se termină
        
    });

    $(document).ready(function() {
        // Ascultă evenimentul de clic pe elementele .card
        $('.card').on('click', function() {
            // Obține z-index-ul maxim dintre toate elementele cu clasa .card
            var maxZIndex = 0;
            $('.card').each(function() {
                var zIndex = parseInt($(this).css('z-index'));
                maxZIndex = Math.max(maxZIndex, zIndex);
            });
    
            // Incrementăm z-index-ul maxim cu 1 și aplicăm acest z-index elementului curent
            $(this).css('z-index', maxZIndex + 1);
    
            // Setăm z-index-ul elementelor .card din afară la o valoare mai mică
            $('.card').not(this).css('z-index', 100);
        });
    });
    
    $(document).ready(function() {
        // Ascultă evenimentul de tragere pe elementele .card
        $('.card').draggable({
            start: function() {
                // Când începe tragearea, schimbăm z-index-ul elementului
                var maxZIndex = 0;
                $('.card').each(function() {
                    var zIndex = parseInt($(this).css('z-index'));
                    maxZIndex = Math.max(maxZIndex, zIndex);
                });
    
                // Incrementăm z-index-ul maxim cu 1 și aplicăm acest z-index elementului curent
                $(this).css('z-index', maxZIndex + 1);
    
                // Setăm z-index-ul elementelor .card din afară la o valoare mai mică
                $('.card').not(this).css('z-index', 100);
            }
        });
    });
    