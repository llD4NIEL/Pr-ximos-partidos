// ==============CARGAR ELEMENTOS DEL DOM================================================
const nombre_del_primer_equipo = document.getElementById('nombre_del_primer_equipo');
const nombre_del_segundo_equipo = document.getElementById('nombre_del_segundo_equipo');
const hora_txt = document.getElementById('hora_actual');
const hora = document.getElementById('hora');

// ======FUNCION PARA CARGAR DATOS DESDE JSON============================================


fetch('partidos.json').then(response => response.json()).then(data=>{
    data.sort((a,b)=> a.hora - b.hora);


//RELOJ===\
    let hora_actual = 0;
    setInterval(()=>{
        if (hora_actual < 23){
            hora_actual += 1;
        }else{
            hora_actual = 0;
        }
        hora_txt.innerHTML = hora_actual+":00";

    },
2000
);
//=======/


    let indice = 0;

    setInterval(
        ()=>{
            if (indice < data.length){


                if ( hora_actual >= data[indice]['hora'] ){
                    indice +=1
                }else{
                    nombre_del_primer_equipo.innerText = data[indice]['partido'][0];
                    nombre_del_segundo_equipo.innerText = data[indice]['partido'][1];
                    hora.innerText = data[indice]['hora'];
                }


            }else{
                indice = 0;
            }
            

          
        }
        ,1000)


});


// =======================RELOJ==========================================================






