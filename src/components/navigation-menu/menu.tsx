//devo proucurar uma forma de utilizar input type checkbox para filtrar apenas os móveis que tenham o id igual ao valor do check box selecionado ou ao valor do input de pesquisa.

type menuStructure = {
    title: string,
    filter: string[]
}

type HomepageMenu = {
    environments: menuStructure;
    materials: menuStructure;
}

const HomepageMenu: HomepageMenu = {
    environments: {
        title: 'AMBIENTES',
        filter: ['Sala', 'Cozinha', 'Quarto', 'Banheiro', 'Escritório', 'Área de serviço']
    },

    materials: {
        title: 'MATERIAIS',
        filter: ["mdf's", 'Ferragens']
    }
}

export function Menu() {
    const menuEntries = Object.entries(HomepageMenu);
    return (
        <>
            {menuEntries.map(([key, value]) => {
                const sectionTitle = value.title;
                const pageList = value.filter.map((filter, key) => {
                    return (
                        <li key={key}>
                            <label>
                                <input type="radio" name="filter" />{filter}
                            </label>
                        </li>
                    )
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