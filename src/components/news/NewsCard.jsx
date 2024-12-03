
//News Card
const NewsCard = () => {
    const news = [
        {
          title: "Obra perdida de Leonardo Da Vinci",
          category: "Arte Digital",
          description: "Una innovadora muestra online utiliza inteligencia artificial para recrear las piezas perdidas.",
          url: "https://www.bbc.com/mundo/noticias/2012/12/121202_cultura_obra_leonardo_da_vinci_bd"
        },
        {
          title: "Nuevo mural urbano en Barcelona homenajea a las mujeres en el arte",
          category: "Arte Urbano",
          description: "El colectivo de artistas locales 'Pintoras del Asfalto' ha creado un mural en Barcelona que celebra la contribución de las mujeres al mundo del arte, inspirado en iconos como Frida Kahlo y Yayoi Kusama.",
          url: "https://www.elperiodico.com/es/sociedad/20241125/grafitti-reinvidicar-dia-internacional-violencia-machista-barcelona-dv-112019889"
        },
        {
          title: "Se descubre una pintura inédita de Picasso en un sótano de París",
          category: "Historia del Arte",
          description: "Expertos en arte han encontrado una obra desconocida de Pablo Picasso escondida en el sótano de una antigua galería de París, la cual podría cambiar la interpretación de su período azul.",
          url: "https://www.pagina12.com.ar/772261-un-tesoro-en-el-sotano-la-increible-historia-del-descubrimie"
        }
      ];

    return (
        <>
            {news.map((item, index) => (
                
                    <div key={index}>
                        <h3 className="text-blue-800 capitalize">{item.category}</h3>
                        <a href= {item.url} target="_blank" className="block mt-2 font-medium text-black-700 hover:underline hover:text-gray-500  ">
                            {item.title}
                        </a>
                    </div>
                
            ))}
        </>
    )
}

export default NewsCard