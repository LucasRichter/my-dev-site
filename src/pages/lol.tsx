import { DDragonChampionListDataDTO } from 'kayn/typings/ddragon-dtos'
import { GetServerSideProps, NextPage } from 'next'
import React, { useCallback, useEffect, useState } from 'react'
import { getChampions } from '../services/dDragon'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { resetServerContext } from "react-beautiful-dnd";
import { Box, Flex } from '@rebass/grid'
import { Heart } from 'react-feather';
import championsDate from '../assets/championsDate.json'
import { Heading } from 'styled-typography';
import { withTranslation } from 'next-i18next';
import ChampionCard from '../components/pages/Lol/ChampionCard';
import ChampionTimeline from '../components/pages/Lol/ChampionTimeline';

interface LolProps {
  data: DDragonChampionListDataDTO[]
  t: any;
}

function shuffle(array: any[]): any[] {
  return [...array].sort(() => Math.random() - 0.5);
}

const Lol: NextPage<LolProps> = ({data, t}: LolProps) => {
  const [chances, setChances] = useState(3)
  const [characters, updateCharacters] = useState([]);
  const [allChampions, setAllChampions] = useState<DDragonChampionListDataDTO[]>(data)
  const [randomChampion, setRandomChampion] = useState<DDragonChampionListDataDTO>()

  const getRandomChar = useCallback(
    () => {
      const newAllChampions = shuffle(allChampions)
      setRandomChampion(newAllChampions.pop())
      setAllChampions([...newAllChampions])
    },
    [allChampions, setAllChampions, setRandomChampion],
  )
  

  const initChar = useCallback(
    () => {
      const newAllChampions = shuffle(allChampions)
      setAllChampions(newAllChampions)
      updateCharacters([newAllChampions.pop()])
    },
    [allChampions, setAllChampions, setRandomChampion],
  )

  useEffect(() => {
    getRandomChar()
    initChar()
  }, [])
  

  const handleOnDragEnd = useCallback(
    ({ destination }) => {
      if (!destination) return;
      const { index: destinationIndex } = destination 
      const items = Array.from(characters);
      const leftCharKey = +items[destinationIndex - 1]?.key
      const rightCharKey = +items[items.length > 1 ? destinationIndex + 1 : 0]?.key
      let isCorrect = false

      if (isNaN(leftCharKey)) {
        isCorrect = +randomChampion.key < rightCharKey
      } else if (isNaN(rightCharKey)) {
        isCorrect = +randomChampion.key > leftCharKey
      } else {
        isCorrect = +randomChampion.key > leftCharKey && +randomChampion.key < rightCharKey
      }

      if (!isCorrect) {
        setChances(v => v - 1)
      }

      items.splice(destinationIndex, 0, {
        ...randomChampion,
        isError: !isCorrect,
      });

      updateCharacters(items.sort((a, b) => +a.key - +b.key));
      getRandomChar();
    },
    [characters, randomChampion]
  )

  return (
    <>
      <Heading level={1}>
        {t('title')}
      </Heading>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Flex width={1} flexDirection='column'>
          <Flex>
            {Array(chances).fill(<Heart />)}
          </Flex>
          <Droppable direction='horizontal' droppableId="characters">
            {(provided) => ( 
              <Flex
                width={1}
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                {...provided.draggableProps}
                ref={provided.innerRef}
              >
                <Flex
                  p={2}
                  mb={2}
                >
                  {randomChampion && (
                    <ChampionCard champion={randomChampion} />
                  )}
                </Flex>
                <Flex
                  backgroundColor="red"
                  p={4}
                  alignItems='center'
                  justifyContent='center'
                  width={1}
                >
                  {characters.map(({isError, ...champion}, index) => {
                    return (
                      <ChampionTimeline isError={isError} champion={champion} index={index} key={champion.key} />
                    );
                  })}
                </Flex>
                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
        </Flex>
      </DragDropContext>
    </>
    
  )
}

export const getServerSideProps: GetServerSideProps = async () =>  {
  resetServerContext();
  const data = getChampions()
  return {
    props: {
      data: Object.values((await data).data)
    },
  }
}

export default withTranslation('lol')(Lol)
