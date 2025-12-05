// ==========================================
// 0. BASE DE DATOS SIMULADA (PRODUCTOS)
// ==========================================
const productos = [
    // 1. Falda Volante
    { 
        id: 1, 
        nombre: "Falda Volante", 
        precio: 10990, 
        img: "https://i.pinimg.com/736x/ba/61/16/ba611621404860c0df83ec11f705b13b.jpg", 
        tallas: [
            {t:'XS', s:2}, {t:'S', s:5}, {t:'M', s:8}, {t:'L', s:5}, 
            {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}
        ],
        colores: [
            { c: 'Rosa', hex: '#ffc0cb', s: 10, imgCambio: 'https://i.pinimg.com/736x/ba/61/16/ba611621404860c0df83ec11f705b13b.jpg' }, 
            { c: 'Blanco', hex: '#ffffff', s: 5, imgCambio: 'img/faldablanca.png' },
            { c: 'Negro', hex: '#000000', s: 8, imgCambio: 'img/faldanegra.png' },
            { c: 'Celeste', hex: '#63EEFD', s: 8, imgCambio: 'img/faldaceleste.png' }

        ]
    },
    // 2. Top Halter
    { 
        id: 2, 
        nombre: "Top Halter", 
        precio: 9990, 
        img: "https://i.pinimg.com/1200x/b5/f4/fd/b5f4fdba9d721461f3b82a3067a7f25e.jpg", 
        tallas: [{t:'S', s:7}, {t:'M', s:0}, {t:'L', s:9}, {t:'XL', s:4}], 
        colores: [
            { c: 'Coral', hex: '#ff7f50', s: 5 , imgCambio: 'https://i.pinimg.com/1200x/b5/f4/fd/b5f4fdba9d721461f3b82a3067a7f25e.jpg'},
            { c: 'Coral', hex: '#ff7f50', s: 1, imgCambio: 'img/top_durazno.png' },
            { c: 'Verde Musgo', hex: '#446F55', s: 4, imgCambio: 'img/top_verde.png' },
            { c: 'Azul', hex: '#2A5EBE', s: 3, imgCambio: 'img/top_azul.png' }

            
        ] 
    },
    // 3. Jean Ancho
    { 
        id: 3, 
        nombre: "Jean Ancho", 
        precio: 22990, 
        img: "https://i.pinimg.com/736x/b0/7f/65/b07f65dd0fa00c17e9e5d151016f18c7.jpg", 
        tallas: [{t:'38', s:2}, {t:'40', s:5}, {t:'42', s:0}, {t:'44', s:5}, {t:'46', s:4}, {t:'48', s:2}, {t:'50', s:0}, {t:'52', s:1}], 
        colores: [{ c: 'Denim', hex: '#5b8ea8', s: 10 }] 
    },
    // 4. Vestido Verano
    { 
        id: 4, 
        nombre: "Vestido Verano", 
        precio: 21990, 
        img: "https://i.pinimg.com/736x/f3/fb/cd/f3fbcde48c800cff24e9dc668f430c4e.jpg", 
        tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:4}, {t:'4XL', s:2}], 
        colores: [
            {c:'Rosa', hex:'#ffb6c1', s:5, imgCambio: 'https://i.pinimg.com/736x/f3/fb/cd/f3fbcde48c800cff24e9dc668f430c4e.jpg'},
            {c:'Celeste', hex:'#63EEFD', s:3, imgCambio: 'img/vestido_verano_celeste.png'},
            {c:'Verde', hex:'#AEBEAB', s:0, imgCambio: 'img/vestido_verano_verde.png'}
        ] 
    },
    // 5. Short Encaje
    { 
        id: 5, 
        nombre: "Short Encaje", 
        precio: 5990, 
        img: "https://i.pinimg.com/736x/c3/7f/56/c37f560112e2f19421ebd3a6639cdd66.jpg", 
        tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], 
        colores: [
            {c:'Negro', hex:'#000', s: 5 , imgCambio: 'https://i.pinimg.com/736x/c3/7f/56/c37f560112e2f19421ebd3a6639cdd66.jpg'},
            {c:'Coral', hex:'#ff7f50', s: 5 , imgCambio: 'img/short_coral.png'},
            {c:'Celeste', hex:'#63EEFD', s: 5 , imgCambio: 'img/short_celeste.png'},
            {c:'Blanco', hex:'#ffffffff', s: 5 , imgCambio: 'img/short_blanco.png'},
            {c:'Rosa Pastel', hex:'#FFE6F8', s: 5 , imgCambio: 'img/short_rosapastel.png'},
            {c:'Rosado Quemado', hex:'#C36A72', s: 5 , imgCambio: 'img/short_rosaoscuro.png'}
        ] 
    },
    // 6. Enterito Casual
    { id: 6, nombre: "Enterito Casual", precio: 25990, img: "https://i.pinimg.com/1200x/80/dd/02/80dd0242dca583fdca9e5486b2bead2e.jpg", tallas: [{t:'U', s:10}], colores: [
        {c:'Beige', hex:'#f5f5dc', s:5, imgCambio: 'https://i.pinimg.com/1200x/80/dd/02/80dd0242dca583fdca9e5486b2bead2e.jpg'},
        {c:'Café', hex:'#6F4E37', s: 5 , imgCambio: 'img/enterito_casual_cafe.png'},
        {c:'Celeste', hex:'#A7D8F0', s: 3 , imgCambio: 'img/enterito_casual_celeste.png'},
        {c:'Verde Salvia', hex:'#C7D7A2', s: 10 , imgCambio: 'img/enterito_casula_verdeoliva.png'},
        {c:'Mostaza', hex:'#C9A431', s: 0 , imgCambio: 'img/enterito_casual_mostaza.png'}
        

    ] },
    // 7. Top Deportivo
    { id: 7, nombre: "Top Deportivo", precio: 14990, img: "https://i.pinimg.com/736x/bd/1f/e0/bd1fe0947e2aecdf31d2da3b1491c29b.jpg", tallas: [{t:'S', s:0}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [
        {c:'Negro', hex:'#000', s:5, imgCambio: 'https://i.pinimg.com/736x/bd/1f/e0/bd1fe0947e2aecdf31d2da3b1491c29b.jpg'},
        {c:'Blanco ', hex:'#ffffff', s: 2 , imgCambio: 'img/top_deportivo_blanco.png'},
        {c:'Gris', hex:'#b8b8b8ff', s: 4 , imgCambio: 'img/top_deportivo_gris.png'},
        {c:'Verde Oliva', hex:'#586931ff', s: 0 , imgCambio: 'img/top_deportivo_verdeoliva.png'}
    ] },
    // 8. Top con Lazo
    { id: 8, nombre: "Top con Lazo", precio: 12990, img: "https://i.pinimg.com/1200x/ad/18/83/ad1883237694f1ed92d1c7b7500cd8e4.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:3}, {t:'3XL', s:0}], colores: [
        {c:'Negro', hex:'#000', s:5 , imgCambio: 'https://i.pinimg.com/1200x/ad/18/83/ad1883237694f1ed92d1c7b7500cd8e4.jpg'},
        {c:'Amarillo', hex:'#F6DB4A', s: 3 , imgCambio: 'img/top_con_lazo_amarilla.png'},
        {c:'Rosado', hex:'#C9A6A1', s: 9 , imgCambio: 'img/top_con_lazo_rosada.png'},
        {c:'Lila', hex:'#C9AEEF', s: 5 , imgCambio: 'img/top_con_lazo_lila.png'},
        {c:'Rosado Oscuro', hex:'#B79A92', s: 7 , imgCambio: 'img/top_con_lazo_rosado_oscuro.png'}
    ] },
    // 9. Top Serenity
    { id: 9, nombre: "Top Serenity", precio: 8990, img: "https://i.pinimg.com/736x/e9/c0/90/e9c090faa3a80eb21118bb97fabf683d.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}], colores: [
        {c:'Azul', hex:'#002575ff', s:5 , imgCambio: 'https://i.pinimg.com/736x/e9/c0/90/e9c090faa3a80eb21118bb97fabf683d.jpg'},
        {c:'Verde Matcha Pastel', hex:'#C7D8B5', s: 3 , imgCambio: 'img/serenity_verde.png'}
    ] },
    // 10. Conjunto Cuadrille
    { id: 10, nombre: "Conjunto Cuadrille", precio: 14990, img: "https://i.pinimg.com/1200x/0f/a5/03/0fa5035381874ff55decdcf244d37fe0.jpg", tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [
        {c:'Verde', hex:'#98ff98', s:5, imgCambio: 'https://i.pinimg.com/1200x/0f/a5/03/0fa5035381874ff55decdcf244d37fe0.jpg'},
        {c:'Rosado', hex:'#F7AFC4', s: 10 , imgCambio: 'img/cuadrille_rosado.png'},
        {c:'Celeste Bebé', hex:'#A7D4F7', s: 11, imgCambio: 'img/cuadrille_celeste_bb.png'},
        {c:'Lila', hex:'#D4C4F4', s: 6 , imgCambio: 'img/cuadrille_lila.png'},
        {c:'Durazno', hex:'#F6B278', s: 3 , imgCambio: 'img/cuadrille_durazno.png'}
    ] },
    // 11. Top Básico
    { id: 11, nombre: "Top Básico", precio: 4990, img: "https://i.pinimg.com/736x/65/5e/b1/655eb1d1b45d14652f8ffc83713da015.jpg", tallas: [{t:'XS', s:2}, {t:'S', s:5}, {t:'M', s:0}, {t:'L', s:0}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [
        {c:'Café', hex:'#8b4513', s:5, imgCambio: 'https://i.pinimg.com/736x/65/5e/b1/655eb1d1b45d14652f8ffc83713da015.jpg'},
        {c:'Negro', hex:'#000', s: 4 , imgCambio: 'img/basico_negro.png'},
        {c:'Gris', hex:'#9b9b9bff', s: 6 , imgCambio: 'img/basico_gris.png'},
        {c:'Blanca', hex:'#ffffff', s: 0 , imgCambio: 'img/basico_blanco.png'}
    ] },
    // 12. Falda Efecto Cuero
    { id: 12, nombre: "Falda Efecto Cuero", precio: 19990, img: "https://i.pinimg.com/736x/9b/dc/52/9bdc5261ed92fe056adcca484113c1c5.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}], colores: [
        {c:'Burdeo', hex:'#800020', s:12, imgCambio: 'https://i.pinimg.com/736x/9b/dc/52/9bdc5261ed92fe056adcca484113c1c5.jpg'},
        {c:'Negro', hex:'#000', s: 6 , imgCambio: 'img/ecocuero_negra.png'},
        {c:'Café', hex:'#4B2E1F', s: 2 , imgCambio: 'img/escocuero_cafe.png'},
        {c:'Gris', hex:'#747474ff', s: 9 , imgCambio: 'img/ecocuero_gris.png'}
    ] },
    // 13. Falda con Tachas
    { id: 13, nombre: "Falda con Tachas", precio: 18990, img: "https://i.pinimg.com/1200x/7f/83/06/7f8306afd76b6565ef0608a602f496fd.jpg", tallas: [{t:'S', s:5}, {t:'M', s:0}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [
        {c:'Negro', hex:'#000', s:5, imgCambio: 'https://i.pinimg.com/1200x/7f/83/06/7f8306afd76b6565ef0608a602f496fd.jpg'},
    ] },
    // 14. Falda Encaje
    { id: 14, nombre: "Falda Encaje", precio: 10990, img: "https://i.pinimg.com/1200x/57/06/db/5706db7f1b957b174f7683c3d246e90a.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}, {t:'3XL', s:2}], colores: [
        {c:'Lila', hex:'#c8a2c8', s:5, imgCambio: ''},
        {c:'Celeste', hex:'#', s: 8 , imgCambio: ''},
        {c:'Rosada', hex:'#', s: 12 , imgCambio: ''}
    ] },
    // 15. Falda con Hebillas
    { id: 15, nombre: "Falda con Hebillas", precio: 13990, img: "https://i.pinimg.com/736x/74/79/04/747904606ef24e86b8062467c3cca63f.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:2}, {t:'XXL', s:2}], colores: [{c:'Gris', hex:'#808080', s:5}] },
    // 16. Top Floral con Moño
    { id: 16, nombre: "Top Floral con Moño", precio: 9990, img: "https://i.pinimg.com/1200x/ef/86/a6/ef86a601c7da6484ff67106794f9fb35.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [
        {c:'Lila', hex:'#e6e6fa', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 17. Top Asimétrico Efecto Cuero
    { id: 17, nombre: "Top Asimétrico Efecto Cuero", precio: 9990, img: "https://i.pinimg.com/736x/46/f8/d7/46f8d723a2aa0387811aa1fafeb45b85.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}], colores: [
        {c:'Burdeo', hex:'#800020', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 18. Top Asimétrico
    { id: 18, nombre: "Top Asimétrico", precio: 7990, img: "https://i.pinimg.com/736x/d0/83/28/d0832852f3227a8c685af591c2168308.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:2}, {t:'XXL', s:2}], colores: [
        {c:'Marrón', hex:'#a52a2a', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 19. Top con Lazo
    { id: 19, nombre: "Top con Lazo", precio: 6990, img: "https://i.pinimg.com/736x/8c/02/b7/8c02b78a51d7ab7d6f6279cd8e530ac8.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [
        {c:'Burdeo', hex:'#800020', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 20. Jeans Cargo Desgastado
    { id: 20, nombre: "Jeans Cargo Desgastado", precio: 24990, img: "https://i.pinimg.com/736x/a6/2f/40/a62f40c9a7fbc0b3f1764cdd5ddb78be.jpg", tallas: [{t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:3}, {t:'50', s:2}], colores: [{c:'Gris', hex:'#696969', s:5}] },
    // 21. Set Top + Falda Cuadrillé
    { id: 21, nombre: "Set Top + Falda Cuadrillé", precio: 24990, img: "https://i.pinimg.com/736x/57/c0/25/57c025cc470140457b354fe5843c0fdf.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}, {t:'3XL', s:2}], colores: [
        {c:'Café', hex:'#8b4513', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 22. Vestido con Pliegues
    { id: 22, nombre: "Vestido con Pliegues", precio: 19990, img: "https://i.pinimg.com/736x/f3/65/c9/f365c9cdd7e080aa241569f5b162c5c1.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}, {t:'4XL', s:2}], colores: [{c:'Gris', hex:'#a9a9a9', s:5}] },
    // 23. Vestido Mangas Cuadrillé
    { id: 23, nombre: "Vestido Mangas Cuadrillé", precio: 21990, img: "https://i.pinimg.com/736x/91/05/ea/9105ea9470d199e38f94b5010b24db73.jpg", tallas: [{t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}], colores: [{c:'Negro', hex:'#000', s:5}] },
    // 24. Jeans Estrellas Desgastadas
    { id: 24, nombre: "Jeans Estrellas Desgastadas", precio: 23990, img: "https://i.pinimg.com/736x/87/49/18/8749181b262179b4d6d248032a290220.jpg", tallas: [{t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:5}, {t:'50', s:3}, {t:'52', s:2}], colores: [{c:'Celeste', hex:'#87ceeb', s:5}] },
    // 25. Jeans Ultra Rasgados
    { id: 25, nombre: "Jeans Ultra Rasgados", precio: 21990, img: "https://i.pinimg.com/1200x/6e/86/07/6e8607cf7487c637df93b253bf976f33.jpg", tallas: [{t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:5}, {t:'50', s:3}], colores: [{c:'Celeste', hex:'#87ceeb', s:5}] },
    // 26. Jeans Rasgados
    { id: 26, nombre: "Jeans Rasgados", precio: 19990, img: "https://i.pinimg.com/736x/97/12/9e/97129e7f36a0e0869ee279f296ab09ec.jpg", tallas: [{t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}, {t:'48', s:5}, {t:'50', s:2}, {t:'52', s:2}, {t:'54', s:1}], colores: [{c:'Azul', hex:'#1e90ff', s:5}] },
    // 27. Pantalón Cargo Camuflado
    { id: 27, nombre: "Pantalón Cargo Camuflado", precio: 22490, img: "https://i.pinimg.com/736x/0f/59/1b/0f591b7ffa17a0bb83e301d2272e892d.jpg", tallas: [{t:'36', s:2}, {t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:2}], colores: [{c:'Verde', hex:'#556b2f', s:5}] },
    // 28. Shorts Denim Estrella
    { id: 28, nombre: "Shorts Denim Estrella", precio: 12990, img: "https://i.pinimg.com/736x/0c/82/ea/0c82eab4140317bddc45a3121aff671e.jpg", tallas: [{t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}, {t:'46', s:5}], colores: [{c:'Azul', hex:'#4682b4', s:5}] },
    // 29. Short Cuadrillé Fruncido
    { id: 29, nombre: "Short Cuadrillé Fruncido", precio: 9990, img: "https://i.pinimg.com/736x/56/bd/a0/56bda041c59b11277f0eb56601ca8f2b.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:3}], colores: [{c:'Rojo', hex:'#b22222', s:5}] },
    // 30. Shorts Denim Araña
    { id: 30, nombre: "Shorts Denim Araña", precio: 12990, img: "https://i.pinimg.com/1200x/1d/df/ca/1ddfcaf59dfdda67d5dc4763f138beb8.jpg", tallas: [{t:'36', s:5}, {t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}], colores: [{c:'Negro', hex:'#2f4f4f', s:5}] },
    // 31. Set Top + Short Rayado
    { id: 31, nombre: "Set Top + Short Rayado", precio: 11990, img: "https://i.pinimg.com/1200x/8f/14/ba/8f14baa94119318bf3a23be0e8f02e44.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}], colores: [
        {c:'Celeste', hex:'#b0e0e6', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 32. Short Rayado
    { id: 32, nombre: "Short Rayado", precio: 10990, img: "https://i.pinimg.com/1200x/8f/21/65/8f21658f6dccbff6ffff849e56a5e647.jpg", tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}], colores: [
        {c:'Rosa', hex:'#ffb6c1', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 33. Short Denim Margarita
    { id: 33, nombre: "Short Denim Margarita", precio: 12990, img: "https://i.pinimg.com/736x/e2/35/da/e235da80c1856d3bcec997c2810e9f08.jpg", tallas: [{t:'36', s:5}, {t:'38', s:5}, {t:'40', s:5}, {t:'42', s:5}, {t:'44', s:5}], colores: [{c:'Azul', hex:'#87ceeb', s:5}] },
    // 34. Short Texturado con Cinturón
    { id: 34, nombre: "Short Texturado con Cinturón", precio: 14990, img: "https://i.pinimg.com/1200x/af/c7/4e/afc74e863c2f90b9eec861c615e42b5c.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}], colores: [
        {c:'Blanco', hex:'#fff', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
        
    ] },
    // 35. Short Floral con Encaje
    { id: 35, nombre: "Short Floral con Encaje", precio: 12990, img: "https://i.pinimg.com/1200x/17/e2/7a/17e27a421887e09f8878167199845fc3.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}], colores: [{c:'Blanco', hex:'#f8f8ff', s:5}] },
    // 36. Enterito Denim Estrella
    { id: 36, nombre: "Enterito Denim Estrella", precio: 15990, img: "https://i.pinimg.com/1200x/36/80/ad/3680ad2a10eda99411cc62eb70d5bb94.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:4}], colores: [{c:'Azul', hex:'#4169e1', s:5}] },
    // 37. Enterito Floral
    { id: 37, nombre: "Enterito Floral", precio: 13990, img: "https://i.pinimg.com/1200x/a3/3f/19/a33f19f4f81b699e704e529f5f25fe48.jpg", tallas: [{t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:3}, {t:'4XL', s:2}], colores: [
        {c:'Beige', hex:'#f5f5dc', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 38. Enterito Corazones
    { id: 38, nombre: "Enterito Corazones", precio: 14990, img: "https://i.pinimg.com/1200x/4b/a1/7e/4ba17e104edcc39f341c3cc0601396e2.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [
        {c:'Beige', hex:'#f5f5dc', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 39. Enterito Floral
    { id: 39, nombre: "Enterito Floral", precio: 17990, img: "https://i.pinimg.com/1200x/42/93/a7/4293a73cb4dc47e285da0fb42f578c49.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:2}], colores: [
        {c:'Beige', hex:'#f5f5dc', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 40. Enterito con Detalles
    { id: 40, nombre: "Enterito con Detalles", precio: 16990, img: "https://i.pinimg.com/1200x/c6/b8/f0/c6b8f0327ec83648c5d2c49d56edc92a.jpg", tallas: [{t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:5}, {t:'3XL', s:2}], colores: [
        {c:'Negro', hex:'#000', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 41. Enterito con Lazos
    { id: 41, nombre: "Enterito con Lazos", precio: 17490, img: "https://i.pinimg.com/1200x/da/88/7d/da887dd1ca0dcaf3f4cb72f4c0cb7407.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}], colores: [
        {c:'Gris', hex:'#708090', s:5, imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    // 42. Enterito con Tirantes
    { id: 42, nombre: "Enterito con Tirantes", precio: 14490, img: "https://i.pinimg.com/1200x/b4/7b/03/b47b0342fa2c7c9332e9976ac2f06387.jpg", tallas: [{t:'S', s:5}, {t:'M', s:5}, {t:'L', s:5}, {t:'XL', s:5}, {t:'XXL', s:3}], colores: [
        {c:'Beige', hex:'#f5f5dc', s:5, imgCambio:''},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    //43. Enterito con Cinturón
    { id: 43, nombre: "Enterito con Cinturón", precio: 15990, img: "https://i.pinimg.com/1200x/56/50/f5/5650f55d0d7a3df6391d237a64a7b8f7.jpg", tallas: [{t:'S', s:3},{t:'M', s:5},{t:'L', s:0},{t:'XL', s:5}, {t:'XXL', s:5}], colores: [
        {c:'Blanco', hex:'#ffffff', s:4, imgCambio:'https://i.pinimg.com/1200x/56/50/f5/5650f55d0d7a3df6391d237a64a7b8f7.jpg'},
        {c:'', hex:'#', s: 8 , imgCambio: ''},
        {c:'', hex:'#', s: 8 , imgCambio: ''}
    ] },
    
    // ESCENARIO ERROR (HU-01): Imagen Rota
    { id: 44, nombre: "Olive Élise Top", precio: 9990, img: "img/imagenotfoud.png", tallas: [{t:'S', s:5},{t:'M', s:5},{t:'L', s:0},{t:'XL', s:5}, {t:'XXL', s:5}], colores: [{c:'Verde Oliva', hex:'#6B7A4B', s:5}] } 
];
// ======================================================
// 1. AGOTAR COMPLETAMENTE PRODUCTOS AL AZAR
// ======================================================
function agotarProductosCompletamente(cantidad = 4) {
    const indices = new Set();

    while (indices.size < cantidad) {
        const rand = Math.floor(Math.random() * productos.length);

        // Solo elegir productos que sí tienen tallas/colores
        if (
            (productos[rand].tallas && productos[rand].tallas.length > 0) ||
            (productos[rand].colores && productos[rand].colores.length > 0)
        ) {
            indices.add(rand);
        }
    }

    // Aplicar el agotamiento completo
    indices.forEach(i => {
        productos[i].tallas = [];
        productos[i].colores = [];
    });

    console.log("Productos agotados completamente:", Array.from(indices));
}

agotarProductosCompletamente(5);


// ==========================================
// 2. GESTIÓN GLOBAL DEL CARRITO
// ==========================================
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

// --- MEMORIA PARA RECORDAR SELECCIÓN PREVIA ---
const memoriaSeleccion = {}; 

// ==========================================
// 3. LOGICA PRINCIPAL (DOM LOADED)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    actualizarBadge();

    // A. LÓGICA DE CARRITO.HTML
    const tablaBody = document.getElementById('tablaCarritoBody');
    if (tablaBody) {
        renderizarPaginaCarrito();
        return; // Si estamos en carrito, no ejecutamos lógica de catálogo/index
    }

    // =========================================================
    // B. LÓGICA DE CATALOGO (FILTROS + BUSCADOR + ORDENAMIENTO)
    // =========================================================
    const contenedor = document.getElementById('contenedorProductos');
    const inputBuscador = document.getElementById('inputBuscador');
    
    // Elementos del Filtro Sidebar
    const selectOrden = document.getElementById('selectOrden');
    const selectTalla = document.getElementById('selectTalla');
    const inputMin = document.getElementById('inputPrecioMin');
    const inputMax = document.getElementById('inputPrecioMax');
    const contador = document.getElementById('contadorProductos');

    if (contenedor) {
        // Función Maestra de Filtrado
        const aplicarFiltros = () => {
            let resultado = [...productos]; // Hacemos una copia de la lista original

            // 1. Filtro por Buscador (Nombre)
            if (inputBuscador && inputBuscador.value) {
                const termino = inputBuscador.value.toLowerCase();
                resultado = resultado.filter(p => p.nombre.toLowerCase().includes(termino));
            }

            // 2. Filtro por Talla
            if (selectTalla && selectTalla.value !== 'todas') {
                const tallaElegida = selectTalla.value;
                // Buscamos si el producto tiene esa talla en su array 'tallas'
                resultado = resultado.filter(p => 
                    p.tallas && p.tallas.some(t => t.t === tallaElegida && t.s > 0)
                );
            }

            // 3. Filtro por Precio (Rango)
            if (inputMin && inputMin.value) {
                resultado = resultado.filter(p => p.precio >= parseFloat(inputMin.value));
            }
            if (inputMax && inputMax.value) {
                resultado = resultado.filter(p => p.precio <= parseFloat(inputMax.value));
            }

            // 4. Ordenamiento
            if (selectOrden) {
                const orden = selectOrden.value;
                if (orden === 'precioAsc') {
                    resultado.sort((a, b) => a.precio - b.precio);
                } else if (orden === 'precioDesc') {
                    resultado.sort((a, b) => b.precio - a.precio);
                } else if (orden === 'nombreAsc') {
                    resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
                } else {
                    // Por defecto (ID o orden original)
                    resultado.sort((a, b) => a.id - b.id);
                }
            }

            // 5. Actualizar Contador
            if(contador) contador.innerText = `${resultado.length} Productos`;

            // 6. Renderizar
            mostrarCatalogo(resultado);
        };

        // Escuchamos eventos en todos los inputs
        if(inputBuscador) inputBuscador.addEventListener('input', aplicarFiltros);
        if(selectOrden) selectOrden.addEventListener('change', aplicarFiltros);
        if(selectTalla) selectTalla.addEventListener('change', aplicarFiltros);
        if(inputMin) inputMin.addEventListener('input', aplicarFiltros);
        if(inputMax) inputMax.addEventListener('input', aplicarFiltros);

        // Ejecutar filtro inicial (para cargar todo al inicio)
        aplicarFiltros();
    }



    // C. LÓGICA DE INDEX.HTML (CARRUSEL DESTACADOS)
    const contenedorCarrusel = document.getElementById('contenedorCarruselInner');
    
    if (contenedorCarrusel) {
        // 1. Elegimos más productos para el carrusel
        // NOTA: Se actualizaron los IDs para coincidir con el nuevo orden de la base de datos
        const idsDestacados = [2, 14, 1, 16, 3, 5]; 
        const listaDestacados = productos.filter(p => idsDestacados.includes(p.id));

        // 2. Configuración responsive
        const esMovil = window.innerWidth < 768;
        const tamanoGrupo = esMovil ? 1 : 3;

        contenedorCarrusel.innerHTML = "";

        // 3. Generamos los slides
        for (let i = 0; i < listaDestacados.length; i += tamanoGrupo) {
            const grupo = listaDestacados.slice(i, i + tamanoGrupo);
            const activeClass = i === 0 ? 'active' : '';
            
            let tarjetasHTML = "";
            grupo.forEach(p => {
                const colClass = esMovil ? 'col-10 mx-auto' : 'col-md-4';
                
                // CALCULAR STOCK TOTAL
                let stockTotal = 0;
                if(p.tallas && p.tallas.length > 0) {
                    stockTotal = p.tallas.reduce((acc, t) => acc + t.s, 0);
                }
                const claseAgotado = stockTotal === 0 ? 'producto-agotado' : '';

                // Generación HTML limpia, sin estilos en línea
                tarjetasHTML += `
                    <div class="${colClass} mb-4">
                        <div class="card-producto h-100 shadow-sm ${claseAgotado}" onclick="abrirDetalle(${p.id})">
                            <div class="img-contenedor">
                                <img src="${p.img}" class="w-100 h-100" onerror="this.src='${imagenPorDefecto}'">
                            </div>
                            <div class="info-producto p-3">
                                <h5 class="text-truncate">${p.nombre}</h5>
                                <p class="precio mb-0">${formatoMoneda(p.precio)}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            contenedorCarrusel.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <div class="row justify-content-center">
                        ${tarjetasHTML}
                    </div>
                </div>
            `;
        }
    }
});

// ==========================================
// 4. FUNCIONES MODAL, TOAST Y COMPRA
// ==========================================
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
    
    // Recuperar cantidad previa
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
    imgEl.style.opacity = '1'; // Reset opacity
    imgEl.classList.remove("img-agotada");


    /* ======================================================
    MARCAR AGOTADO EN EL MODAL Y BLOQUEAR BOTÓN
    ====================================================== */

    const modalContent = document.querySelector('#modalProducto .modal-content');
    modalContent.classList.remove("modal-agotado");

    // Calcular stock total
    let totalStock = 0;
    if (prod.tallas && prod.tallas.length > 0) {
        totalStock = prod.tallas.reduce((acc, t) => acc + t.s, 0);
    }

    // ===============================================
    //  A) PRODUCTO COMPLETAMENTE AGOTADO
    // ===============================================
    if (
        (!prod.tallas || prod.tallas.length === 0) &&
        (!prod.colores || prod.colores.length === 0)
    ) {
        modalContent.classList.add("modal-agotado");

        const imgModal = document.getElementById('modalImg');
        imgModal.src = prod.img;

        // Aplicar efecto gris
        imgModal.classList.add("img-agotada");


        // Mensaje principal bajo la cantidad
        msgStock.innerText = "Producto no disponible";
        msgStock.className = "text-danger fw-bold mb-3";

        // Deshabilitar controles
        inputCant.disabled = true;
        document.getElementById('btnRestar').disabled = true;
        document.getElementById('btnSumar').disabled = true;
        btnAgregar.disabled = true;
        btnAgregar.classList.add("disabled");

        // Mostrar mensajes de "no disponibles"
        document.getElementById('contenedorColores').innerHTML = `
            <div class="alert alert-light border-danger text-danger fw-semibold py-2 rounded-3">
                ⚠️ Colores no disponibles
            </div>
        `;

        document.getElementById('contenedorTallas').innerHTML = `
            <div class="alert alert-light border-danger text-danger fw-semibold py-2 rounded-3">
                ⚠️ Tallas no disponibles
            </div>
        `;

        modalProducto.show();
        return;
    }


    /* ============================================================
    RENDERIZAR COLORES (AUNQUE EL PRODUCTO ESTÉ AGOTADO)
    ============================================================ */
    const divColores = document.getElementById('contenedorColores');
    divColores.innerHTML = "";

    if (!prod.colores || prod.colores.length === 0) {

        divColores.innerHTML = `
            <span class="aviso-error d-block text-danger fw-bold">
                ⚠️ Colores no disponibles
            </span>
        `;

    } else {

        prod.colores.forEach(c => {

            const btn = document.createElement('div');
            btn.className = c.s > 0 ? 'btn-color' : 'btn-color sin-stock';
            btn.style.backgroundColor = c.hex;
            btn.title = c.c;

            if (c.s > 0 && totalStock > 0) {
                btn.onclick = () => {

                    document.querySelectorAll('.btn-color')
                        .forEach(b => b.classList.remove('active'));

                    btn.classList.add('active');

                    colorSeleccionado = c.c;

                    // Cambio de imagen dinámico
                    const imgPrincipal = document.getElementById('modalImg');
                    const nuevaImagen = c.imgCambio ? c.imgCambio : prod.img;

                    imgPrincipal.style.opacity = '0.5';
                    setTimeout(() => {
                        imgPrincipal.src = nuevaImagen;
                        imgPrincipal.style.opacity = '1';
                    }, 200);

                    chequearSeleccion();
                };
            }

            divColores.appendChild(btn);
        });
    }


    /* ============================================================
    RENDERIZAR TALLAS (AUNQUE EL PRODUCTO ESTÉ AGOTADO)
    ============================================================ */
    const divTallas = document.getElementById('contenedorTallas');
    divTallas.innerHTML = "";

    if (!prod.tallas || prod.tallas.length === 0) {

        divTallas.innerHTML = `
            <span class="aviso-error d-block text-danger fw-bold">
                ⚠️ Tallas no disponibles
            </span>
        `;

    } else {

        prod.tallas.forEach(t => {

            const btn = document.createElement('button');
            btn.innerText = t.t;
            btn.className = t.s > 0 ? 'btn-talla' : 'btn-talla sin-stock';

            if (t.s > 0 && totalStock > 0) {
                btn.onclick = () => {

                    document.querySelectorAll('.btn-talla')
                        .forEach(b => b.classList.remove('active'));

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
    const nInput = inputCant.cloneNode(true);
    
    btnRestar.parentNode.replaceChild(nRestar, btnRestar);
    btnSumar.parentNode.replaceChild(nSumar, btnSumar);
    btnAgregarModal.parentNode.replaceChild(nAgregar, btnAgregarModal);
    inputCant.parentNode.replaceChild(nInput, inputCant);

    // Validación input
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
            memoriaSeleccion[idProducto] = val; 
        }
    });

    nRestar.onclick = () => {
        let v = parseInt(nInput.value);
        if(v > 1) {
            nInput.value = v - 1;
            memoriaSeleccion[idProducto] = v - 1;
        }
    };

    nSumar.onclick = () => {
        let v = parseInt(nInput.value);
        if(v < maxStockActual) {
            nInput.value = v + 1;
            memoriaSeleccion[idProducto] = v + 1;
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
        if (isNaN(cant) || cant < 1) { 
            mostrarToast("Ingrese una cantidad válida", "error");
            return;
        }

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

        const tallaParaRestar = prod.tallas.find(t => t.t === tallaSeleccionada);
        if (tallaParaRestar) {
            tallaParaRestar.s -= cant; 
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
            // CALCULAR STOCK TOTAL (para catálogo)
            let stockTotal = 0;
            if(p.tallas && p.tallas.length > 0) {
                stockTotal = p.tallas.reduce((acc, t) => acc + t.s, 0);
            }
            const claseAgotado = stockTotal === 0 ? 'producto-agotado' : '';

            cont.innerHTML += `
                <div class="col-md-3 col-6 mb-4">
                    <div class="card-producto ${claseAgotado}" onclick="abrirDetalle(${p.id})">
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

// ==========================================
// 5. FUNCIONES PÁGINA CARRITO (VERSIÓN NUEVA Y COMPLETA)
// ==========================================

function renderizarPaginaCarrito() {
    const tbody = document.getElementById('tablaCarritoBody');
    const seccion = document.getElementById('seccionCarrito');
    const vacio = document.getElementById('mensajeCarritoVacio');
    const totalTexto = document.getElementById('textoTotal');

    tbody.innerHTML = "";

    // Si no hay productos, mostrar mensaje vacío
    if (carrito.length === 0) {
        seccion.classList.add('d-none');
        vacio.classList.remove('d-none');
        totalTexto.innerText = "$0";
        return;
    }

    seccion.classList.remove('d-none');
    vacio.classList.add('d-none');

    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cant;
        total += subtotal;

        tbody.innerHTML += `
            <tr class="fade-in">
                <td style="width: 90px;">
                    <img src="${item.img}" class="img-producto-carrito" onerror="this.src='${imagenPorDefecto}'">
                </td>

                <td>
                    <h6 class="mb-1">${item.nombre}</h6>
                    <small class="text-muted">Talla: ${item.talla} | Color: ${item.color}</small>
                </td>

                <td class="text-center">

                    <div class="d-flex justify-content-center align-items-center gap-2">

                        <button class="btn btn-light btn-cantidad" onclick="cambiarCantidad(${index}, -1)">
                            -
                        </button>

                        <span class="badge bg-light text-dark border px-3 py-2">
                            ${item.cant}
                        </span>

                        <button class="btn btn-light btn-cantidad" onclick="cambiarCantidad(${index}, 1)">
                            +
                        </button>

                    </div>

                </td>

                <td class="text-end">${formatoMoneda(item.precio)}</td>
                <td class="text-end fw-bold">${formatoMoneda(subtotal)}</td>

                <td class="text-end">
                    <span class="btn-eliminar material-symbols-outlined"
                          onclick="eliminarDelCarrito(${index})">
                        delete
                    </span>
                </td>
            </tr>
        `;
    });

    totalTexto.innerText = formatoMoneda(total);
    guardarCarrito();
}

function cambiarCantidad(index, cambio) {
    const item = carrito[index];
    const nuevaCant = item.cant + cambio;

    // No permitir bajar de 1
    if (nuevaCant < 1) return;

    // Validar stock máximo
    if (nuevaCant > item.maxStock) {
        // Aviso estético
        mostrarToast(`Solo quedan ${item.maxStock} unidades disponibles ✨`, "warning");
        return;
    }

    // Aplicar nueva cantidad
    item.cant = nuevaCant;

    // Guardar & refrescar
    guardarCarrito();
    renderizarPaginaCarrito();
}



function abrirModalGracias() {
    const modal = new bootstrap.Modal(document.getElementById('modalGracias'));
    modal.show();
}

function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    renderizarPaginaCarrito();
}

document.getElementById('modalGracias')
    .addEventListener('hidden.bs.modal', () => {
        vaciarCarrito();
    });


window.eliminarDelCarrito = (index) => {
    carrito.splice(index, 1);
    guardarCarrito();
    renderizarPaginaCarrito();
};



