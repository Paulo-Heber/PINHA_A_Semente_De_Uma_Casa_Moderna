import { useEffect, useState } from "react";
import { RoomSelector, Rooms, RoomsLabel, MenuConteiner, MenuFilters, Title } from "./menu-style";

type menuStructure = {
    title: string,
    rooms: string[]
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
        rooms: ["mdf's", 'Ferragens']
    }
}


export function Menu() {
    
    const menuEntries = Object.entries(HomepageMenu);
    const [selectedFilter, setSelectedFilter] = useState<string>('')

    //REUTILIZAR ESSE CÓDIGO QUANDO OS CARDS DE MÓVEIS ESTIVEREM PRONTOS
    const selectRoom = (room: string) => {
        setSelectedFilter(room)
    }
    //REUTILIZAR ESSE CÓDIGO QUANDO OS CARDS DE MÓVEIS ESTIVEREM PRONTOS

  
    
    return (
        <MenuConteiner>
            {menuEntries.map(([key, value]) => {
                const sectionTitle = value.title;
                const RoomsList = value.rooms.map((room, index) => {
                    return (
                        <Rooms key={index} onClick={() => selectRoom(room)}>
                            <RoomsLabel checked={room===selectedFilter}>
                                <RoomSelector type="radio" name="filter" value={room} />{room}
                            </RoomsLabel>
                        </Rooms>
                    )

                })

                return (
                    <MenuFilters key={key}>
                        <Title> {sectionTitle}</Title>
                        <ul>{RoomsList}</ul>
                    </MenuFilters>
                )

            })}
        </MenuConteiner>
    )
}