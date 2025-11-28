// --- DATOS DE PRODUCTOS (Base de Datos Simulada) ---
const productos = [
    // 1. Falda Rosa
    { 
        id: 1, 
        nombre: "Falda Rosa Volante", 
        precio: 15990, 
        img: "https://i.pinimg.com/736x/ba/61/16/ba611621404860c0df83ec11f705b13b.jpg", 
        tallas: [
            {t:'XS', s:2}, {t:'S', s:5}, {t:'M', s:8}, {t:'L', s:5}, 
            {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}
        ],
        colores: [
            { c: 'Rosa', hex: '#ffc0cb', s: 10 }, 
            { c: 'Blanco', hex: '#ffffff', s: 5 }, 
            { c: 'Negro', hex: '#000000', s: 8 }
        ]
    },
    // 2. Top Halter
    { 
        id: 2, 
        nombre: "Top Halter Coral", 
        precio: 19990, 
        img: "https://i.pinimg.com/1200x/b5/f4/fd/b5f4fdba9d721461f3b82a3067a7f25e.jpg", 
        tallas: [{t:'S', s:5}, {t:'M', s:0}, {t:'L', s:5}, {t:'XL', s:5}], 
        colores: [{ c: 'Coral', hex: '#ff7f50', s: 5 }, { c: 'Beige', hex: '#f5f5dc', s: 2 }, { c: 'Azul', hex: '#4682b4', s: 0 }] 
    },
    // 3. Jean Ancho
    { 
        id: 3, 
        nombre: "Jean Azul Ancho", 
        precio: 22990, 
        img: "https://i.pinimg.com/736x/b0/7f/65/b07f65dd0fa00c17e9e5d151016f18c7.jpg", 
        tallas: [{t:'38', s:2}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:4}, {t:'48', s:2}, {t:'50', s:2}, {t:'52', s:1}], 
        colores: [{ c: 'Denim', hex: '#5b8ea8', s: 10 }] 
    },
    // 4. Vestido Rosa
    { 
        id: 4, 
        nombre: "Vestido Rosa Verano", 
        precio: 21990, 
        img: "https://i.pinimg.com/736x/f3/fb/cd/f3fbcde48c800cff24e9dc668f430c4e.jpg", 
        tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:4}, {t:'4XL', s:2}], 
        colores: [{c:'Rosa', hex:'#ffb6c1', s:5}] 
    },
    // 5. Short Negro
    { 
        id: 5, 
        nombre: "Short Negro Encaje", 
        precio: 18990, 
        img: "https://i.pinimg.com/736x/c3/7f/56/c37f560112e2f19421ebd3a6639cdd66.jpg", 
        tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], 
        colores: [{c:'Negro', hex:'#000', s:5}] 
    },
    // 6. Enterito
    { id: 6, nombre: "Enterito Beige", precio: 25990, img: "https://i.pinimg.com/1200x/80/dd/02/80dd0242dca583fdca9e5486b2bead2e.jpg", tallas: [{t:'U (Plus)', s:10}], colores: [{c:'Beige', hex:'#f5f5dc', s:5}] },
    // 7. Top Deportivo
    { id: 7, nombre: "Top Negro Deportivo", precio: 14990, img: "https://i.pinimg.com/736x/bd/1f/e0/bd1fe0947e2aecdf31d2da3b1491c29b.jpg", tallas: [{t:'S', s:0}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [{c:'Negro', hex:'#000', s:5}] },
    // 8. Top Lazo
    { id: 8, nombre: "Top Negro con Lazo", precio: 12990, img: "https://i.pinimg.com/1200x/ad/18/83/ad1883237694f1ed92d1c7b7500cd8e4.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:3}, {t:'3XL', s:0}], colores: [{c:'Negro', hex:'#000', s:5}] },
    // 9. Blusa Satinada
    { id: 9, nombre: "Blusa Rosa Satinada", precio: 11990, img: "https://i.pinimg.com/1200x/4b/20/16/4b2016b931cb9e85ce78279af79f8222.jpg", tallas: [{t:'XS',s:2}, {t:'S',s:5}, {t:'M',s:5}, {t:'L',s:5}, {t:'XL',s:5}, {t:'XXL',s:4}, {t:'3XL',s:3}, {t:'4XL',s:2}], colores: [{c:'Rosa', hex:'#ffc0cb', s:5}] },
    // 10. Top Azul
    { id: 10, nombre: "Top Azul Serenity", precio: 8990, img: "https://i.pinimg.com/736x/e9/c0/90/e9c090faa3a80eb21118bb97fabf683d.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}], colores: [{c:'Azul', hex:'#aadde6', s:5}] },
    // 11. Conjunto Lino
    { id: 11, nombre: "Conjunto Lino Verde", precio: 14990, img: "https://i.pinimg.com/1200x/0f/a5/03/0fa5035381874ff55decdcf244d37fe0.jpg", tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [{c:'Verde', hex:'#98ff98', s:5}] },
    // 12. Top Marrón
    { id: 12, nombre: "Top Marrón Básico", precio: 4990, img: "https://i.pinimg.com/736x/65/5e/b1/655eb1d1b45d14652f8ffc83713da015.jpg", tallas: [{t:'XS', s:2}, {t:'S', s:5}, {t:'M', s:0}, {t:'L', s:0}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [{c:'Marrón', hex:'#8b4513', s:5}] },
    // 13. Falda Cuero
    { id: 13, nombre: "Falda Cuero Burdeo", precio: 19990, img: "https://i.pinimg.com/736x/9b/dc/52/9bdc5261ed92fe056adcca484113c1c5.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}], colores: [{c:'Burdeo', hex:'#800020', s:5}] },
    // 14. Falda Tachas
    { id: 14, nombre: "Falda Negra con Tachas", precio: 18990, img: "https://i.pinimg.com/1200x/7f/83/06/7f8306afd76b6565ef0608a602f496fd.jpg", tallas: [{t:'S', s:5}, {t:'M', s:0}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [{c:'Negro', hex:'#000', s:5}] },
    // 15. Falda Lila
    { id: 15, nombre: "Falda Lila Encaje", precio: 10990, img: "https://i.pinimg.com/1200x/57/06/db/5706db7f1b957b174f7683c3d246e90a.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}, {t:'3XL', s:2}], colores: [{c:'Lila', hex:'#c8a2c8', s:5}] },
    // 16. Falda Gris
    { id: 16, nombre: "Falda Gris con Hebillas", precio: 13990, img: "https://i.pinimg.com/736x/74/79/04/747904606ef24e86b8062467c3cca63f.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:2}, {t:'XXL', s:2}], colores: [{c:'Gris', hex:'#808080', s:5}] },
    // 17. Top Floral
    { id: 17, nombre: "Top Lila Floral con Moño", precio: 9990, img: "https://i.pinimg.com/1200x/ef/86/a6/ef86a601c7da6484ff67106794f9fb35.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [{c:'Lila', hex:'#e6e6fa', s:5}] },
    // 18. Top Cuero
    { id: 18, nombre: "Top Cuero Burdeo Asimétrico", precio: 9990, img: "https://i.pinimg.com/736x/46/f8/d7/46f8d723a2aa0387811aa1fafeb45b85.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [{c:'Burdeo', hex:'#800020', s:5}] },
    // 19. Top Asimétrico
    { id: 19, nombre: "Top Asimétrico Marrón", precio: 7990, img: "https://i.pinimg.com/736x/d0/83/28/d0832852f3227a8c685af591c2168308.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:2}, {t:'XXL', s:2}], colores: [{c:'Marrón', hex:'#a52a2a', s:5}] },
    // 20. Top Burdeo
    { id: 20, nombre: "Top Burdeo con Lazo", precio: 6990, img: "https://i.pinimg.com/736x/8c/02/b7/8c02b78a51d7ab7d6f6279cd8e530ac8.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [{c:'Burdeo', hex:'#800020', s:5}] },
    // 21. Jeans Cargo
    { id: 21, nombre: "Jeans Cargo Gris Desgastado", precio: 24990, img: "https://i.pinimg.com/736x/a6/2f/40/a62f40c9a7fbc0b3f1764cdd5ddb78be.jpg", tallas: [{t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:3}, {t:'50', s:2}], colores: [{c:'Gris', hex:'#696969', s:5}] },
    // 22. Set Cuadrillé
    { id: 22, nombre: "Set Top + Falda Cuadrillé Café", precio: 24990, img: "https://i.pinimg.com/736x/57/c0/25/57c025cc470140457b354fe5843c0fdf.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}, {t:'3XL', s:2}], colores: [{c:'Café', hex:'#8b4513', s:5}] },
    // 23. Vestido Gris
    { id: 23, nombre: "Vestido Gris con Pliegues", precio: 19990, img: "https://i.pinimg.com/736x/f3/65/c9/f365c9cdd7e080aa241569f5b162c5c1.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}, {t:'4XL', s:2}], colores: [{c:'Gris', hex:'#a9a9a9', s:5}] },
    // 24. Vestido Negro
    { id: 24, nombre: "Vestido Negro con Mangas Cuadrillé", precio: 21990, img: "https://i.pinimg.com/736x/91/05/ea/9105ea9470d199e38f94b5010b24db73.jpg", tallas: [{t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}], colores: [{c:'Negro', hex:'#000', s:5}] },
    // 25 - 28. Jeans Curvy
    { id: 25, nombre: "Jeans Celeste Estrellas Desgastadas", precio: 23990, img: "https://i.pinimg.com/736x/87/49/18/8749181b262179b4d6d248032a290220.jpg", tallas: [{t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:5}, {t:'50', s:3}, {t:'52', s:2}], colores: [{c:'Celeste', hex:'#87ceeb', s:5}] },
    { id: 26, nombre: "Jeans Celeste Ultra Rasgados", precio: 21990, img: "https://i.pinimg.com/1200x/6e/86/07/6e8607cf7487c637df93b253bf976f33.jpg", tallas: [{t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:5}, {t:'50', s:3}], colores: [{c:'Celeste', hex:'#87ceeb', s:5}] },
    { id: 27, nombre: "Jeans Azul Rasgados", precio: 19990, img: "https://i.pinimg.com/736x/97/12/9e/97129e7f36a0e0869ee279f296ab09ec.jpg", tallas: [{t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:5}, {t:'50', s:2}, {t:'52', s:2}, {t:'54', s:1}], colores: [{c:'Azul', hex:'#1e90ff', s:5}] },
    { id: 28, nombre: "Pantalón Cargo Camuflado", precio: 22490, img: "https://i.pinimg.com/736x/0f/59/1b/0f591b7ffa17a0bb83e301d2272e892d.jpg", tallas: [{t:'36', s:2}, {t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:2}], colores: [{c:'Verde', hex:'#556b2f', s:5}] },
    // 29 - 36. Shorts
    { id: 29, nombre: "Shorts Denim Estrella", precio: 12990, img: "https://i.pinimg.com/736x/0c/82/ea/0c82eab4140317bddc45a3121aff671e.jpg", tallas: [{t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}], colores: [{c:'Azul', hex:'#4682b4', s:5}] },
    { id: 30, nombre: "Short Cuadrillé Fruncido", precio: 9990, img: "https://i.pinimg.com/736x/56/bd/a0/56bda041c59b11277f0eb56601ca8f2b.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:3}], colores: [{c:'Rojo', hex:'#b22222', s:5}] },
    { id: 31, nombre: "Shorts Denim Araña", precio: 12990, img: "https://i.pinimg.com/1200x/1d/df/ca/1ddfcaf59dfdda67d5dc4763f138beb8.jpg", tallas: [{t:'36', s:5}, {t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}], colores: [{c:'Negro', hex:'#2f4f4f', s:5}] },
    { id: 32, nombre: "Set Top + Short Celeste Rayado", precio: 11990, img: "https://i.pinimg.com/1200x/8f/14/ba/8f14baa94119318bf3a23be0e8f02e44.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}], colores: [{c:'Celeste', hex:'#b0e0e6', s:5}] },
    { id: 33, nombre: "Short Rosado Rayado", precio: 10990, img: "https://i.pinimg.com/1200x/8f/21/65/8f21658f6dccbff6ffff849e56a5e647.jpg", tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}], colores: [{c:'Rosa', hex:'#ffb6c1', s:5}] },
    { id: 34, nombre: "Short Denim Margarita", precio: 12990, img: "https://i.pinimg.com/736x/e2/35/da/e235da80c1856d3bcec997c2810e9f08.jpg", tallas: [{t:'36', s:5}, {t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}], colores: [{c:'Azul', hex:'#87ceeb', s:5}] },
    { id: 35, nombre: "Short Blanco Texturado con Cinturón", precio: 14990, img: "https://i.pinimg.com/1200x/af/c7/4e/afc74e863c2f90b9eec861c615e42b5c.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}], colores: [{c:'Blanco', hex:'#fff', s:5}] },
    { id: 36, nombre: "Short Blanco Floral con Encaje", precio: 12990, img: "https://i.pinimg.com/1200x/17/e2/7a/17e27a421887e09f8878167199845fc3.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}], colores: [{c:'Blanco', hex:'#f8f8ff', s:5}] },
    
    // 37 - 44. Enteritos (Full Range Curvy)
    { id: 37, nombre: "Enterito Denim Estrella", precio: 15990, img: "https://i.pinimg.com/1200x/36/80/ad/3680ad2a10eda99411cc62eb70d5bb94.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:4}], colores: [{c:'Azul', hex:'#4169e1', s:5}] },
    { id: 38, nombre: "Enterito Beige Floral ", precio: 13990, img: "https://i.pinimg.com/1200x/a3/3f/19/a33f19f4f81b699e704e529f5f25fe48.jpg", tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}], colores: [{c:'Beige', hex:'#f5f5dc', s:5}] },
    { id: 39, nombre: "Enterito Beige Corazones ", precio: 14990, img: "https://i.pinimg.com/1200x/4b/a1/7e/4ba17e104edcc39f341c3cc0601396e2.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [{c:'Beige', hex:'#f5f5dc', s:5}] },
    { id: 40, nombre: "Enterito Beige Floral", precio: 17990, img: "https://i.pinimg.com/1200x/42/93/a7/4293a73cb4dc47e285da0fb42f578c49.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}], colores: [{c:'Beige', hex:'#f5f5dc', s:5}] },
    { id: 41, nombre: "Enterito Negro con Detalles Blancos", precio: 16990, img: "https://i.pinimg.com/1200x/c6/b8/f0/c6b8f0327ec83648c5d2c49d56edc92a.jpg", tallas: [{t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [{c:'Negro', hex:'#000', s:5}] },
    { id: 42, nombre: "Enterito Gris con Lazos", precio: 17490, img: "https://i.pinimg.com/1200x/da/88/7d/da887dd1ca0dcaf3f4cb72f4c0cb7407.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}], colores: [{c:'Gris', hex:'#708090', s:5}] },
    { id: 43, nombre: "Enterito Beige con Tirantes Café", precio: 14490, img: "https://i.pinimg.com/1200x/b4/7b/03/b47b0342fa2c7c9332e9976ac2f06387.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:3}], colores: [{c:'Beige', hex:'#f5f5dc', s:5}] },
    
    // ESCENARIO 4 (HU-02 y HU-03): Sin tallas ni colores (Error)
    { id: 44, nombre: "Enterito Blanco con Cinturón", precio: 15990, img: "https://i.pinimg.com/1200x/56/50/f5/5650f55d0d7a3df6391d237a64a7b8f7.jpg", tallas: [], colores: [] },
    
    // ESCENARIO ERROR (HU-01): Imagen Rota
    { id: 45, nombre: "Top Básico Blanco", precio: 9990, img: "imagen_que_no_existe.jpg", tallas: [{t:'S', s:5}], colores: [{c:'Blanco', hex:'#fff', s:5}] } 
];

// --- GESTIÓN GLOBAL DEL CARRITO (LOCALSTORAGE) ---
let carrito = JSON.parse(localStorage.getItem('urbanoCarrito')) || [];

const guardarCarrito = () => {
    localStorage.setItem('urbanoCarrito', JSON.stringify(carrito));
    actualizarBadge();
};

const actualizarBadge = () => {
    const badge = document.getElementById('badgeCarrito');
    if(badge) {
        const totalItems = carrito.reduce((acc, item) => acc + item.cant, 0);
        badge.innerText = totalItems;
        badge.classList.add('bounce');
        setTimeout(() => badge.classList.remove('bounce'), 300);
    }
};

const formatoMoneda = (valor) => '$' + valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const imagenPorDefecto = "https://placehold.co/600x800/pink/white?text=Sin+Imagen";

// --- MEMORIA PARA RECORDAR SELECCIÓN PREVIA (HU-04 Escenario 4) ---
const memoriaSeleccion = {}; 

document.addEventListener("DOMContentLoaded", () => {
    actualizarBadge();

    // LÓGICA EXCLUSIVA DE CARRO.HTML
    const tablaBody = document.getElementById('tablaCarritoBody');
    if (tablaBody) {
        renderizarPaginaCarrito();
        return;
    }

    // LÓGICA DE CATALOGO.HTML
    const contenedor = document.getElementById('contenedorProductos');
    const inputBuscador = document.getElementById('inputBuscador');
    if (contenedor) {
        mostrarCatalogo(productos);
        if (inputBuscador) {
            inputBuscador.addEventListener('input', (e) => {
                const termino = e.target.value.toLowerCase();
                const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(termino));
                mostrarCatalogo(filtrados);
            });
        }
    }

    // LÓGICA DE INDEX.HTML (MÁS VENDIDOS)
    const contenedorMasVendidos = document.getElementById('contenedorMasVendidos');
    if (contenedorMasVendidos) {
        const idsMasVendidos = [2, 15, 1, 17];
        const listaMasVendidos = productos.filter(p => idsMasVendidos.includes(p.id));
        contenedorMasVendidos.innerHTML = "";
        listaMasVendidos.forEach(p => {
            contenedorMasVendidos.innerHTML += `
                <div class="col-md-3 col-6 mb-4">
                    <div class="card-producto" onclick="abrirDetalle(${p.id})">
                        <div class="img-contenedor">
                            <img src="${p.img}" onerror="this.src='${imagenPorDefecto}'">
                        </div>
                        <div class="info-producto">
                            <h5 class="text-truncate">${p.nombre}</h5>
                            <p class="precio">${formatoMoneda(p.precio)}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
});

// --- FUNCIONES DEL MODAL Y COMPRA ---
let modalProducto;
let toast;

if(document.getElementById('modalProducto')){
    modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));
}
if(document.getElementById('liveToast')){
    toast = new bootstrap.Toast(document.getElementById('liveToast'));
}

const mostrarToast = (mensaje, tipo) => {
    const toastBody = document.getElementById('mensajeToast');
    const toastElem = document.getElementById('liveToast');
    if(!toastElem) return;

    toastBody.innerText = mensaje;
    toastElem.classList.remove('bg-success', 'bg-danger', 'bg-warning');
    
    if(tipo === 'success') toastElem.classList.add('bg-success');
    else if(tipo === 'error') toastElem.classList.add('bg-danger');
    else toastElem.classList.add('bg-warning');

    toast.show();
};

window.abrirDetalle = (idProducto) => {
    const prod = productos.find(p => p.id === idProducto);
    if (!prod) return;

    let maxStockActual = 0;
    let colorSeleccionado = null;
    let tallaSeleccionada = null;

    const inputCant = document.getElementById('inputCantidad');
    const msgStock = document.getElementById('mensajeStock');
    const btnAgregar = document.getElementById('btnAgregarCarrito');
    
    // ✅ CORRECCIÓN HU-04 Escenario 4: Recuperar cantidad previa
    const cantidadPrevia = memoriaSeleccion[idProducto] || 1;
    inputCant.value = cantidadPrevia;
    
    // Estado inicial
    inputCant.disabled = true;
    document.getElementById('btnRestar').disabled = true;
    document.getElementById('btnSumar').disabled = true;
    btnAgregar.disabled = false;

    document.getElementById('modalTitulo').innerText = prod.nombre;
    document.getElementById('modalPrecio').innerText = formatoMoneda(prod.precio);
    const imgEl = document.getElementById('modalImg');
    imgEl.src = prod.img;
    imgEl.onerror = () => { imgEl.src = imagenPorDefecto; };

    // Render Colores
    const divColores = document.getElementById('contenedorColores');
    divColores.innerHTML = "";
    if(!prod.colores || prod.colores.length === 0) divColores.innerHTML = `<span class="aviso-error">⚠️ Colores no disponibles</span>`;
    else {
        prod.colores.forEach(c => {
            const btn = document.createElement('div');
            btn.className = c.s > 0 ? 'btn-color' : 'btn-color sin-stock';
            btn.style.backgroundColor = c.hex;
            btn.title = c.c;
            if(c.s > 0) {
                btn.onclick = () => {
                    document.querySelectorAll('.btn-color').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    colorSeleccionado = c.c;
                    chequearSeleccion();
                };
            }
            divColores.appendChild(btn);
        });
    }

    // Render Tallas
    const divTallas = document.getElementById('contenedorTallas');
    divTallas.innerHTML = "";
    if(!prod.tallas || prod.tallas.length === 0) divTallas.innerHTML = `<span class="aviso-error">⚠️ Tallas no disponibles</span>`;
    else {
        prod.tallas.forEach(t => {
            const btn = document.createElement('button');
            btn.innerText = t.t;
            btn.className = t.s > 0 ? 'btn-talla' : 'btn-talla sin-stock';
            if(t.s > 0) {
                btn.onclick = () => {
                    document.querySelectorAll('.btn-talla').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    tallaSeleccionada = t.t;
                    maxStockActual = t.s;
                    chequearSeleccion();
                };
            }
            divTallas.appendChild(btn);
        });
    }

    const chequearSeleccion = () => {
        if(colorSeleccionado && tallaSeleccionada) {
            inputCant.disabled = false;
            document.getElementById('btnRestar').disabled = false;
            document.getElementById('btnSumar').disabled = false;
            msgStock.innerText = `Stock disponible: ${maxStockActual}`;
            msgStock.className = "d-block mb-3 text-success fw-bold";
            if(parseInt(inputCant.value) > maxStockActual) inputCant.value = 1;
        }
    };

    // Listeners
    const btnRestar = document.getElementById('btnRestar');
    const btnSumar = document.getElementById('btnSumar');
    const btnAgregarModal = document.getElementById('btnAgregarCarrito');
    
    // Clonar para limpiar eventos
    const nRestar = btnRestar.cloneNode(true);
    const nSumar = btnSumar.cloneNode(true);
    const nAgregar = btnAgregarModal.cloneNode(true);
    const nInput = inputCant.cloneNode(true); // Clonar input para limpiar eventos
    
    btnRestar.parentNode.replaceChild(nRestar, btnRestar);
    btnSumar.parentNode.replaceChild(nSumar, btnSumar);
    btnAgregarModal.parentNode.replaceChild(nAgregar, btnAgregarModal);
    inputCant.parentNode.replaceChild(nInput, inputCant);

    // ✅ CORRECCIÓN HU-04 Escenario 3: Validación manual del input
    nInput.addEventListener('input', () => {
        let val = parseInt(nInput.value);
        if (isNaN(val) || val < 1) {
            msgStock.innerText = "Ingrese una cantidad válida";
            msgStock.className = "d-block mb-3 text-danger fw-bold";
            nAgregar.disabled = true;
        } else if (val > maxStockActual) {
            msgStock.innerText = "Cantidad excede el stock disponible";
            msgStock.className = "d-block mb-3 text-danger fw-bold";
            nAgregar.disabled = true;
        } else {
            msgStock.innerText = `Stock disponible: ${maxStockActual}`;
            msgStock.className = "d-block mb-3 text-success fw-bold";
            nAgregar.disabled = false;
            memoriaSeleccion[idProducto] = val; // Guardar en memoria
        }
    });

    nRestar.onclick = () => {
        let v = parseInt(nInput.value);
        if(v > 1) {
            nInput.value = v - 1;
            memoriaSeleccion[idProducto] = v - 1; // Actualizar memoria
        }
    };

    nSumar.onclick = () => {
        let v = parseInt(nInput.value);
        if(v < maxStockActual) {
            nInput.value = v + 1;
            memoriaSeleccion[idProducto] = v + 1; // Actualizar memoria
        } else {
            mostrarToast("Has alcanzado el límite de stock", "warning");
        }
    };

    nAgregar.onclick = () => {
        if(!colorSeleccionado || !tallaSeleccionada) {
            mostrarToast("Debe seleccionar talla y color antes de continuar", "warning");
            return;
        }
        
        const cant = parseInt(nInput.value);
        if (isNaN(cant) || cant < 1) { // Doble check
            mostrarToast("Ingrese una cantidad válida", "error");
            return;
        }

        // ✅ CORRECCIÓN HU-05 Escenario 4: Simulación Error BD (15% probabilidad)
        if (Math.random() < 0.15) {
            mostrarToast("No se pudo agregar el producto, intente nuevamente", "error");
            return;
        }
        
        const existe = carrito.find(x => x.id === prod.id && x.talla === tallaSeleccionada && x.color === colorSeleccionado);
        if(existe) {
            if(existe.cant + cant <= maxStockActual) {
                existe.cant += cant;
                mostrarToast("Cantidad actualizada en el carrito", "success");
            } else {
                mostrarToast("No hay suficiente stock para agregar más", "error");
                return;
            }
        } else {
            carrito.push({
                id: prod.id,
                nombre: prod.nombre,
                precio: prod.precio,
                img: prod.img,
                talla: tallaSeleccionada,
                color: colorSeleccionado,
                cant: cant,
                maxStock: maxStockActual 
            });
            mostrarToast("Producto agregado correctamente", "success");
        }

        // ✅ CORRECCIÓN HU-02 Escenario 4: Actualización dinámica de stock (frontend)
        const tallaParaRestar = prod.tallas.find(t => t.t === tallaSeleccionada);
        if (tallaParaRestar) {
            tallaParaRestar.s -= cant; // Restar stock real del array
        }
        
        guardarCarrito();
        modalProducto.hide();
    };

    modalProducto.show();
};

function mostrarCatalogo(lista) {
    const cont = document.getElementById('contenedorProductos');
    const msg = document.getElementById('mensajeSinResultados');
    if(!cont) return;

    cont.innerHTML = "";
    if(lista.length === 0) {
        cont.classList.add('d-none');
        msg.classList.remove('d-none');
    } else {
        cont.classList.remove('d-none');
        msg.classList.add('d-none');
        lista.forEach(p => {
            cont.innerHTML += `
                <div class="col-md-3 col-6 mb-4">
                    <div class="card-producto" onclick="abrirDetalle(${p.id})">
                        <div class="img-contenedor">
                            <img src="${p.img}" onerror="this.src='${imagenPorDefecto}'">
                        </div>
                        <div class="info-producto">
                            <h5 class="text-truncate">${p.nombre}</h5>
                            <p class="precio">${formatoMoneda(p.precio)}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// --- RENDER PAGINA CARRITO ---
function renderizarPaginaCarrito() {
    const tbody = document.getElementById('tablaCarritoBody');
    const seccion = document.getElementById('seccionCarrito');
    const vacio = document.getElementById('mensajeCarritoVacio');
    const totalTexto = document.getElementById('textoTotal');

    tbody.innerHTML = "";

    if (carrito.length === 0) {
        seccion.classList.add('d-none');
        vacio.classList.remove('d-none');
        return;
    }

    seccion.classList.remove('d-none');
    vacio.classList.add('d-none');

    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cant;
        total += subtotal;

        tbody.innerHTML += `
            <tr>
                <td style="width: 100px;">
                    <img src="${item.img}" class="img-fluid rounded" onerror="this.src='${imagenPorDefecto}'">
                </td>
                <td>
                    <h6 class="mb-0">${item.nombre}</h6>
                    <small class="text-muted">Talla: ${item.talla} | Color: ${item.color}</small>
                </td>
                <td class="text-center">
                    <span class="badge bg-light text-dark border">${item.cant}</span>
                </td>
                <td class="text-end">${formatoMoneda(item.precio)}</td>
                <td class="text-end fw-bold">${formatoMoneda(subtotal)}</td>
                <td class="text-end">
                    <button class="btn btn-sm text-danger" onclick="eliminarDelCarrito(${index})">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </td>
            </tr>
        `;
    });

    totalTexto.innerText = formatoMoneda(total);
}

window.eliminarDelCarrito = (index) => {
    if(confirm('¿Seguro que deseas eliminar este producto?')) {
        carrito.splice(index, 1);
        guardarCarrito();
        renderizarPaginaCarrito();
    }
};