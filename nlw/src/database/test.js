const Database = require('./db'); // é o mesmo db.js mas aqui é facultativo, ou seja, não tem necessidade do .js
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
		lat: "-8.0550475",
		lng: "-34.894145", 
		name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.", 
        whatsapp: "909088776655",
		images: [
			"https://images.unsplash.com/photo-1570569695181-40bca161e2b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
			
			"https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
		].toString(),

		instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
		opening_hours: "Horário de visitas Das 18h até 8h",
		open_on_weekends: "0"
	})

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //deletar dados da tabela
    /*console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))*/
})