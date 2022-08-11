import { DDragonChampionListDataDTO } from 'kayn/typings/ddragon-dtos';
import React, { ReactElement } from 'react';
import { Flex, Box } from '@rebass/grid'
import { Draggable } from 'react-beautiful-dnd';
import { Heading } from 'styled-typography';
import ChampionThumb from './ChampionThumb';

interface ChampionCardProps {
  champion: DDragonChampionListDataDTO;
}

const ChampionCard = ({ champion }: ChampionCardProps): ReactElement => {
  return (
    <Box minWidth='200px' mx='auto' minHeight='200px' p={5}>
      <Draggable key={champion.id} draggableId={champion.key} index={0}>
        {(provided) => (
          <Flex
            alignItems='center'
            flexDirection='column'
            justifyContent='center'
            ref={provided.innerRef}
            {...provided.draggableProps} 
            {...provided.dragHandleProps}
          >
            <ChampionThumb championName={champion?.image.full} />

            <Box>
              <Heading level={3}>
                {champion.name}
              </Heading>
            </Box>
          </Flex>
        )}
      </Draggable>
    </Box>
  )
}

export default ChampionCard
