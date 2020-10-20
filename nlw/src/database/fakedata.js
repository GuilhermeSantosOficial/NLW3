module.exports = [ //array (colchetes)
	{ //nesse objeto vamos colocar os dados do orphanato. E eu vou fazer dois orfanatos.
		id: 1, // O id é um identificador único.
		lat: "-8.0550475", // latitude da localização do Lar das meninas. Você pode per lá no page-orphanages.js.
		lng: "-34.884145", // longitude da localização do Lar das meninas
		name: "Lar das meninas", // O nome
		description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.", // A descritão igualzinha que está no site.
		images: [ // As imagens estão com um array , para pegar as imagens você pode ir no site do orphanato clicar nas imagens com o botão direito do mouse e copiar link da imagem vai vim esse link: https://source.unsplash.com/random?id=1 mas ele é um randon de imagem (pega imagens aleatórias). Você colocar esse link na sua barra de pesquisa e dar enter e ela vai mostrar um imagem aleatória, porém quando você colocar a imagem ela não vai mais mudar. E você também pode pegar alguma outra imagem e pega o link dela.
			"https://images.unsplash.com/photo-1570569695181-40bca161e2b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", // olha a vírgula
			
			"https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
		],

		instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
		opening_hours: "Horário de visitas Das 18h até 8h",
		open_on_weekends: "1"
	},

	{
		id: 2, //O id é único então n pode ser repetido.
		lat: "-8.0550475",
		lng: "-34.894145",
		name: "Lar dos meninos",
		description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
		image: [
			"https://images.unsplash.com/photo-1570569695181-40bca161e2b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", // olha a vírgula
			
			"https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
		],

		instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
		opening_hours: "Horário de visitas Das 18h até 8h",
		open_on_weekends: "0"
	}
]