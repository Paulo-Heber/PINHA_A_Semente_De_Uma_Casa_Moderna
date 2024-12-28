import { useState } from "react";
import { Rooms, RoomsLabel, MenuConteiner, MenuFilters, Title, MaterialList, FilterSelector } from "../../styles/menu-style";
import { Link } from "react-router-dom";

type menuStructure = {
    title: string,
    rooms: string[],
    material?: string[]
}

type HomepageMenu = {
    environments: menuStructure;
    materials: menuStructure;
}

const HomepageMenu: HomepageMenu = {
    environments: {
        title: 'AMBIENTES',
        rooms: ['Sala', 'Cozinha', 'Quarto', 'Banheiro', 'Escritório', 'Área de serviço']
    },

    materials: {
        title: 'MATERIAIS',
        rooms: ["mdf's", 'Ferragens'],
        material: ["Material1", "Material2", "Material3", "Material4", "Material5"]
    }
}

const RetornoDaAPI = {
    nome: ["Material1", "Material2", "Material3", "Material4", "Material5", "Material6", "Material7", "Material8"]
}

export function Menu() {

    const menuEntries = Object.entries(HomepageMenu);
    const [selectedFilter, setSelectedFilter] = useState<string>('')

    //REUTILIZAR ESSE CÓDIGO QUANDO OS CARDS DE MÓVEIS ESTIVEREM PRONTOS
    const selectRoom = (room: string) => {
        setSelectedFilter(room)
    }
    //REUTILIZAR ESSE CÓDIGO QUANDO OS CARDS DE MÓVEIS ESTIVEREM PRONTOS

    const PageID = window.location.pathname;
    const UtensiliosDeMontagem = RetornoDaAPI.nome.map((material, index) => {
        return <li key={index}>{material}</li>
    });



    if (PageID === '/') {
        return (
            <MenuConteiner>
                {menuEntries.map(([key, value]) => {
                    const sectionTitle = value.title;

                    const RoomsList = value.rooms.map((room, index) => {

                        if (room === 'Ferragens') {
                            return (
                                <Link key={room} to={'/production_materials'}>
                                    <Rooms key={index} onClick={() => selectRoom(room)}>
                                        <RoomsLabel checked={room === selectedFilter}>
                                            <FilterSelector
                                                type="radio"
                                                name="filter"
                                                value={room} />{room}
                                        </RoomsLabel>
                                    </Rooms>
                                </Link>
                            )
                        } else {
                            return (
                                <Rooms key={index} onClick={() => selectRoom(room)}>
                                    <RoomsLabel checked={room === selectedFilter}>
                                        <FilterSelector
                                            type="radio"
                                            name="filter"
                                            value={room} />{room}
                                    </RoomsLabel>
                                </Rooms>
                            )
                        }
                    })


                    return (
                        <MenuFilters key={key}>
                            <Title> {sectionTitle}</Title>
                            <ul>{RoomsList}</ul>
                        </MenuFilters>
                    )

                })}
            </MenuConteiner>)
    } else {
        return (
            <MenuConteiner>
                <Title>SUMÁRIO</Title>
                <MaterialList >
                    {UtensiliosDeMontagem}
                </MaterialList>
            </MenuConteiner>
        )
    }
}

/*
PARA O FILTRO
Tenho que verificar se a room do item é igual a room do selectedFilter
a room do item vem do productsData
*/