import { useState } from "react";
import { Rooms, RoomsLabel, MenuConteiner, MenuFilters, Title, MaterialList, FilterSelector, FiltersContainer } from "../../styles/menu-style";
import { Link } from "react-router-dom";
import { faBath, faBed, faChevronCircleLeft, faCouch, faJugDetergent, faKitchenSet, faStapler, faTools, faTree, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggleMenuContext } from "../../hooks/useToggleMenuContext";

type Room = {
    name: string;
    icon: IconDefinition;
}

type menuStructure = {
    rooms: Room[],
    material?: string[]
}

type HomepageMenu = {
    environments: menuStructure;
}

const HomepageMenu: HomepageMenu = {
    environments: {
        rooms: [
            { name: "Sala", icon: faCouch },
            { name: "Cozinha", icon: faKitchenSet },
            { name: "Quarto", icon: faBed },
            { name: "Banheiro", icon: faBath },
            { name: "Escritório", icon: faStapler },
            { name: "Lavanderia", icon: faJugDetergent },
            { name: "Mdf's", icon: faTree },
            { name: "Ferragens", icon: faTools },
        ]
    },

}

const RetornoDaAPI = {
    nome: ["Material1", "Material2", "Material3", "Material4", "Material5", "Material6", "Material7", "Material8"]
}

export function Menu() {

    const { toggleMenu, handleMenuToggle } = useToggleMenuContext()
    const menuEntries = Object.entries(HomepageMenu);
    const [selectedFilter, setSelectedFilter] = useState<string>('');

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
            <MenuConteiner $togglemenuprop={toggleMenu}>
                <FiltersContainer>
                    {menuEntries.map(([key, value]) => {
                        const RoomsList = value.rooms.map((room, index) => {

                            if (room.name === 'Ferragens') {
                                return (
                                    <Link key={index} to={'/production_materials'}>
                                        <Rooms key={index} onClick={() => selectRoom(room.name)}>
                                            <RoomsLabel checked={room.name === selectedFilter}>
                                                <FilterSelector
                                                    type="radio"
                                                    name="filter"
                                                    value={room.name} />

                                                <FiltersContainer>
                                                    <FontAwesomeIcon icon={room.icon} />
                                                    <p>{room.name}</p>
                                                </FiltersContainer>

                                            </RoomsLabel>
                                        </Rooms>
                                    </Link>
                                )
                            } else {
                                return (
                                    <Rooms key={index} onClick={() => selectRoom(room.name)}>
                                        <RoomsLabel checked={room.name === selectedFilter}>
                                            <FilterSelector
                                                type="radio"
                                                name="filter"
                                                value={room.name} />
                                            <FiltersContainer>
                                                <FontAwesomeIcon icon={room.icon} />
                                                <p>{room.name}</p>
                                            </FiltersContainer>
                                        </RoomsLabel>
                                    </Rooms>
                                )
                            }
                        })



                        return (
                            <MenuFilters key={key}>
                                <ul>{RoomsList}</ul>
                            </MenuFilters>
                        )

                    })}
                </FiltersContainer>
                <button onClick={() => { handleMenuToggle(toggleMenu) }}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </button>
            </MenuConteiner>)
    } else {
        return (
            <MenuConteiner $togglemenuprop={toggleMenu} >
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