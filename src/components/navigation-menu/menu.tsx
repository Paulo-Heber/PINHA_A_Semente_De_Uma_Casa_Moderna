//vou ter que ter objetos para acessalos dependendo de qual página estiver sendo carregada na tela um paga a navegação da tela inicial e outra para a navegação na parte de ferragens e utensílios

type HomepageMenu = {
    title: string[];
    environments: string[];
    materials: string[];
}

const HomepageMenu: HomepageMenu = {
    title: ['AMBIENTES', 'MATERIAIS'],
    environments: ['Sala', 'Cozinha', 'Quarto', 'Banheiro', 'Escritório', 'Área de serviço'],
    materials: ["mdf's", 'Ferragens']
}

export function Menu() {

}