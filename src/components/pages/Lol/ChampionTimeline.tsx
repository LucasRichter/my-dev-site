import React, { ReactElement } from 'react';
import { DDragonChampionListDataDTO } from 'kayn/typings/ddragon-dtos';
import championsDate from '../../../assets/championsDate.json'
import { Flex, Box } from '@rebass/grid'
import { Draggable } from 'react-beautiful-dnd';
import { Heading, Text } from 'styled-typography';
import ChampionThumb from './ChampionThumb';

const ChampionTimeline = ({ champion, index, isError }: {champion: DDragonChampionListDataDTO, index: number, isError?: boolean}): ReactElement => {
  const { name, key, image } = champion
  return (
    <Draggable isDragDisabled key={key} draggableId={key} index={index+1}>
      {(provided) => (
        <Flex
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
          mx={4}
          alignItems='center'
          flexDirection={index % 2 ? 'column' : 'column-reverse'}
          justifyContent='center'
          css={{
            borderRadius: 10
          }}
        >
          <Flex
            alignItems='center'
            flexDirection={index % 2 ? 'column-reverse' : 'column'}

            justifyContent='center'
          >
            <Box 
              height={100}
              width={20}
              my={4}
              backgroundColor='black'
            />
            <Box
              backgroundColor={isError ? 'red' : 'green'}
              textAlign='center'
            >
              <Heading level={3}>
                {name}
              </Heading>
              <Text color='secondary'>
                {championsDate[name]}
              </Text>
            </Box>            

          </Flex>
          <ChampionThumb championName={image?.full} />
        </Flex>
      )}
    </Draggable>
  )
}

export default ChampionTimeline
