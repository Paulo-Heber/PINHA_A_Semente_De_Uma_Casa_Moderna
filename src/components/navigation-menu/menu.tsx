//vou ter que ter objetos para acessalos dependendo de qual página estiver sendo carregada na tela um para a navegação da tela inicial e outra para a navegação na parte de ferragens e utensílios

type pageCategory = {
    title: string,
    pageList: string[]
}

type HomepageMenu = {
    environments: pageCategory;
    materials: pageCategory;
}

const HomepageMenu: HomepageMenu = {

    environments: {
        title: 'AMBIENTES',
        pageList: ['Sala', 'Cozinha', 'Quarto', 'Banheiro', 'Escritório', 'Área de serviço']
    },

    materials: {
        title: 'MATERIAIS',
        pageList: ["mdf's", 'Ferragens']
    }

}

export function Menu() {
    const menuEntries = Object.entries(HomepageMenu);

    return (
        <>
            {menuEntries.map(([key, value]) => {
                const sectionTitle = value.title;
                const pageList = value.pageList.map((page, key) => {
                    return <li key={key}>{page}</li>
                })

                return (
                    <div key={key}>
                        <h2> {sectionTitle}</h2>
                        <ul>{pageList}</ul>
                    </div>
                )

            })}
        </>
    )

}