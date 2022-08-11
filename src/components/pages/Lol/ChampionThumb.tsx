import React, { ReactElement } from "react"
import { Box } from '@rebass/grid'

interface ChampionThumbProps {
  championName: string
}

const ChampionThumb = ({ championName }: ChampionThumbProps): ReactElement => {
  return (
    <Box 
      width={48} 
      height={48} 
      css={{ 
        borderRadius: '50%',
        backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/${championName}')`,
        backgroundSize: 'cover',
      }}
    />
  )
}

export default ChampionThumb